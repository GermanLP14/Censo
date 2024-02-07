import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://germanlp14.github.io/Censo2023',
  server: {open:true, port:3000}
})
