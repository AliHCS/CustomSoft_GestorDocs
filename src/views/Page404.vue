<template>
  <v-container fluid class="d-flex align-center justify-center full-height">
    <v-card color="warning" subtitle="Ruta Invalida" title="404">
      <template v-slot:prepend>
        <v-icon color="red" icon="mdi-account"></v-icon>
      </template>
      <template v-slot:append>
        <v-icon color="red" icon="mdi-close-thick" @click="goToHome"></v-icon>
      </template>
      <v-card-text
        >La dirección a la que intentas acceder no existe.</v-card-text
      >
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import router from "@/router";
const goToHome = () => {
  router.push({ name: "Home" });
};
</script>

<style scoped>
.full-height {
  height: 50vh; /* Establece la altura al 100% de la altura de la ventana */
}
</style>
