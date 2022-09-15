# FROM node:16.2.0-alpine3.12
FROM buildkite/puppeteer:9.1.1

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN export PUPPETEER_SKIP_DOWNLOAD='true'
RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]