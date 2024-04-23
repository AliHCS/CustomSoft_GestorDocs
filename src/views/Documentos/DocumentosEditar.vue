<template>
  <v-container>
    <Loader v-if="loading" />
    <FormDocumentos
      v-if="!loading"
      :initialData="dataDocument"
      :editMode="true"
    />
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import FormDocumentos from "@/components/Forms/FormDocumentos.vue";
import Loader from "@/components/Loader.vue";
import { getDocsById, updateDocs } from "@/api/documents";
import {
  Documento,
  defaultValuesDocumento,
} from "@/utils/interfaces/documents";

const route = useRoute();

const dataDocument = ref<Documento>(); // Inicializado como datos por defecto
const itemId = ref<string>("");
const loading = ref<boolean>(true);

const loadData = () => {};
onMounted(async () => {
  itemId.value = route.params.id ? route.params.id.toString() : "";
  if (itemId.value) {
    loading.value = true;
    const { data } = await getDocsById(itemId.value);
    dataDocument.value = data;
    console.log("dataDocument: ", dataDocument.value);
    loading.value = false;
  }
});
</script>

<style scoped>
.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.loading-indicator {
  margin: 1rem;
}
</style>
