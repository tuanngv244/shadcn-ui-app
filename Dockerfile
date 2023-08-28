# FROM openjdk:8
# EXPOSE 8080
# ADD target/shadcn-ui-app.jar shadcn-ui-app.jar
# ENTRYPOINT ["java","-jar","/shadcn-ui-app.jar"]

FROM node:16.8-alpine as build-stage
WORKDIR /app
COPY . .
RUN yarn cache clean --force
# RUN apk add --update python3 make g++ && rm -rf /var/cache/apk/*

RUN yarn 
RUN yarn build

FROM nginx:1.21.0-alpine
COPY --from=build-stage /app/.next /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
