import { RouteRecordRaw } from "vue-router";
import { HomeView, DocumentosIndex, DocumentosCreate } from "@/router/exports";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/layouts/LayoutComponent.vue"),
    children: [
      {
        path: "", // Ruta vacía que corresponderá a `/`
        name: "Home",
        component: HomeView,
      },
      {
        path: "/documentos",
        name: "DocumentosIndex",
        component: DocumentosIndex,
        children: [
          {
            path: "create", // Subruta que corresponderá a `/documentos/create`
            name: "DocumentosCreate",
            component: DocumentosCreate,
          },
          // Otras subrutas de documentos, si las hay
        ],
      },
      // Otras rutas de tu aplicación
    ],
  },
];

export default routes;
