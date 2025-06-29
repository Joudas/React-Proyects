import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://www.themealdb.com',
        changeOrigin: true, // Esto es importante para las peticiones cross-origin
        secure: true, // Usar HTTPS
        // Opcional: reescribir la ruta si '/api' en el target no es necesario
      },
    },
  },
})
