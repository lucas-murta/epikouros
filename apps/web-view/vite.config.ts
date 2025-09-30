import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { join } from 'path';

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/web-view',
  server: {
    port: 4200,
    host: 'localhost',
  },
  preview: {
    port: 4200,
    host: 'localhost',
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@ep-ds': join(__dirname, '../../libs/ep-ds/src'),
    },
  },
  css: {
    modules: {
      generateScopedName: '[name]_[local]_[hash:base64:5]',
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@ep-ds/globals/index.scss" as *;`,
      },
    },
  },
  build: {
    outDir: './dist',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
}));
