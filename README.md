# OpenShift Virt App

Viewer for OpenShift Virt.

## Development

### Frontend

```shell
# update deps
flask vite install

# run dev server
flask vite start
```

### Backend

```shell
# run dev server
flask run --port 8080 --debug
```

## Deploy

### Frontend

```shell
rm -rf vite/dist
flask vite build
# now just serve vite/dist/index.html
```

### Backend

```shell
podman build -t quay.io/jkeam/openshift-virt-app-api -f ./Dockerfile .
podman push quay.io/jkeam/openshift-virt-app-api
```
