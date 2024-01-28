import { defineConfig } from 'vite'
/// <reference types="vite/client" />
import react from '@vitejs/plugin-react'
import ViteSassPlugin from 'vite-plugin-sass';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080
  },
})
