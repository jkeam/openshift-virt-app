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
    print("loaded auth")
    config.load_incluster_config()

def list_all_pods():
    print("list_all_pods")
    v1 = client.CoreV1Api()
    ret = v1.list_pod_for_all_namespaces(watch=False)
    for i in ret.items:
        print(f"{i.status.pod_ip}\t{i.metadata.namespace}\t{i.metadata.name}")

def get_pods(namespace:str) -> list[dict[str, str]]:
    print("get_pods")
    v1 = client.CoreV1Api()
    pod_list = v1.list_namespaced_pod(namespace)
    return list(map(lambda pod: {
        "name": pod.metadata.name,
        "phase": pod.status.phase,
        "ip": pod.status.pod_ip
    }, pod_list.items))

def get_vms() -> list[dict[str, str]]:
    print("get_vms")
    api = client.CustomObjectsApi()
    instances = api.list_cluster_custom_object(group="kubevirt.io", version="v1", plural="virtualmachineinstances")

    # map dv by its name
    data_volume_by_name = {}
    data_volumes = api.list_cluster_custom_object(group="cdi.kubevirt.io", version="v1beta1", plural="datavolumes")
    for dv in data_volumes['items']:
        dv_name = dv['metadata']['name']
        data_volume_by_name[dv_name] = dv['spec']

    # map dv for each instance
    volume_mapping_to_instance = {}
    for instance in instances['items']:
        instance_name = instance['metadata']['name']
        volumes = []
        for vol in instance['spec']['volumes']:
            dv_name = vol['dataVolume']['name']
            dv = data_volume_by_name[dv_name]
            volumes.append(dv)
        volume_mapping_to_instance[instance_name] = volumes

    return list(map(lambda instance: {
        "name": instance['metadata']['name'],
        "cpu": instance['spec']['domain']['cpu']['cores'],
        "memory": instance['spec']['domain']['memory']['guest'],
        "created_at": instance['metadata']['creationTimestamp'],
        "os": instance['metadata']['annotations']['vm.kubevirt.io/os'],
        "disks": instance['spec']['domain']['devices']['disks'],
        "data_volumes": volume_mapping_to_instance[instance['metadata']['name']],
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
