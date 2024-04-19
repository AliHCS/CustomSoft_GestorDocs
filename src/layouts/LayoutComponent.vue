<template>
  <v-card>
    <v-layout>
      <!-- Usando el nuevo componente AppBarComponent -->
      <HeaderComponent />
      <v-main style="height: 100vh">
        <router-view />
      </v-main>
    </v-layout>
  </v-card>
</template>

<script setup lang="ts">
import HeaderComponent from "@/layouts/HeaderComponent.vue";
</script>
