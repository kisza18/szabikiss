<template>
  <TheNavbar />
  <router-view></router-view>
</template>

<script setup>
import GlobalLayout from "./layouts/GlobalLayout.vue";
import TheNavbar from "./components/TheNavbar.vue";
</script>
