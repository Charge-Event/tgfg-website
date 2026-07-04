import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  // If you deploy to https://<username>.github.io/<repo-name>/ (no custom
  // domain), uncomment and set this to '/<repo-name>/'. If you use a custom
  // domain (e.g. thegoodfoodguys.com) or deploy to <username>.github.io
  // directly, leave this as '/'.
  // base: '/your-repo-name/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
      manifest: false, // we ship our own manifest.webmanifest in /public
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
      },
    }),
  ],
})
