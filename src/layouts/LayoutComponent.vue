<template>
  <v-layout class="rounded rounded-md">
    <HeaderComponent />
    <SideBarComponent />
    <v-main
      class="d-flex align-center justify-center"
      style="min-height: 300px"
    >
      <router-view />
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import HeaderComponent from "@/layouts/HeaderComponent.vue";
import SideBarComponent from "@/layouts/SideBarComponent.vue";
</script>

<style scoped>
/* Estilos específicos del layout */
</style>
