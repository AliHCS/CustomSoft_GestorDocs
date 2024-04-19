<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <h1 class="display-2 text-center">Bienvenido a mi aplicación</h1>
        <p class="subtitle-1 text-center">
          Este es un ejemplo de página de inicio utilizando Vuetify
        </p>
      </v-col>
    </v-row>
    <GridCardsComponent :cardData="cardData" />
  </v-container>
</template>

<script setup lang="ts">
import GridCardsComponent from "@/components/GridCardsComponent.vue"; // Ajusta la ruta según la estructura de tu proyecto

const cardData = [
  {
    title: "Pre-fab homes",
    src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
    flex: 12,
  },
  {
    title: "Favorite road trips",
    src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
    flex: 6,
  },
  {
    title: "Best airlines",
    src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
    flex: 6,
  },
];
</script>

<style scoped></style>
