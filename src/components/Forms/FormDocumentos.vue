<template>
  <v-container>
    <v-form @submit.prevent="submitForm">
      <v-text-field
        v-model="formData.id"
        label="ID"
        type="number"
        required
      ></v-text-field>

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
        v-model="formData.document"
        label="Nombre del Documento"
        required
      ></v-text-field>

      <v-text-field
        v-model="formData.date"
        label="Fecha"
        type="date"
        required
      ></v-text-field>

      <v-file-input
        v-model="formData.file"
        label="Seleccionar Archivo"
        accept=".pdf,.doc,.docx,.txt"
        chips
        small-chips
        multiple
        :show-size="true"
      ></v-file-input>

      <v-btn type="submit" color="primary">Enviar</v-btn>
    </v-form>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Documento } from "@/utils/interfaces/documents.ts";

const formData = ref<Documento>({
  id: "",
  name: "",
  description: "",
  extension: "",
  document: "",
  date: "",
  file: undefined,
});

const submitForm = () => {
  const data = new FormData();
  data.append(
    "id",
    formData.value.id !== null && formData.value.id !== undefined
      ? formData.value.id.toString()
      : ""
  );
  data.append("name", formData.value.name);
  data.append("description", formData.value.description);
  data.append("extension", formData.value.extension);
  data.append("document", formData.value.document);
  data.append("date", formData.value.date);

  if (formData.value.file) {
    const files = Array.isArray(formData.value.file)
      ? formData.value.file
      : [formData.value.file];
    for (const file of files) {
      data.append("files", file);
    }
  }

  console.log("Datos del formulario y archivo enviado:");
  for (const pair of data.entries()) {
    console.log(pair[0] + ":", pair[1]);
  }

  // Simulación de envío a un endpoint
};
</script>

<style>
/* Puedes agregar estilos según sea necesario */
</style>
