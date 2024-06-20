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

## Deploy

### Frontend

```shell
cd web
npm run clean
npm run build
# now just serve vite/dist/index.html, can preview with
npm run preview
podman build -t quay.io/jkeam/openshift-virt-app-web -f ./Dockerfile .
podman push quay.io/jkeam/openshift-virt-app-web
```

### Backend

```shell
cd api
podman build -t quay.io/jkeam/openshift-virt-app-api -f ./Dockerfile .
podman push quay.io/jkeam/openshift-virt-app-api
```
