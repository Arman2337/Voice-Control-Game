import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path'; // Add path module to resolve aliases

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  
  server: {
    proxy: {
      '/api': 'http://localhost:5000',
    },
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp'
    }
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Configure @ to resolve to the src directory
    },
  },
  base: './',  // Ensure correct relative paths
  build: {
    outDir: 'dist'  // Ensures Vite outputs to "dist"
  }

  // server: {
  //   headers: {
  //     'Cross-Origin-Opener-Policy': 'same-origin',
  //     'Cross-Origin-Embedder-Policy': 'require-corp'
  //   }
  // }
  
});
