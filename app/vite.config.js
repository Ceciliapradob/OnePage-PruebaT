// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  // Otras configuraciones aquí...

  build: {
    // Indica la carpeta de salida para los archivos generados
    outDir: 'dist',

    // Genera nombres de archivo con hash para un mejor control de la caché del navegador
    assetsInlineLimit: 0,
    chunkSizeWarningLimit: 1024,

    // Ajusta la configuración de nombres de archivo de salida
    rollupOptions: {
      output: {
        entryFileNames: '[name]-[hash].js', // Nombre de archivo de entrada
        chunkFileNames: 'chunks/[name]-[hash].js', // Nombre de archivo para los fragmentos
        assetFileNames: 'assets/[name]-[hash].[ext]' // Nombre de archivo para los recursos estáticos
      }
    }
  }
});
