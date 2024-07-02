# OpenShift Virt App

Viewer for OpenShift Virt.

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

## Build for Deployment

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

## Links

1. [PatternFly Docs](https://www.patternfly.org/topology/getting-started)
2. [Python Kube Client](https://github.com/kubernetes-client/python)
