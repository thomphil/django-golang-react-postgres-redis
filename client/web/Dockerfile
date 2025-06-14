# syntax=docker/dockerfile:1

# Development stage for Vite dev server
FROM node:22-alpine AS dev
WORKDIR /app

COPY package.json package-lock.json* pnpm-lock.yaml* bun.lockb* ./
RUN npm install

COPY . .

EXPOSE 3000
CMD ["npm", "run", "dev"]

### Build stage for production
FROM node:22-alpine AS build
WORKDIR /app

COPY package.json package-lock.json* pnpm-lock.yaml* bun.lockb* ./
RUN npm install

COPY . .
RUN npm run build

### Final stage for production
FROM nginx:stable-alpine AS prod
WORKDIR /usr/share/nginx/html

COPY --from=build /app/build .
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
