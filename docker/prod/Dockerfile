# Base image for Node.js
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install production dependencies only
RUN npm install --only=production

# Copy the rest of the application
COPY . .

# Build the TypeScript code
RUN npm run build
