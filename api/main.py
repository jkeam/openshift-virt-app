from kubernetes import client, config
from typing import Union
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from os import environ
from sys import stdout
from logging import getLogger, DEBUG, StreamHandler, Formatter

# setup app
app = FastAPI(title="Virt API", summary="OCP Virt API", description="OCP Virt API")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
);

# setup logger
logger = getLogger(__name__)
logger.setLevel(DEBUG)
stream_handler = StreamHandler(stdout)
stream_handler.setFormatter(Formatter("%(asctime)s [%(levelname)s] %(name)s: %(message)s"))
logger.addHandler(stream_handler)
logger.info("API is starting up")

if environ.get("PYTHON_ENV", "PRODUCTION") == "PRODUCTION":
    logger.info("loaded auth")
    config.load_incluster_config()

def list_all_pods():
    logger.info("list_all_pods")
    v1 = client.CoreV1Api()
    ret = v1.list_pod_for_all_namespaces(watch=False)
    for i in ret.items:
        logger.debug(f"{i.status.pod_ip}\t{i.metadata.namespace}\t{i.metadata.name}")

def fetch_pods(namespace:str) -> list[dict[str, str]]:
    logger.info("fetch_pods")
    v1 = client.CoreV1Api()
    pod_list = v1.list_namespaced_pod(namespace)
    return list(map(lambda pod: {
        "name": pod.metadata.name,
        "namespace": pod.metadata.namespace,
        "phase": pod.status.phase,
        "ip": pod.status.pod_ip
    }, pod_list.items))

def fetch_vmnamespaces() -> list[dict[str, str]]:
    logger.info("fetch_vmnamespaces")
    api = client.CustomObjectsApi()
    instances = api.list_cluster_custom_object(group="kubevirt.io", version="v1", plural="virtualmachineinstances")
    return list(map(lambda instance: {
        "namespace": instance['metadata']['namespace']
    }, instances['items']))

def fetch_vms() -> list[dict[str, str]]:
    logger.info("fetch_vms")
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
            dv = vol.get('dataVolume', None)
            if dv:
                dv_name = dv['name']
                dv = data_volume_by_name[dv_name]
                dv['name'] = dv_name
                volumes.append(dv)
        volume_mapping_to_instance[instance_name] = volumes

    return list(map(lambda instance: {
        "name": instance['metadata']['name'],
        "namespace": instance['metadata']['namespace'],
        "cpu": instance['spec']['domain']['cpu']['cores'],
        "memory": instance['spec']['domain']['memory']['guest'],
        "created_at": instance['metadata']['creationTimestamp'],
        "os": instance['metadata']['annotations']['vm.kubevirt.io/os'],
        "disks": instance['spec']['domain']['devices']['disks'],
        "data_volumes": volume_mapping_to_instance[instance['metadata']['name']],
        "interfaces": instance['spec']['domain']['devices']['interfaces'],
        "machine_type": instance['spec']['domain']['machine']['type'],
    }, instances['items']))

def fetch_nodes() -> list[dict[str, str]]:
    logger.info("fetch_nodes")
    api = client.CoreV1Api()
    nodes = api.list_node()
    return list(map(lambda node: {
        "name": node.metadata.name,
        "cpu": node.status.capacity['cpu'],
        "memory": node.status.capacity['memory'],
        "host_ip": list(filter(lambda address: (address.type == 'InternalIP'), node.status.addresses))[0].address
    }, nodes.items))

def fetch_storages() -> list[dict[str, str]]:
    logger.info("fetch_storages")
    api = client.CustomObjectsApi()
    data_volumes = api.list_cluster_custom_object(group="cdi.kubevirt.io", version="v1beta1", plural="datavolumes")
    return list(map(lambda dv: {
        "name": dv['metadata']['name'],
        "namespace": dv['metadata']['namespace'],
        "vm": dv['metadata'].get('ownerReferences'),
        "source": dv['spec'].get('source'),
        "storage": dv['spec'].get('storage'),
    }, data_volumes['items']))

@app.get("/")
def get_root():
    return {"message": "welcome to the best api"}

@app.get("/healthz")
def get_health():
    return {"status": "alive"}

@app.get("/pods")
def get_pods():
    return {"pods": fetch_pods('jkeam')}

@app.get("/vms")
def get_vms():
    return {"vms": fetch_vms()}

@app.get("/vmnamespaces")
def get_vmnamespaces():
    return {"vmnamespaces": fetch_vmnamespaces()}

@app.get("/nodes")
def get_nodes():
    return {"nodes": fetch_nodes()}

@app.get("/storages")
def get_storages():
    return {"storages": fetch_storages()}
