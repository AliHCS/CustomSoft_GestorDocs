<template>
  <v-card class="mx-auto" max-width="344">
    <v-img :height="imageHeight" :src="imageUrl" cover></v-img>

    <v-card-title>
      {{ title }}
    </v-card-title>

    <v-card-subtitle>
      {{ subtitle }}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn color="orange-lighten-2" text="Explore"></v-btn>

      <v-spacer></v-spacer>

      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{ text }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  imageUrl: {
    type: String,
    default: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
  },
  imageHeight: {
    type: String,
    default: "200px",
  },
  title: {
    type: String,
    default: "Default Title",
  },
  subtitle: {
    type: String,
    default: "Default Subtitle",
  },
  text: {
    type: String,
    default: "Default Text",
  },
});

const show = ref(false);
</script>
