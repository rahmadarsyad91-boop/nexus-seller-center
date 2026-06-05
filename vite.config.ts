import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react'; // Menggunakan plugin-react standar
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    base: '/nexusglobal-seller-centre/', 

    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': new URL('.', import.meta.url).pathname,
      },
    },

    build: {
      outDir: 'docs',
    },

    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});