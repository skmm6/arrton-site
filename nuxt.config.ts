// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from "vite-svg-loader";
import VitePluginSVGSpritemap from "@spiriit/vite-plugin-svg-spritemap";

export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    plugins: [svgLoader(), VitePluginSVGSpritemap("./assets/icons/*.svg")],
  },
  css: ["~/assets/scss/main.scss"],
});
