import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages project site: https://<user>.github.io/LightFinalShowcase/
const repoBase = '/LightFinalShowcase/'

export default defineConfig(({ command }) => ({
  base: command === 'build' ? repoBase : '/',
  plugins: [react(), tailwindcss()],
}))
