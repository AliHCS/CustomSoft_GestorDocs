<template>
  <v-app>
    <v-main style="max-height: calc(100vh - 64px); overflow-y: auto">
      <v-container>
        <v-row justify="center">
          <v-col cols="12">
            <h1 class="display-2 text-center">Gestión de Archivos</h1>
            <p class="subtitle-1 text-center">
              Este es un ejemplo de página de inicio para la gestión de archivos
              utilizando Vuetify
            </p>
          </v-col>
        </v-row>

        <GridCardsComponent :cardData="cardData" />
      </v-container>

      <!-- Nuevas tarjetas -->
      <v-container>
        <v-row>
          <v-col cols="12" sm="6">
            <CustomCard
              imageUrl="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              imageHeight="300px"
              title="Custom Title 1"
              subtitle="Custom Subtitle 1"
              text="Custom Text 1"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <CustomCard
              imageUrl="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              imageHeight="300px"
              title="Custom Title 2"
              subtitle="Custom Subtitle 2"
              text="Custom Text 2"
            />
          </v-col>
        </v-row>
      </v-container>

      <!-- Tarjeta del tiempo -->
      <v-container>
        <v-row>
          <v-col cols="12">
            <WeatherCard
              location="Florida"
              alert="Extreme Weather Alert"
              alertColor="error"
              temperature="64\u00B0F"
              weatherIcon="mdi-weather-hurricane"
              weatherIconColor="error"
              windIcon="mdi-weather-windy"
              windSpeed="123 km/h"
              humidityIcon="mdi-weather-pouring"
              humidity="48%"
              :maxTime="6"
              :labels="{
                0: 'SU',
                1: 'MO',
                2: 'TU',
                3: 'WED',
                4: 'TH',
                5: 'FR',
                6: 'SA',
              }"
              :forecast="[
                {
                  day: 'Tuesday',
                  icon: 'mdi-white-balance-sunny',
                  temp: '24\u00B0/12\u00B0',
                },
                {
                  day: 'Wednesday',
                  icon: 'mdi-white-balance-sunny',
                  temp: '22\u00B0/14\u00B0',
                },
                {
                  day: 'Thursday',
                  icon: 'mdi-cloud',
                  temp: '25\u00B0/15\u00B0',
                },
              ]"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import GridCardsComponent from "@/components/GridCardsComponent.vue";
import CustomCard from "@/components/CardComponent.vue";
import WeatherCard from "@/components/CardTimeComponent.vue";

const cardData = [
  {
    title: "Subir Archivos",
    src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
    flex: 12,
  },
  {
    title: "Ver Archivos",
    src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
    flex: 6,
  },
  {
    title: "Eliminar Archivos",
    src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
    flex: 6,
  },
];
</script>

<style scoped>
/* Estilos adicionales para ajustar el tamaño de las imágenes */
.v-card img {
  max-width: 100%;
  max-height: 100%;
}
</style>
