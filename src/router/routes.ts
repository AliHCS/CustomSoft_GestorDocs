// router/routes.ts
// router/routes.ts

import { RouteRecordRaw } from "vue-router";
import {
  HomeView,
  DocumentosIndex /* DocumentCreate */,
} from "@/router/exports";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
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
];

export default routes;
