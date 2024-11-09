# Use an official Node.js image as the base
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and install dependencies
COPY src/package.json .
RUN npm install

# Copy the rest of the application code
COPY src/ .

# Install nodemon
RUN npm install -g nodemon

# Expose the application port
EXPOSE 3000

# Run the application
CMD ["nodemon", "index.js"]
