<template>
  <div class="project-card">
    <div
      class="card rounded-xl shadow-lg hover:shadow-xl cursor-pointer bg-socialcardgray text-center overflow-hidden hover:scale-105 duration-500 dark:bg-textgray"
    >
      <div
        :style="{ backgroundColor: color1 }"
        class="image flex items-center justify-center py-12 px-4"
      >
        <img class="rounded-xl shadow-lg" :src="source" alt="" />
      </div>
      <div class="content mb-8 mt-8">
        <h1 class="text-2xl font-semibold text-textdark mb-3">{{ name }}</h1>
        <div class="flex items-center justify-center gap-3">
          <a
            class="hover:text-buttonblue duration-300 dark:hover:text-textlight"
            :href="github"
            target="_blank"
            >github</a
          >
          <h1>|</h1>
          <a
            class="hover:text-buttonblue duration-300 dark:hover:text-textlight"
            :href="page"
            target="_blank"
            >page</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";

const props = defineProps({
  src: String,
  name: String,
  github: String,
  page: String,
  color1: String,
});

const source = ref();
watchEffect(async () => {
  source.value = (
    await import(`../assets/images/page-photos/${props.src}`)
  ).default;
});
</script>
