import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes"; // Importa las rutas desde el archivo routes.ts

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
