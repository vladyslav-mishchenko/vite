import { defineConfig } from 'vite';
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');

export default defineConfig({
  root,
  publicDir: '../public',

  server: {
    port: 7777,
    host: true,
  },

  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'src/partials'),
    }),
  ],

  build: {
    outDir,
    emptyOutDir: true,
    minify: false,

    rollupOptions: {
      input: {
        home: resolve(root, 'index.html'),
        about: resolve(root, 'about.html'),
      },

      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',

        assetFileNames: ({ names }) => {
          if (/\.(gif|jpe?g|png|svg|webp)$/.test(names ?? '')) {
            return 'assets/img/[name]-[hash][extname]';
          }

          if (/\.css$/.test(names ?? '')) {
            return 'assets/css/[name]-[hash][extname]';
          }

          if (/\.(ttf|woff|woff2|eot)$/.test(names ?? '')) {
            return 'assets/fonts/[name]-[hash][extname]';
          }

          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
});
