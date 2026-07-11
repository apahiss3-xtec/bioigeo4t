import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' perquè funcioni tant a GitHub Pages com a Netlify
export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    // Respecta el PORT assignat (p. ex. per eines de previsualització)
    port: process.env.PORT ? Number(process.env.PORT) : 5173,
    strictPort: !!process.env.PORT
  }
})
