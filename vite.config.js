import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  define: {
    'process.env': process.env,
  },
  server: {
    host: true,
    strictPort: true,
    port: 5000,
    watch: {
      usePolling: true,
    },
  },
});