<script setup lang="ts">
import { ref } from "vue";
import router from "@/router";
import DialogWithOutButton from "@/components/DialogWithOutButton.vue";
import TableComponent from "@/components/TableComponent.vue";
import AlertComponent from "@/components/AlertComponent.vue";
/* import TableCustomPaginateComponent from "@/components/TableCustomPaginateComponent.vue"; */
import { useAlert } from "@/composables/useAlert";
import { getDocs, deleteDocs } from "@/api/documents";
import {
  Documento,
  defaultValuesDocumento,
} from "@/utils/interfaces/documents";

const {
  showAlert,
  showAlertComponent,
  alertMessage,
  alertTimeout,
  alertColor,
} = useAlert(); // Usa useAlert

const documentos = ref<Documento[]>([]);
const dialog = ref(false);

const documentoDataDelete = ref<Documento>({ ...defaultValuesDocumento });
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

const handleEdit = (item: Documento) => {
  router.push({ name: "editar-documentos", params: { id: item.id } });
};
const emitDeleteAction = async (item: any) => {
  documentoDataDelete.value = item;
  dialog.value = true;
};

const handleDelete = async () => {
  const idToDelete = documentoDataDelete.value.id;
  if (idToDelete !== undefined) {
    const stringIdToDelete = idToDelete.toString(); // Convertir a cadena
    await deleteDocs(stringIdToDelete);
    await getDocsFunction();
    showAlert("¡Registro eliminado con éxito!", 4000, "success");
  } else {
    console.error("ID del documento a eliminar no está definido.");
  }
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
      @onEditAction="handleEdit"
      @onDeleteAction="emitDeleteAction"
    />
    <DialogWithOutButton
      v-model:dialog="dialog"
      :showAceptButton="true"
      @accepted="handleDelete"
    >
      <template v-slot:content>
        <v-card
          style="width: 100%; height: 100%"
          max-width="800"
          subtitle="Esta acción es irreversible"
        >
          <template v-slot:title>
            <span class="font-weight-black" style="font-size: 20px"
              >Eliminar el registro {{ documentoDataDelete.name }}?</span
            >
          </template>
          <v-card-text class="bg-surface-light pt-4">
            <!-- Cambio de Lorem Ipsum a una advertencia más adecuada -->
            <p style="font-size: 16px; color: red">
              ¡Atención! Estás a punto de eliminar el documento "{{
                documentoDataDelete.name
              }}". Esta acción es irreversible y eliminará permanentemente el
              documento.
            </p>
          </v-card-text>
        </v-card>
      </template>
    </DialogWithOutButton>
    <!--   <TableCustomPaginateComponent
      :headers="headers"
      :items="documentos"
      title="Reporte Documentos"
      :showActions="true"
      @onEditAction="emitActionEdit"
      @onDeleteAction="emitDeleteAction"
    /> -->
    <AlertComponent
      v-if="showAlertComponent"
      :message="alertMessage"
      :timeout="alertTimeout"
      :color="alertColor"
    />
  </div>
</template>

<style scoped></style>
