<script setup lang="ts">
import { ref } from "vue";
/* import HeaderComponent from "@/layouts/HeaderComponent.vue"; */
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
getDocsFunction();
</script>

<template>
  <VApp>
    <VMain>
      <router-view />
    </VMain>
  </VApp>
</template>

<style scoped></style>
