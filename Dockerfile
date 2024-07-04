# Use the official Node.js image
FROM node:14-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the source code
COPY . .

# Expose the port the app runs on
EXPOSE 8080

# Run the application
CMD ["npm", "run", "serve"]
