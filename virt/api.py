import functools

from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for
)
from werkzeug.exceptions import abort
from werkzeug.security import check_password_hash, generate_password_hash

from virt.cluster import get_cluster

bp = Blueprint('api', __name__, url_prefix='/api')

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

@bp.route('/', methods=(['GET']))
def index():
    return render_template('/api/index.html')

@bp.route('/pods/<namespace>', methods=(['GET']))
def pods():
    client = get_cluster()
    v1 = client.CoreV1Api()
    namespace = request.view_args['namespace']
    return get_pods(v1, namespace)
