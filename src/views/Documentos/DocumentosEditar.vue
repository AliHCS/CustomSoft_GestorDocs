<template>
  <v-container>
    <FormDocumentos :initialFormData="dataDocument" v-if="loading" />
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getDocsById, updateDocs } from "@/api/documents";
import { Documento } from "@/utils/interfaces/documents";

const route = useRoute();

const dataDocument = ref<Documento>();

const itemId = ref<string>("");
const loading = ref<boolean>();

onMounted(async () => {
  itemId.value = route.params.id ? route.params.id.toString() : "";
  if (itemId.value) {
    loading.value = false;
    const { data } = await getDocsById(itemId.value);
    dataDocument.value = data;
    loading.value = true;
  }
});

import FormDocumentos from "@/components/Forms/FormDocumentos.vue";
</script>

<style scoped></style>
