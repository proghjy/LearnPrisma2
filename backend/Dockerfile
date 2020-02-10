FROM node:12.14.1-slim
RUN apt-get -qy update && apt-get -qy install openssl
RUN npm install -g --unsafe-perm prisma2@2.0.0-preview021

RUN mkdir /app
WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

ARG POSTGRES_URL
ENV POSTGRES_URL "$POSTGRES_URL"

RUN npm install
RUN prisma2 generate

CMD npm run dev