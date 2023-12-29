import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from '@svgr/rollup';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  base: '/weather-app/',
  plugins: [react(), svgr({ exportType: 'named' }), eslint()],
  resolve: {
    alias: {
      api: '/src/api',
      assets: '/src/assets',
      components: '/src/components',
      constants: '/src/constants',
      contexts: '/src/contexts',
      locales: '/src/locales',
      types: '/src/types',
      utils: '/src/utils',
    },
  },
});
