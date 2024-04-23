<template>
  <v-container>
    <v-form @submit.prevent="submitForm">
      <v-text-field
        v-model="formData.name"
        label="Nombre"
        required
      ></v-text-field>

      <v-text-field
        v-model="formData.description"
        label="Descripción"
        required
      ></v-text-field>

      <v-text-field
        v-model="formData.extension"
        label="Extensión"
        required
      ></v-text-field>

      <v-text-field
        v-model="formData.date"
        label="Fecha"
        type="date"
        required
      ></v-text-field>

      <v-text-field
        v-if="!itemId"
        v-model="formData.document"
        label="Seleccionar Archivo"
        type="file"
        accept=".pdf,.doc,.docx,.txt"
        required
      ></v-text-field>
      <v-text-field
        v-else
        v-model="formData.document"
        label="Archivo"
      ></v-text-field>

      <!-- Botones en la misma línea y a la derecha -->
      <div class="actions">
        <v-btn @click="cancelForm" color="error">Cancelar</v-btn>
        <v-btn type="submit" color="primary">Enviar</v-btn>
      </div>
    </v-form>
    <AlertComponent
      v-if="showAlertComponent"
      :message="alertMessage"
      :timeout="alertTimeout"
      :color="alertColor"
    />
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import AlertComponent from "@/components/AlertComponent.vue";
import { useAlert } from "@/composables/useAlert"; // Importa useAlert
import { createDocumento, getDocsById, updateDocs } from "@/api/documents";
import {
  Documento,
  defaultValuesDocumento,
} from "@/utils/interfaces/documents";

const route = useRoute();
const router = useRouter();

const {
  showAlert,
  showAlertComponent,
  alertMessage,
  alertTimeout,
  alertColor,
} = useAlert(); // Usa useAlert

const formData = ref<Documento>(defaultValuesDocumento);
const itemId = ref<string>("");

const submitForm = async () => {
  const jsonData: Documento = {
    name: formData.value.name,
    description: formData.value.description,
    extension: formData.value.extension,
    document: formData.value.document,
    date: formData.value.date,
  };
  if (itemId.value !== "") {
    await updateDocs(jsonData, itemId.value);
  } else {
    await createDocumento(jsonData);
  }
  showAlert("¡Formulario enviado con éxito!", 4000, "success"); // Muestra la alerta de éxito
  setTimeout(() => {
    router.push({ name: "index-documentos" });
  }, 5000);
};

const resetForm = () => {
  formData.value = defaultValuesDocumento;
};

const cancelForm = () => {
  resetForm();
  router.push({ name: "index-documentos" });
};

onMounted(async () => {
  itemId.value = route.params.id ? route.params.id.toString() : "";
  if (itemId.value) {
    const { data } = await getDocsById(itemId.value);
    formData.value = data;
  }
});
</script>

<style scoped>
.actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}
</style>
