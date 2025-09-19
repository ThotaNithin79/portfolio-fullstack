# --- Build Stage ---
# Use an official OpenJDK 17 image as a parent image for building
# The 'as builder' part names this stage so we can refer to it later
FROM eclipse-temurin:17-jre-focal

# Set the working directory inside the container
WORKDIR /app

# Copy the Maven wrapper files first (if you have them, not critical if not)
COPY .mvn/ .mvn
COPY mvnw pom.xml ./

# Download dependencies. This is done as a separate layer to leverage Docker's caching.
# If pom.xml doesn't change, this layer won't be re-run, making builds faster.
# NOTE: Since you might not have the 'mvnw' wrapper, we'll use a more generic maven command.
# Let's switch to a base image that has maven pre-installed.

# --- Build Stage (Updated for Simplicity) ---
FROM maven:3.8.5-openjdk-17 as builder
WORKDIR /app
COPY src ./src
COPY pom.xml ./
RUN mvn package -DskipTests

# --- Run Stage ---
# Use a smaller, more secure base image for the final container
FROM openjdk:17-jre-slim

WORKDIR /app

# Copy the JAR file from the 'builder' stage into this new stage
COPY --from=builder /app/target/portfolio-backend-0.0.1-SNAPSHOT.jar ./app.jar

# Expose the port that the application will run on
EXPOSE 8080

# Command to run the application when the container starts
ENTRYPOINT ["java", "-jar", "app.jar"]