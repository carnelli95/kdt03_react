import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwind(),
  ],

  server: {
    proxy: {
      '/photo-api': {
        target: 'https://apis.data.go.kr',
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace(/^\/photo-api/, '/B551011/PhotoGalleryService1'),
      }
    }
  }
})
