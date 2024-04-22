<template>
  <v-container>
    <FormDocumentos @onSubmit="createDocument" />
  </v-container>
</template>

<script setup lang="ts">
import FormDocumentos from "@/components/Forms/FormDocumentos.vue";
import { createDocumento } from "@/api/documents";
import { Documento } from "@/utils/interfaces/documents";

const createDocument = async (data: Documento) => {
  try {
    console.log("Documento", data);
    await createDocumento(data);
  } catch (error) {}
};
</script>

<style scoped></style>
