// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    plugins: [svgLoader()],
  },
  css: ["~/assets/scss/main.scss"],
  app: {
    head: {
      title: "Nuxt Dojo",
      meta: [
        {
          name: "description",
          content: "Мы работаем с NUXT 3",
        },
      ],
    },
  },
});
