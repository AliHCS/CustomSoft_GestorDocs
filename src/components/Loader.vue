<template>
  <div class="loader-container">
    <v-progress-circular
      class="loading-indicator"
      color="green"
      indeterminate
    ></v-progress-circular>
  </div>
</template>

<script setup>
// No necesitas código aquí si Loader.vue es un componente simple
</script>

<style scoped>
.loading-indicator {
  margin: 1rem;
}
</style>
