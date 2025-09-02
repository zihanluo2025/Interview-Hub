# 1. Use Node.js base image
FROM node:18

# 2. Set working directory
WORKDIR /app

# 3. Copy package.json and package-lock.json
COPY package*.json ./

# 4. Install all dependencies (including dev for build)
RUN npm install

# 5. Copy all source code
COPY . .

# 6. Build TypeScript
RUN npm run build

# 7. Start with compiled JS
CMD ["node", "dist/index.js"]
