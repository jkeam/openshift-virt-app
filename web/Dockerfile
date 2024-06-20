FROM registry.access.redhat.com/ubi9/nginx-122

COPY ./nginx.conf /opt/app-root/etc/nginx.default.d
COPY ./dist/favicon.ico ./dist/index.html ./dist/vite.svg /opt/app-root/src
COPY ./dist/assets /opt/app-root/src/assets

EXPOSE 8080
USER 1001

CMD nginx -g "daemon off;"
