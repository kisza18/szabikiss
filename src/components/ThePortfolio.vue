<template>
  <div class="the-portfolio pt-20">
    <GlobalLayout>
      <div class="portfolio-container w-full px-5 md:px-10 pb-10">
        <div class="content w-full flex items-center justify-center">
          <h1
            class="text-3xl md:text-5xl text-center font-semibold text-textdark dark:text-textlight"
          >
            Projects Portfolio
          </h1>
        </div>
        <div
          class="card-container grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center w-full text-center mt-20 md:px-12"
        >
          <div v-for="item in json" :key="item.id">
            <div v-show="item.id <= 3" class="project-card">
              <div
                class="card rounded-xl shadow-lg hover:shadow-xl cursor-pointer bg-socialcardgray text-center overflow-hidden hover:scale-105 duration-500 dark:bg-projectcard"
              >
                <div
                  :style="{ backgroundColor: item.background }"
                  class="image flex items-center justify-center py-12 px-4"
                >
                  <img class="rounded-xl shadow-lg" :src="item.image" alt="" />
                </div>
                <div class="content mb-8 mt-8">
                  <h1
                    class="text-2xl font-semibold text-textdark mb-3 dark:text-textlight"
                  >
                    {{ item.name }}
                  </h1>
                  <div class="flex items-center justify-center gap-3">
                    <a
                      class="hover:text-buttonblue duration-300 dark:text-textgray dark:hover:text-textlight"
                      :href="item.github"
                      target="_blank"
                      >github</a
                    >
                    <h1>|</h1>
                    <a
                      class="hover:text-buttonblue duration-300 dark:text-textgray dark:hover:text-textlight"
                      :href="item.page"
                      target="_blank"
                      >page</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="more-project-link w-full flex items-center justify-center">
        <router-link
          class="text-xl text-textlight bg-buttonblue py-3 px-5 rounded-lg mt-20 shafow-lg hover:shadow-xl duration-300 hover:text-textdark"
          to="/projects"
          >More Projects</router-link
        >
      </div>
    </GlobalLayout>
  </div>
</template>

<script setup>
import GlobalLayout from "../layouts/GlobalLayout.vue";
import json from "../data.json";
</script>
