import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  mode: "jit", // Enable JIT
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [react(), tailwindcss(),],
 
})
