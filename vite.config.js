// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     tailwindcss(),
//   ],
// })


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'
// import path from 'path'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     tailwindcss(),
//   ],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src'),
//       '@/components': path.resolve(__dirname, './src/components'),
//       '@/assets': path.resolve(__dirname, './src/assets'),
//       '@/pages': path.resolve(__dirname, './src/pages'),
//       '@/hooks': path.resolve(__dirname, './src/hooks'),
//       '@/helpers': path.resolve(__dirname, './src/helpers'),
//       '@/constants': path.resolve(__dirname, './src/constants'),
//       '@/utils': path.resolve(__dirname, './src/utils'),
//     }
//   }
// })



import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@/components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@/assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
    }
  }
})