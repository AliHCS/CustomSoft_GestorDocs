import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes"; // Importa las rutas desde el archivo routes.ts

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
