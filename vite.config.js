import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@beats': 'c:/Users/ShaDe/Documents/My beats'
    }
  },
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..', 'c:/Users/ShaDe/Documents/My beats']
    }
  }
})
