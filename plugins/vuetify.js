import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { mdi } from "vuetify/iconsets/mdi";

const myCustomLightTheme = {
  dark: false,
  colors: {
    background: "#FFFFFF",
    primary: "#ffc800",
    "primary-1": "#e9deb8",
    " primary-white": "#FFFFFF",
    "primary-darken-1": "#3700B3",
    secondary: "#000",
    "secondary-darken-1": "#018786",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
  },
};

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
    // ssr: true,
    components,
    directives,
    theme: {
      defaultTheme: "myCustomLightTheme",
      themes: {
        myCustomLightTheme,
      },
    },
    icons: {
      defaultSet: "mdi",
      sets: {
        mdi,
      },
    },
  });
  app.vueApp.use(vuetify);
});
