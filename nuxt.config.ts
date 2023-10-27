// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "~/assets/css/main.css",
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],

  vite: {
    define: {
      "process.env.DEBUG": false,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "@/assets/css/abstracts" as *;
          @use "@/assets/css/global" as *;
          `,
        },
      },
    },
  },
  build: {
    transpile: ["vuetify"],
  },
  modules: ["@pinia/nuxt", "@nuxtjs/google-fonts"],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      "defineStore", // import { defineStore } from 'pinia'
      ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
});
