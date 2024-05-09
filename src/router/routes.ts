import { RouteRecordRaw } from "vue-router";
import { HomeView, DocumentosRoutes, Page404 } from "@/router/exports";

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
  {
    path: "/:pathMatch(.*)*",
    name: "Page404",
    component: Page404,
  },
  // Otras rutas de tu aplicación
];

export default routes;
