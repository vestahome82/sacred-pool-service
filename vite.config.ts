import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/sacred-pool-service/', // Matches your repository name
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Ensure assets are placed in the correct directory
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
});
