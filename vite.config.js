import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        referral: resolve(__dirname, 'referral-code-ariyd8b6/index.html'),
        apply: resolve(__dirname, 'apply/index.html'),
      },
    },
  },
});
