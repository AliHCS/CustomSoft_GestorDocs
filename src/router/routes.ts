// router/routes.ts

import { RouteRecordRaw } from "vue-router";
// Importa tu layout principal
import {
  HomeView,
  DocumentosIndex /* DocumentCreate */,
} from "@/router/exports";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/layouts/LayoutComponent.vue"), // Usa el layout principal
    children: [
      {
        path: "", // Ruta vacía que corresponderá a `/`
        name: "Home",
        component: HomeView,
      },
      {
        path: "/documentos",
        component: DocumentosIndex,
        children: [
          {
            path: "", // Ruta vacía que corresponderá a `/documentos`
            name: "documentos",
            component: DocumentosIndex,
          },
          /* {
            path: "create", // Subruta que corresponderá a `/documentos/create`
            name: "documentosCreate",
            component: DocumentCreate,
          }, */
          // Otras subrutas de documentos, si las hay
        ],
      },
      // Otras rutas de tu aplicación
    ],
  },
];

export default routes;
