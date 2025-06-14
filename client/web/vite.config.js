import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build'
  },
  server: {
    port: 3000,
    proxy: {
      '/api': 'http://localhost:8000',
      // Explicitly proxy root path to Django
      '/': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        ws: false,
      },
      // Proxy all other requests except static assets and Vite internals to Django
      '^/(?!src|@vite|node_modules|assets|build)': 'http://localhost:8000',
    }
  }
});
