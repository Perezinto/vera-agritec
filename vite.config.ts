import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'node:path';

const root = fileURLToPath(new URL('.', import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  appType: 'mpa',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      input: {
        home: resolve(root, 'index.html'),
        about: resolve(root, 'about/index.html'),
        solutions: resolve(root, 'solutions/index.html'),
        projects: resolve(root, 'projects/index.html'),
        academy: resolve(root, 'academy/index.html'),
        consulting: resolve(root, 'consulting/index.html'),
        contact: resolve(root, 'contact/index.html'),
      },
    },
  },
});
