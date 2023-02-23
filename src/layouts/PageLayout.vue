<template>
  <div class="page-layout">
    <slot></slot>
    <FollowMe />
  </div>
</template>

<script setup>
import FollowMe from "../components/FollowMe.vue";
</script>
