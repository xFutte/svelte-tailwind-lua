import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tsconfigPaths from 'vite-tsconfig-paths';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), tsconfigPaths(), viteStaticCopy({
    targets: [
      { src: 'src/config.json', dest: '' } // Adjust the destination folder as needed
    ],
  })],
  build: {
    outDir: path.resolve(__dirname, '../html'), // Output to root/html
    emptyOutDir: true, // Ensure the directory is emptied before building
  }
})
