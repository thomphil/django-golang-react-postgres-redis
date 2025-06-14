# syntax=docker/dockerfile:1

### Build stage
FROM node:22-alpine AS build
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* pnpm-lock.yaml* bun.lockb* ./
RUN npm install

# Copy source and build
COPY . .
RUN npm run build

### Final stage
FROM nginx:stable-alpine
WORKDIR /usr/share/nginx/html

# Copy build output
COPY --from=build /app/build .

# Copy nginx configuration for SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
