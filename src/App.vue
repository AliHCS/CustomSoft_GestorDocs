<script setup lang="ts">
import { ref } from "vue";
import HeaderComponent from "@/layouts/HeaderComponent.vue";
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
    <!-- Encabezado siempre visible -->
    <HeaderComponent />
    <VMain>
      <div>
        <router-view />
      </div>
    </VMain>
  </VApp>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
