# Base image for Node.js
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install all dependencies
RUN npm install

# Install ts-node-dev globally
RUN npm install -g ts-node-dev

# Copy the entire project
COPY . .

