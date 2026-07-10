import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Deploying to https://Charge-Event.github.io/tgfg-website/
  base: '/tgfg-website/',
  plugins: [react()],
})
