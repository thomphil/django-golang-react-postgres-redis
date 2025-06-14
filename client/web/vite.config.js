import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createProxyMiddleware } from 'http-proxy-middleware';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build'
  },
  server: {
    port: 3000,
    proxy: {
      '/api': 'http://localhost:8000',
    },
    // Custom middleware to proxy root requests to Django
    setupMiddlewares(middlewares, devServer) {
      middlewares.use(
        '/',
        createProxyMiddleware({
          target: 'http://localhost:8000',
          changeOrigin: true,
          ws: false,
        })
      );
      return middlewares;
    }
  }
});
