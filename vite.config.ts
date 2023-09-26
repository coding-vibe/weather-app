import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [react(), svgr(), eslint()],
  resolve: {
    alias: {
      api: '/src/api',
      assets: '/src/assets',
      components: '/src/components',
      constants: '/src/constants',
      contexts: '/src/contexts',
      i18n: '/src/i18n',
      types: '/src/types',
      utils: '/src/utils',
    },
  },
});
