import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // El directorio de salida de los archivos generados
    rollupOptions: {
      input: 'src/index.html', // Especifica la entrada como index.html en el directorio src
    },
  },
});
