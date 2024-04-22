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
        v-model="formData.document"
        label="Seleccionar Archivo"
        type="file"
        accept=".pdf,.doc,.docx,.txt"
        required
      ></v-text-field>

      <v-btn type="submit" color="primary">Enviar</v-btn>
    </v-form>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Documento } from "@/utils/interfaces/documents.ts";

const props = defineProps({
  initialFormData: {
    type: Object as () => Documento,
    default: () => ({
      id: "",
      name: "",
      description: "",
      extension: "",
      document: "",
      date: "",
    }),
  },
});

const emit = defineEmits(["onSubmit"]);
const formData = ref(props.initialFormData);

const submitForm = () => {
  // Convertir los datos a formato JSON
  const jsonData = {
    name: formData.value.name,
    description: formData.value.description,
    extension: formData.value.extension,
    document: formData.value.document, // Solo guardamos el nombre del archivo
    date: formData.value.date,
  };

  emit("onSubmit", jsonData);

  // Simulación de envío a un endpoint
};
</script>

<style>
/* Puedes agregar estilos según sea necesario */
</style>
