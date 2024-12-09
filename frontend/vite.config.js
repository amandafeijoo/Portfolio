import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          // Divide las dependencias en chunks separados
          'react-vendor': ['react', 'react-dom'],
          'mui-vendor': ['@mui/material', '@mui/icons-material'],
          // Agrega más divisiones según sea necesario
        }
      }
    },
    chunkSizeWarningLimit: 1000 // Ajusta el límite de tamaño de chunk si es necesario
  }
});
