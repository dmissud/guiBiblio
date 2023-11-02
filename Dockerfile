### STAGE 1: Build ###
FROM node:18.18.0-buster-slim AS build
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install -g npm@10.2.1
RUN yarn
COPY . .
RUN npm update
RUN npm run build

### STAGE 2: Run ###
FROM nginx:1.25.3-alpine3.18
COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/app/dist/my-biblio /usr/share/nginx/html
EXPOSE 80
