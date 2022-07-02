import { fileURLToPath, URL } from "url";

import resolveExternalsPlugin from 'vite-plugin-resolve-externals'

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), resolveExternalsPlugin({
    AMap: 'AMap'
  })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  base: "./",
  server: {
    port: 3000,
    cors: true
  },

});
