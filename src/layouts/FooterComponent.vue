<template>
  <v-footer class="bg-indigo-lighten-1 text-center d-flex flex-column">
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        :icon="icon"
        class="mx-4"
        variant="text"
        @click="redirectToSocial(icon)"
      ></v-btn>
    </div>

    <div class="pt-0">
      Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris
      cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id
      ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui.
      Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada.
      Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin.
      Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius
      natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    </div>

    <v-divider></v-divider>

    <div>{{ new Date().getFullYear() }} — <strong>Vuetify</strong></div>
  </v-footer>
</template>

<script setup lang="ts">
const icons = ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"];

const redirectToSocial = (icon: any) => {
  switch (icon) {
    case "mdi-facebook":
      window.open("https://www.facebook.com/zuck", "_blank");
      break;
    case "mdi-twitter":
      window.open("https://twitter.com/elonmusk", "_blank");
      break;
    case "mdi-linkedin":
      window.open("https://www.linkedin.com/in/ali-gomez-47b8271a7/", "_blank");
      break;
    case "mdi-instagram":
      window.open("https://www.instagram.com/zuck", "_blank");
      break;
    default:
      break;
  }
};
</script>
