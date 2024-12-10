// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/', // Publica desde la raíz
  build: {
    outDir: 'dist', // El directorio de salida
    emptyOutDir: true,
    rollupOptions: {
      input: 'index.html', // Asegúrate de que Vite busque el archivo en la raíz
    },
  },
});
