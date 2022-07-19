FROM node:18-slim

ARG USER=node
ARG UID=1000
ARG GID=1000

# setup
RUN usermod -u $UID -s /bin/bash $USER && groupmod -g $GID $USER
RUN apt update && apt install -y git

# change user
USER $USER

# Node.js
ENV NPM_CONFIG_PREFIX /home/node/.npm-global
ENV PATH $PATH:/home/node/.npm-global/bin
