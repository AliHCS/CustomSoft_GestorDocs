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
      :items="props.items"
      :items-per-page="itemsPerPage"
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
      <template v-slot:bottom>
        <div class="d-flex justify-center align-center">
          <div class="text-center" style="width: 300px">
            <!-- Ancho personalizado para la paginación -->
            <v-pagination v-model="page" :length="pageCount"></v-pagination>
          </div>
          <div class="text-right" style="width: 160px">
            <!-- Ancho personalizado para el select -->
            <!-- Contenedor para alinear a la derecha -->
            <v-select
              v-model="itemsPerPage"
              :items="perPageOptions"
              label="Registros por página"
              variant="solo-inverted"
            >
              <template v-slot:selection="{ item }">
                <span class="d-flex justify-center" style="width: 100%">
                  {{ item.title }}
                </span>
              </template>
            </v-select>
          </div>
        </div>
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

const page = ref(1);
const itemsPerPage = ref(5);
const perPageOptions = [5, 10, 15, 20];
const emit = defineEmits(["onEditAction", "onDeleteAction"]);

const search = ref("");

const displayedHeaders = computed(() => {
  return props.showActions
    ? props.headers
    : props.headers.filter((header) => header.key !== "actions");
});

const pageCount = computed(() => {
  return Math.ceil(props.items.length / itemsPerPage.value);
});
</script>

<style scoped>
/* Estilos opcionales para el contenedor y el select */
.mx-auto {
  max-width: 200px; /* Ancho máximo del contenedor para el select */
}

/* Estilos personalizados para la paginación y el select */
.v-pagination {
  width: 100%; /* Ancho completo */
  max-width: 300px; /* Ancho máximo */
  margin: 0 auto; /* Centrado horizontal */
}

.v-select {
  width: 100%; /* Ancho completo */
  max-width: 200px; /* Ancho máximo */
}

.v-select__selection {
  width: 100%;
  justify-content: center;
}
</style>
