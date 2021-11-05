import path from 'path';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import { QuasarResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    quasar({
      sassVariables: 'src/css/quasar.variables.scss',
    }),
    AutoImport({
      imports: ['vue'],
      dts: 'src/types/auto-imports.d.ts',
    }),
    Components({
      resolvers: [QuasarResolver()],
      dts: 'src/types/components.d.ts',
      directoryAsNamespace: true,
    }),
  ],

  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
      '~~': path.resolve(__dirname, './'),
    },
  },

  server: {
    host: '0.0.0.0',
    port: 8080,
  },
});
