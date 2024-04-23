<template>
  <v-container>
    <v-form @submit.prevent="submitForm">
      <v-text-field
        v-model="formData.name"
        :error-messages="nameErrors"
        :error="nameErrors.length > 0"
        label="Nombre"
        required
      ></v-text-field>

      <v-text-field
        v-model="formData.description"
        :error-messages="descriptionErrors"
        :error="descriptionErrors.length > 0"
        label="Descripción"
        required
      ></v-text-field>

      <v-text-field
        v-model="formData.extension"
        :error-messages="extensionErrors"
        :error="extensionErrors.length > 0"
        label="Extensión"
        required
      ></v-text-field>

      <v-text-field
        v-model="formData.date"
        :error-messages="dateErrors"
        :error="dateErrors.length > 0"
        label="Fecha"
        type="date"
        required
      ></v-text-field>

      <input
        ref="fileInput"
        v-if="!itemId"
        type="file"
        accept=".pdf,.doc,.docx,.txt"
        @change="handleFileChange"
      />
      <v-text-field
        v-else
        v-model="formData.document"
        label="Archivo"
        disabled
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
import { useAlert } from "@/composables/useAlert";
import { createDocumento, getDocsById, updateDocs } from "@/api/documents";
import {
  Documento,
  defaultValuesDocumento,
} from "@/utils/interfaces/documents";
import {
  nameErrors,
  descriptionErrors,
  extensionErrors,
  dateErrors,
  validateForm,
  clearErrors,
} from "@/utils/validations/documentosFormValidations";

const route = useRoute();
const router = useRouter();

const {
  showAlert,
  showAlertComponent,
  alertMessage,
  alertTimeout,
  alertColor,
} = useAlert();

const formData = ref<Documento>(defaultValuesDocumento);
const itemId = ref<string>("");

const fileInput = ref<HTMLInputElement | null>(null);

const submitForm = async () => {
  validateForm(formData.value);

  if (
    nameErrors.value.length ||
    descriptionErrors.value.length ||
    extensionErrors.value.length ||
    dateErrors.value.length
  ) {
    return;
  }

  try {
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
    showAlert("¡Formulario enviado con éxito!", 4000, "success");
    resetForm();
    redirectToIndex();
  } catch (error) {
    console.error("Error al enviar formulario:", error);
    showAlert("Ocurrió un error al enviar el formulario", 4000, "error");
  }
};

const redirectToIndex = () => {
  setTimeout(() => {
    try {
      router.push({ name: "index-documentos" });
    } catch (error) {
      console.error("Error al redirigir:", error);
    }
  }, 4000);
};

const resetForm = () => {
  formData.value.id = ".value";
  formData.value.name = "";
  formData.value.description = "";
  formData.value.extension = "";
  formData.value.document = "";
  formData.value.date = "";
  clearErrors();
};

const cancelForm = () => {
  resetForm();
  router.push({ name: "index-documentos" });
};

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    formData.value.document = target.files[0].name;
  } else {
    formData.value.document = "";
  }
};

onMounted(async () => {
  try {
    itemId.value = route.params.id ? route.params.id.toString() : "";
    if (itemId.value) {
      const { data } = await getDocsById(itemId.value);
      formData.value = data;
    }
  } catch (error) {
    console.error("Error al obtener documento por ID:", error);
    showAlert("Ocurrió un error al obtener el documento", 4000, "error");
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
