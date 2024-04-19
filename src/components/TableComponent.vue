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
    <v-data-table :headers="displayedHeaders" :items="props.items">
      <template v-slot:item.image="{ item }">
        <v-card class="my-2" elevation="2" rounded>
          <v-img
            :src="`https://cdn.vuetifyjs.com/docs/images/graphics/gpus/${item.image}`"
            height="64"
            cover
          ></v-img>
        </v-card>
      </template>
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
});

const emit = defineEmits(["onEditAction", "onDeleteAction"]);

const search = ref("");

const displayedHeaders = computed(() => {
  return props.showActions
    ? props.headers
    : props.headers.filter((header) => header.key !== "actions");
});
</script>
