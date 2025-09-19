# THIS PART ISN'T ACTUALLY BEING USED BECAUSE YOU REDEFINE THE 'builder' LATER
FROM eclipse-temurin:17-jre-focal # <-- This line is being ignored

WORKDIR /app
COPY .mvn/ .mvn
COPY mvnw pom.xml ./
# ... a bunch of commented out stuff

# --- Build Stage (Updated for Simplicity) ---
# THIS IS THE ACTUAL BUILD STAGE THAT IS RUNNING
FROM maven:3.8.5-openjdk-17 as builder
WORKDIR /app
COPY src ./src
COPY pom.xml ./
RUN mvn package -DskipTests

# --- Run Stage ---
# AND THIS IS THE RUN STAGE THAT IS FAILING
FROM openjdk:17-jre-slim # <--- HERE IS THE PROBLEM. The old, incorrect line is still here.

WORKDIR /app
COPY --from=builder /app/target/portfolio-backend-0.0.1-SNAPSHOT.jar ./app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]