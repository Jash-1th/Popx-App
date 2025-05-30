import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: "https://popx-app-backend10.onrender.com" || 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      }
    }
  }
});