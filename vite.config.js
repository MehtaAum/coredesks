import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
<<<<<<< HEAD
  plugins: [
    react(),
    tailwindcss(),

  ],
=======
  plugins: [react() ,  tailwindcss(),],
>>>>>>> 7aeb759 (dashboard added (building stage))
})
