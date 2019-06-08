FROM openjdk:8-jdk-alpine as build
RUN apk add --no-cache maven
WORKDIR /workspace/app

COPY mvnw .
COPY pom.xml .
COPY src src
COPY .mvn .mvn
RUN ./mvnw clean install
RUN mkdir -p target/dependency && (cd target/dependency; jar -xf ../*.jar)

FROM openjdk:8-jdk-alpine
ARG DEPENDENCY=/workspace/app/target/dependency
COPY target/tesey-0.0.1-SNAPSHOT.war .
ENTRYPOINT ["java","-jar","/tesey-0.0.1-SNAPSHOT.war"]