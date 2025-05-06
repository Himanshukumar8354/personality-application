
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/personality-application/", // Base URL for deployment
  
  plugins: [react()],
  server: {
    port: 5173, // You can change the port if needed
  },
  resolve: {
    alias: {
      '@': '/src', // Optional: helps with cleaner imports
    },
  },
});
