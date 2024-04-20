<template>
  <v-navigation-drawer
    v-model="localDrawer"
    :location="$vuetify.display.mobile ? 'top' : undefined"
    absolute
    disable-resize-watcher
  >
    <v-card class="mx-auto" max-width="300">
      <v-list>
        <!-- Iterar sobre "items" y crear elementos de lista -->
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :value="item"
          color="primary"
          @click="navigateTo(item.route)"
        >
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref, watch } from "vue";
import { items } from "@/utils/models/dataSideBar.ts";

// Definir las props, emisión y router
const props = defineProps({
  drawer: {
    type: Boolean,
  },
});
const emit = defineEmits(["update"]);
const router = useRouter();

// Usar ref local para "localDrawer"
const localDrawer = ref(props.drawer);

// Función para navegar a una ruta y cerrar el drawer
const navigateTo = (route: string) => {
  router.push({ name: route });
  emit("update", false); // Emitir evento "update" para cerrar el drawer
};

// Observar cambios en la prop "drawer" y actualizar "localDrawer"
watch(
  () => props.drawer,
  (newValue) => {
    localDrawer.value = newValue;
  }
);
</script>

<style scoped></style>
