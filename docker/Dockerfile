FROM node:22

LABEL maintainer="Vladyslav Mishchenko <vmdevspace@gmail.com>"

WORKDIR /app

RUN apt-get update \
    && apt-get install -y vim \
    && apt-get install -y mc

# RUN npm install -g npm@11.12.0

COPY . .

USER node

EXPOSE 7777

CMD ["node"]