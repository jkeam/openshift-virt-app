from kubernetes import client, config
from flask import g
import click

def get_cluster():
    if 'cluster' not in g:
        config.load_incluster_config()
        g.cluster = client
    return g.cluster

def close_cluster(e=None) -> None:
    g.pop('cluster', None)

@click.command('test-cluster')
def test_cluster_command() -> None:
    get_cluster()
    click.echo('Test connection to the cluster.')

def init_app(app) -> None:
    app.teardown_appcontext(close_cluster)
    app.cli.add_command(test_cluster_command)
