FROM openjdk:8-jdk-alpine
VOLUME /tmp
ADD web-ssh-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 5555
ENTRYPOINT [ "java", "-jar", "/app.jar" ]