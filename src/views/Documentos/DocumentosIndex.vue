<script setup lang="ts">
import { ref } from "vue";
import TableComponent from "@/components/TableComponent.vue";
/* import TableCustomPaginateComponent from "@/components/TableCustomPaginateComponent.vue"; */
import { getDocs } from "@/api/documents";
import { Documento } from "@/utils/interfaces/documents";

const documentos = ref<Documento[]>([]);

const getDocsFunction = async () => {
  try {
    const { data } = await getDocs();
    documentos.value = data;
    console.log(documentos.value);
  } catch (error) {
    console.error("Error al obtener documentos:", error);
  }
};

const headers = [
  {
    key: "id",
    title: "ID",
    align: "start",
    sortable: false,
  },
  {
    key: "name",
    title: "Nombre",
    align: "start",
    sortable: false,
  },
  {
    key: "description",
    title: "Descripcion",
    align: "start",
    sortable: false,
  },
  {
    key: "extension",
    title: "Extencion",
    align: "start",
    sortable: false,
  },
  {
    key: "document",
    title: "Documento",
    align: "start",
    sortable: false,
  },
  {
    key: "date",
    title: "Fecha",
    align: "start",
    sortable: false,
  },
  { title: "Actions", key: "actions", sortable: false },
];

const emitActionEdit = (item: any) => {
  console.log(item);
};
const emitDeleteAction = (item: any) => {
  console.log(item);
};

const searchProperties = ref<string[]>(["extension", "document"]);

getDocsFunction();
</script>

<template>
  <div>
    <TableComponent
      :headers="headers"
      :items="documentos"
      title="Reporte Documentos"
      :showActions="true"
      :searchProperties="searchProperties"
      @onEditAction="emitActionEdit"
      @onDeleteAction="emitDeleteAction"
    />
    <!--   <TableCustomPaginateComponent
      :headers="headers"
      :items="documentos"
      title="Reporte Documentos"
      :showActions="true"
      @onEditAction="emitActionEdit"
      @onDeleteAction="emitDeleteAction"
    /> -->
  </div>
</template>

<style scoped></style>
