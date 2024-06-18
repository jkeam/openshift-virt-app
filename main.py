from kubernetes import client, config
from typing import Union
from fastapi import FastAPI
# from os import environ

app = FastAPI()
config.load_incluster_config()

def list_all_pods(v1):
    print("Listing pods with their IPs:")
    ret = v1.list_pod_for_all_namespaces(watch=False)
    for i in ret.items:
        print(f"{i.status.pod_ip}\t{i.metadata.namespace}\t{i.metadata.name}")

def get_pods(v1, namespace) -> list[dict[str, str]]:
    v1 = client.CoreV1Api()
    pod_list = v1.list_namespaced_pod(namespace)
    return list(map(lambda pod: {
        "name": pod.metadata.name,
        "phase": pod.status.phase,
        "ip": pod.status.pod_ip
    }, pod_list.items))


@app.get("/")
def read_root():
    return {"message": "welcome to the best api"}

@app.get("/healthz")
def read_health():
    return {"status": "alive"}

@app.get("/pods")
def read_pods(item_id: int, q: Union[str, None] = None):
    v1 = client.CoreV1Api()
    return {"pods": get_pods(v1, 'jkeam')}
