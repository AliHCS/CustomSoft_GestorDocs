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
    <TableComponent
      :headers="headers"
      :items="items"
      title="Mi tabla"
      :showActions="true"
      @onEditAction="emitActionEdit"
      @onDeleteAction="emitDeleteAction"
    />
  </v-container>
</template>

<script setup lang="ts">
import GridCardsComponent from "@/components/GridCardsComponent.vue";
import TableComponent from "@/components/TableComponent.vue";

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

const headers = [
  {
    key: "name",
    title: "Nombre",
    align: "start",
    sortable: false,
  },
  {
    key: "image",
    title: "Descripcion",
    align: "start",
    sortable: false,
  },
  {
    key: "price",
    title: "Extencion",
    align: "start",
    sortable: false,
  },
  {
    key: "rating",
    title: "Documento",
    align: "start",
    sortable: false,
  },
  {
    key: "stock",
    title: "Fecha",
    align: "start",
    sortable: false,
  },
  { title: "Actions", key: "actions", sortable: false },
];

const items = [
  {
    name: "Nebula GTX 4090",
    image: "1.png",
    price: 699.99,
    rating: 5,
    stock: true,
  },
  {
    name: "Galaxy RTX 3080",
    image: "2.png",
    price: 799.99,
    rating: 4,
    stock: false,
  },
  {
    name: "Orion RX 6800 XT",
    image: "3.png",
    price: 649.99,
    rating: 3,
    stock: true,
  },
  {
    name: "Vortex RTX 3090",
    image: "4.png",
    price: 1499.99,
    rating: 4,
    stock: true,
  },
  {
    name: "Cosmos GTX 1660 Super",
    image: "5.png",
    price: 299.99,
    rating: 4,
    stock: false,
  },
];

const emitActionEdit = (item: any) => {
  console.log(item);
};
const emitDeleteAction = (item: any) => {
  console.log(item);
};
</script>

<style scoped></style>
