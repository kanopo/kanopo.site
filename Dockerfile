FROM node:21.7.0-alpine3.18

WORKDIR /app

COPY package*.json ./
RUN npm ci


COPY . .
ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build


CMD npm run start
