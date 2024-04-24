import { RouteRecordRaw } from "vue-router";
import { HomeView, DocumentosRoutes } from "@/router/exports";

const routes: RouteRecordRaw[] = [
  {
    path: "/", // Ruta vacía que corresponderá a `/`
    name: "Home",
    component: HomeView,
  },
  {
    path: "/documentos",
    name: "documentos",
    children: DocumentosRoutes,
  },
  // Otras rutas de tu aplicación
];

export default routes;
