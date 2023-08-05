import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  plugins: [react(), svgr(), eslint()],
  resolve: {
    alias: {
      assets: '/src/assets',
      components: '/src/components',
    },
  },
});
