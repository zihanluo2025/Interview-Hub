FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install all dependencies (including dev, so TypeScript build works)
RUN npm install

# Copy all source code
COPY . .

# Build TypeScript
RUN npm run build

# Expose port (match your Express app)
EXPOSE 3000

# Start server with compiled JS
CMD ["node", "dist/index.js"]
