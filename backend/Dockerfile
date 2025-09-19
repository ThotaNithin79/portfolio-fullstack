# --- Build Stage ---
# This stage uses Maven to build the project JAR file.
FROM maven:3.8.5-openjdk-17 as builder

WORKDIR /app
COPY src ./src
COPY pom.xml ./
RUN mvn clean package -DskipTests

# --- Run Stage ---
# This stage takes the JAR file from the builder and runs it.
FROM eclipse-temurin:17-jre-focal

WORKDIR /app

COPY --from=builder /app/target/portfolio-backend-0.0.1-SNAPSHOT.jar ./app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]