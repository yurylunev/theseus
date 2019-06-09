FROM node:latest

WORKDIR /usr/src/app

COPY frontend/package*.json ./

RUN npm install

COPY frontend/ .
