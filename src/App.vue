<script setup lang="ts">
import Header from "@/layouts/HeaderComponent.vue";
import Footer from "@/layouts/FooterComponent.vue";
</script>

<template>
  <VApp>
    <Header />
    <VMain>
      <router-view />
    </VMain>
    <Footer />
  </VApp>
</template>

<style scoped>
/* Estilos globales si es necesario */
</style>
