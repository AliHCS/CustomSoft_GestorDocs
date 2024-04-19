<template>
  <v-navigation-drawer
    v-model="props.drawer"
    :location="$vuetify.display.mobile ? 'top' : undefined"
    temporary
    sticky
  >
    <v-card class="mx-auto" max-width="300">
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :value="item"
          color="primary"
          @click="navigateTo(item.route)"
        >
          <template v-slot:prepend></template>

          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { items } from "@/utils/models/dataSideBar.ts";

const props = defineProps({
  drawer: {
    type: Boolean,
  },
});

const router = useRouter();
const navigateTo = (route: string) => {
  router.push(route); // Navegar a la ruta usando el router de Vue
};
</script>

<style scoped>
.router-link-item {
  cursor: pointer; /* Establecer el cursor como puntero */
  color: inherit; /* Heredar el color del texto */
  text-decoration: none; /* Quitar la subrayado predeterminado */
}
</style>
