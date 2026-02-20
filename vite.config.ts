import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/klept/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: './', // Using relative paths for better compatibility with GH Pages
})
