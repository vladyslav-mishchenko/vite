import { defineConfig } from 'vite';
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');
const assetsPath = 'static/assets';

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
        contact: resolve(root, 'contact.html'),
      },

      output: {
        chunkFileNames: `${assetsPath}/js/[name]-[hash].js`,
        entryFileNames: `${assetsPath}/js/[name]-[hash].js`,

        assetFileNames: ({ names }) => {
          if (/\.(gif|jpe?g|png|svg|webp)$/.test(names ?? '')) {
            return `${assetsPath}/img/[name]-[hash][extname]`;
          }

          if (/\.css$/.test(names ?? '')) {
            return `${assetsPath}/css/[name]-[hash][extname]`;
          }

          if (/\.(ttf|woff|woff2|eot)$/.test(names ?? '')) {
            return `${assetsPath}/fonts/[name]-[hash][extname]`;
          }

          return `${assetsPath}/[name] - [hash][extname]`;
        },
      },
    },
  },
});
