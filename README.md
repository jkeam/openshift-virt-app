# OpenShift Virt App

Viewer for OpenShift Virt.

Deprecated in favor of [ViewVirt](https://github.com/jkeam/viewvirt).

## Development

### Frontend

```shell
cd ./web

# update deps
npm install

# run dev server
npm run dev
```

### Backend

```shell
cd api

# run dev server
PYTHON_ENV=test python ./main.py
```

## Build

### Frontend

```shell
cd web
./build.sh
```

### Backend

```shell
cd api
./build.sh
```

## Deploy

```shell
# will deploy into viewvirt unless you update kustomization.yaml and namespace.yaml
oc apply -k ./openshift

# delete
# oc delete -k ./openshift
```

## Links

1. [PatternFly Docs](https://www.patternfly.org/topology/getting-started)
2. [Python Kube Client](https://github.com/kubernetes-client/python)
