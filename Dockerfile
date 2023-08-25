FROM openjdk:8
EXPOSE 8080
ADD target/shadcn-ui-app.jar shadcn-ui-app.jar
ENTRYPOINT ["java","-jar","/shadcn-ui-app.jar"]
