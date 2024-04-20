<template>
  <v-card flat>
    <v-card-title class="d-flex align-center pe-2">
      {{ props.title }}

      <v-spacer></v-spacer>

      <v-text-field
        v-model="search"
        density="compact"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        variant="solo-filled"
        flat
        hide-details
        single-line
      ></v-text-field>
    </v-card-title>

    <v-data-table
      :headers="displayedHeaders"
      :items="filteredItems"
      items-per-page="5"
    >
      <template v-if="props.showActions" v-slot:item.actions="{ item }">
        <v-icon class="me-2" size="small" @click="emit('onEditAction', item)">
          mdi-pencil
        </v-icon>
        <v-icon size="small" @click="emit('onDeleteAction', item)">
          mdi-delete
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary"> Reset </v-btn>
      </template>
    </v-data-table>
  </v-card>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const props = defineProps({
  headers: {
    type: Array as () => any[],
    required: true,
  },
  items: {
    type: Array as () => any[],
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  showActions: {
    type: Boolean,
    required: false,
    default: false,
  },
  searchProperties: {
    type: Array as () => string[],
    default: () => ["name", "description"],
    required: false,
  },
});

const emit = defineEmits(["onEditAction", "onDeleteAction"]);

const search = ref("");

const displayedHeaders = computed(() => {
  return props.showActions
    ? props.headers
    : props.headers.filter((header) => header.key !== "actions");
});

const filteredItems = computed(() => {
  if (!search.value) {
    return props.items;
  }
  const searchTerm = search.value.toLowerCase();
  return props.items.filter((item) => {
    return props.searchProperties.some((prop) => {
      // Verificar si alguna de las propiedades contiene el término de búsqueda
      return item[prop] && item[prop].toLowerCase().includes(searchTerm);
    });
  });
});
</script>
