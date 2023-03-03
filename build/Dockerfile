FROM node:16-alpine AS appbuild

WORKDIR /app
COPY package*.json ./

RUN npm install

COPY ./src/ /app/src
RUN npm run build

#####################################################

FROM node:16-alpine

RUN npm install -g http-server

WORKDIR /app

COPY --from=appbuild /app/src/.vuepress/dist /app/dist

EXPOSE 8080

CMD [ "http-server", "dist" ]
