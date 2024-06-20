from kubernetes import client, config
from typing import Union
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from os import environ

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
);

if environ.get("PYTHON_ENV", "PRODUCTION") == "PRODUCTION":
    config.load_incluster_config()

def list_all_pods():
    v1 = client.CoreV1Api()
    print("Listing pods with their IPs:")
    ret = v1.list_pod_for_all_namespaces(watch=False)
    for i in ret.items:
        print(f"{i.status.pod_ip}\t{i.metadata.namespace}\t{i.metadata.name}")

def get_pods(namespace:str) -> list[dict[str, str]]:
    v1 = client.CoreV1Api()
    pod_list = v1.list_namespaced_pod(namespace)
    return list(map(lambda pod: {
        "name": pod.metadata.name,
        "phase": pod.status.phase,
        "ip": pod.status.pod_ip
    }, pod_list.items))

def get_vms() -> list[dict[str, str]]:
    instances = client.CustomObjectsApi().list_cluster_custom_object(group="kubevirt.io", version="v1", plural="virtualmachineinstances")

    return list(map(lambda instance: {
        "name": instance['metadata']['name'],
        "cpu": instance['spec']['domain']['cpu']['cores'],
        "memory": instance['spec']['domain']['memory']['guest'],
        "created_at": instance['metadata']['creationTimestamp'],
        "os": instance['metadata']['annotations']['vm.kubevirt.io/os'],
        "disks": instance['spec']['domain']['devices']['disks'],
        "interfaces": instance['spec']['domain']['devices']['interfaces'],
        "machine_type": instance['spec']['domain']['machine']['type'],
    }, instances['items']))


@app.get("/")
def read_root():
    return {"message": "welcome to the best api"}

@app.get("/healthz")
def read_health():
    return {"status": "alive"}

@app.get("/pods")
def read_pods():
    return {"pods": get_pods('jkeam')}

@app.get("/vms")
def read_vms():
    return {"vms": get_vms()}
