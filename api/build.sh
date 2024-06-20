#!/bin/bash

podman build -t quay.io/jkeam/openshift-virt-app-api -f ./Dockerfile . && podman push quay.io/jkeam/openshift-virt-app-api
