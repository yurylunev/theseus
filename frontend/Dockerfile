FROM node:latest
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
VOLUME /home/server/theseus/_dev /usr/src/app
