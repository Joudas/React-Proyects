import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Cada vez que Vite vea una petición que empiece con '/cdn',
      // la redirigirá a 'https://ddragon.leagueoflegends.com/cdn'
      '/cdn': {
        target: 'https://ddragon.leagueoflegends.com',
        changeOrigin: true, // Esto es importante para las peticiones cross-origin
        secure: true, // Usar HTTPS
        // Opcional: reescribir la ruta si '/cdn' en el target no es necesario
        // rewrite: (path) => path.replace(/^\/cdn/, '/cdn'),
      },
    },
  },
})
