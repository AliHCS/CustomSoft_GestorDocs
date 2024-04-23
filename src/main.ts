import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "@/router/";

// Vuetify
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi", // This is already the default value - only for display purposes
  },
  theme: {
    defaultTheme: "dark",
  },
});

const app = createApp(App);
const pinia = createPinia();

app.use(vuetify);
app.use(router);
app.use(pinia);

app.mount("#app");
