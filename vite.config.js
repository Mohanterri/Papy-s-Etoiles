import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
      manifest: {
        name: 'Papy\'s 5 Etoiles',
        short_name: 'Papy\'s 5 Etoiles',
        description: 'My Awesome App description',
        start_url: "/",
        display: "standalone", // "standalone" ou "fullscreen" pour une expérience d'application native
        background_color: "#000000",
        theme_color: "#000000",
        icons: [
          {
            src: 'android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
})
