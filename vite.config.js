import { defineConfig } from 'vite';
import path from 'path';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../build',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './src/index.html',
        about: './src/about.html',
        contact: './src/contact.html',
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
  plugins: [
    handlebars({
      context: {
        title: 'My Handlebars Page',
        description: 'This is a sample page using Handlebars with Vite!',
      },
      partialDirectory: path.resolve(__dirname, 'src/partials'), // Folder for Handlebars partials
    }),
  ],
});
