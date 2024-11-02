import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../build',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './src/index.html',
        about: './src/pages/about.html',
        contact: './src/pages/contact.html',
      },
    },
  },
  server: {
    open: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
