FROM registry.access.redhat.com/ubi9/nodejs-20

USER root

# deps
RUN chown -R 1001:0 .
COPY ./package*.json .
RUN npm install

# app files
COPY index.html vite.config.js .
COPY dist dist
COPY public public
COPY ./src/server/main.js .
RUN chown -R 1001:0 .

# setup to run
ENV NODE_ENV production
EXPOSE 8080
USER 1001

# run
CMD ["npm", "run", "container"]
