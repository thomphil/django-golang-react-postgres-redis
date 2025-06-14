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
      '/api': 'http://service.api:8000'
    }
  }
});
