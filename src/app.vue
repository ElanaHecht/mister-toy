<template>
  <h1>Mister Toy</h1>
  <app-header></app-header>
  <router-view />
</template>

<script>
import appHeader from "./components/app-header.vue";

export default {
  name: "App",
  components: {
    appHeader,
  },
};
</script>

<style></style>
