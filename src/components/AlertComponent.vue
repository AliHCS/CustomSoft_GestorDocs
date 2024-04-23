<template>
  <v-snackbar
    v-model="showSnackbar"
    :timeout="props.timeout"
    :color="props.color"
  >
    {{ props.message }}
  </v-snackbar>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  message: { type: String, required: true },
  timeout: { type: Number, default: 5000 },
  color: { type: String, default: "success" }, // Color por defecto: éxito
});

const showSnackbar = ref(true);
</script>
