# Dockerfile

# Use the official Node.js image as the base image
FROM node:20.11-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json before other files
# Utilize Docker cache to save re-installing dependencies if unchanged
COPY package*.json ./

# Install dependencies
RUN npm install 

# Copy all files
COPY . .

# Build the app
RUN npm run build

# Expose the port
EXPOSE 3000 

# Set the command to start the node server 
CMD ["node", "dist/index.js"]
