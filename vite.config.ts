import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ ¡Esto es muy importante!
export default defineConfig({
  plugins: [react()],
  base: '/deploy-prueba-1/'  // Nombre exacto de tu repo
})



