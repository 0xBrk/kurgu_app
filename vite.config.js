import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// "type": "module" kullandığın için path.resolve yerine 
// Vite'ın doğrudan anladığı '/src' dizin yapısını kullanıyoruz.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@features': '/src/features',
      '@utils': '/src/utils',
      '@hooks': '/src/hooks',
      '@constants': '/src/constants'
    }
  }
})