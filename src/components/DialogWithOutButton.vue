<template>
  <v-dialog
    v-model="props.dialog"
    max-width="500"
    content-class="dialog-content"
  >
    <v-card>
      <slot name="content"> </slot>
      <template v-slot:actions>
        <v-btn
          class="ml-auto"
          variant="outlined"
          rounded="lg"
          @click="closeDialog"
          color="error"
          >Close</v-btn
        >
        <v-btn
          v-if="showAceptButton"
          variant="outlined"
          rounded="lg"
          @click="handleAccept"
          color="success"
          >Aceptar</v-btn
        >
      </template>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  dialog: Boolean,
  showAceptButton: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits();
const closeDialog = () => emit("update:dialog", false);

const handleAccept = () => {
  emit("accepted");
  emit("update:dialog", false);
};
</script>

<style scoped>
.dialog-content {
  max-height: 80vh; /* Limita la altura al 80% del viewport height */
  overflow-y: auto; /* Añade scroll si el contenido es demasiado grande */
}
</style>
