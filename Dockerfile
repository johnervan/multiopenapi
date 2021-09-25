FROM node:16.10.0-alpine3.14 as build

WORKDIR /app
COPY . .
RUN npm install \
   && npm run build

FROM nginx:1.21.3-alpine

RUN apk update \
   && apk upgrade

WORKDIR /var/www/html
COPY --from=build /app/out /var/www/html
COPY ./swagger-files /var/www/html/static/swagger-files
COPY ./config/default.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]