<script setup lang="ts">
/* import { ref } from "vue";
import FormDocumentos from "@/components/Forms/FormDocumentos.vue"; */
import GridCardsComponent from "@/components/GridCardsComponent.vue";

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

<template>
  <div>
    <GridCardsComponent :cardData="cardData" />
  </div>
</template>

<style scoped></style>
