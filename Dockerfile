FROM nginx:alpine

WORKDIR /usr/local/src/

COPY nginx.conf /etc/nginx/

COPY ./dist/ .