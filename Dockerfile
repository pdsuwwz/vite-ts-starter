FROM node:12.20.2 AS builder
ARG DIST_PATH=dist

ENV NODE_PATH /build/node_modules

WORKDIR /app

COPY ./entrypoint.sh /entrypoint.sh
COPY ./package.json /build/

RUN npm config set registry "https://registry.npm.taobao.org/" \
    && mkdir ~/.ssh && echo "Host\tcode.aliyun.com\nStrictHostKeyChecking\tno\nUserKnownHostsFile=/dev/null\nHostName\tcode.aliyun.com\nUser\troot\nIdentityFile\t/git_ssh_key\nHost\tcodeup.aliyun.com\nStrictHostKeyChecking\tno\nUserKnownHostsFile=/dev/null\nHostName\tcodeup.aliyun.com\nUser\troot\nIdentityFile\t/git_ssh_key" > ~/.ssh/config && chmod 600 ~/.ssh/config \
    && cd /build \
    && npm install --prefix /build && chmod +x /entrypoint.sh \
    && rm -rf /app

ENTRYPOINT ["bash", "/entrypoint.sh"]
