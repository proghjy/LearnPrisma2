FROM node:12.14.1-slim

RUN mkdir /app
WORKDIR /app

COPY package*.json ./

ARG BACKEND_URL
ENV BACKEND_URL "$BACKEND_URL"

RUN npm install

CMD npm run dev