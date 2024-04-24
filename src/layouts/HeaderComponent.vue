<template>
  <v-app-bar color="indigo-lighten-1" prominent>
    <!-- Hacer clic en el icono cambia el valor de "drawer" -->
    <v-app-bar-nav-icon
      variant="text"
      @click.stop="toggleDrawer"
    ></v-app-bar-nav-icon>

    <v-toolbar-title>Sistema de Gestion de Documentos</v-toolbar-title>

    <v-spacer></v-spacer>

    <template v-if="$vuetify.display.mdAndUp">
      <v-btn icon="mdi-magnify" variant="text"></v-btn>
      <v-btn icon="mdi-filter" variant="text"></v-btn>
    </template>

    <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
  </v-app-bar>
  <!-- Llama al SideBarComponent y pasa "drawer" y la función "handleUpdateDrawer" -->
  <SideBarComponent :drawer="drawer" @update="handleUpdateDrawer" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import SideBarComponent from "@/layouts/SideBarComponent.vue";

// Definir ref "drawer" y la función para actualizarlo
const drawer = ref<boolean>(false);
const handleUpdateDrawer = (value: boolean) => {
  drawer.value = value;
};

// Función para alternar el valor de "drawer"
const toggleDrawer = () => {
  drawer.value = !drawer.value;
};
</script>
