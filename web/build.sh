#!/bin/bash

npm install
npm run build
podman build -t quay.io/jkeam/openshift-virt-app-web -f ./Dockerfile . && podman push quay.io/jkeam/openshift-virt-app-web
