<template>
  <v-card class="mx-auto" max-width="368">
    <v-card-item :title="location">
      <template v-slot:subtitle>
        <v-icon
          class="me-1 pb-1"
          :color="alertColor"
          icon="mdi-alert"
          size="18"
        ></v-icon>

        {{ alert }}
      </template>
    </v-card-item>

    <v-card-text class="py-0">
      <v-row align="center" no-gutters>
        <v-col class="text-h2" cols="6">
          {{ temperature }}
        </v-col>

        <v-col class="text-right" cols="6">
          <v-icon
            :color="weatherIconColor"
            :icon="weatherIcon"
            size="88"
          ></v-icon>
        </v-col>
      </v-row>
    </v-card-text>

    <div class="d-flex py-3 justify-space-between">
      <v-list-item density="compact" :prepend-icon="windIcon">
        <v-list-item-subtitle>{{ windSpeed }}</v-list-item-subtitle>
      </v-list-item>

      <v-list-item density="compact" :prepend-icon="humidityIcon">
        <v-list-item-subtitle>{{ humidity }}</v-list-item-subtitle>
      </v-list-item>
    </div>

    <v-expand-transition>
      <div v-if="expand">
        <div class="py-2">
          <v-slider
            v-model="time"
            :max="maxTime"
            :step="1"
            :ticks="labels"
            class="mx-4"
            color="primary"
            density="compact"
            show-ticks="always"
            thumb-size="10"
            hide-details
          ></v-slider>
        </div>

        <v-list class="bg-transparent">
          <v-list-item
            v-for="item in forecast"
            :key="item.day"
            :append-icon="item.icon"
            :subtitle="item.temp"
            :title="item.day"
          >
          </v-list-item>
        </v-list>
      </div>
    </v-expand-transition>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn
        :text="!expand ? 'Full Report' : 'Hide Report'"
        @click="expand = !expand"
      ></v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  location: {
    type: String,
    default: "Florida",
  },
  alert: {
    type: String,
    default: "Extreme Weather Alert",
  },
  alertColor: {
    type: String,
    default: "error",
  },
  temperature: {
    type: String,
    default: "64\u00B0F",
  },
  weatherIcon: {
    type: String,
    default: "mdi-weather-hurricane",
  },
  weatherIconColor: {
    type: String,
    default: "error",
  },
  windIcon: {
    type: String,
    default: "mdi-weather-windy",
  },
  windSpeed: {
    type: String,
    default: "123 km/h",
  },
  humidityIcon: {
    type: String,
    default: "mdi-weather-pouring",
  },
  humidity: {
    type: String,
    default: "48%",
  },
  maxTime: {
    type: Number,
    default: 6,
  },
  labels: {
    type: Object,
    default: () => ({
      0: "SU",
      1: "MO",
      2: "TU",
      3: "WED",
      4: "TH",
      5: "FR",
      6: "SA",
    }),
  },
  forecast: {
    type: Array,
    default: () => [
      {
        day: "Tuesday",
        icon: "mdi-white-balance-sunny",
        temp: "24\u00B0/12\u00B0",
      },
      {
        day: "Wednesday",
        icon: "mdi-white-balance-sunny",
        temp: "22\u00B0/14\u00B0",
      },
      { day: "Thursday", icon: "mdi-cloud", temp: "25\u00B0/15\u00B0" },
    ],
  },
});

const expand = ref(false);
const time = ref(0);
</script>
