export const DocumentosRoutes = [
  {
    path: "",
    name: "index-documentos",
    component: () => import("@/views/Documentos/DocumentosIndex.vue"),
  },
  {
    path: "crear",
    name: "crear-documentos",
    component: () => import("@/views/Documentos/DocumentosCrear.vue"),
  },
  {
    path: "editar/:id",
    name: "editar-documentos",
    component: () => import("@/views/Documentos/DocumentosEditar.vue"),
  },
];
