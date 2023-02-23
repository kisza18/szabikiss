<template>
  <div class="home-page">
    <PageLayout>
      <GlobalLayout class="relative">
        <div
          class="home-container flex w-full pt-20 px-10 items-center justify-between"
        >
          <div class="content w-1/2 -mt-20 text-textdark dark:text-textlight">
            <div class="content-container">
              <h1 class="text-6xl mb-3">Hi, I am Szabi</h1>
              <p
                class="text-2xl text-textdark font-thin tracking-wider ml-1 mb-6 dark:text-textlight"
              >
                Frontend Developer
              </p>
              <a
                href="https://1drv.ms/u/s!Aj35b7iZc6S1gP4g7G66Mrhk5N5fAw?e=d85QkG"
                target="_blank"
                class="w-52 flex items-center text-lg py-2 px-4 bg-button text-textdark border-2 border-buttonblue tracking-wide rounded-lg shadow-lg hover:bg-buttonblue duration-300"
              >
                <img
                  class="w-7 mr-2"
                  src="../assets/images/arrow_down.svg"
                  alt=""
                />
                Download CV
              </a>
            </div>
          </div>
          <div class="image w-1/2 z-10">
            <!-- <img class="scale-90" src="../assets/images/developer.svg" alt="" /> -->
          </div>
        </div>
        <div
          class="background-container w-3/4 h-full absolute top-0 right-0"
        ></div>
      </GlobalLayout>
      <ThePortfolio />
    </PageLayout>
  </div>
</template>

<script setup>
import GlobalLayout from "../layouts/GlobalLayout.vue";
import ThePortfolio from "../components/ThePortfolio.vue";
import PageLayout from "../layouts/PageLayout.vue";
</script>

<style scoped>
.home-container {
  min-height: 650px;
  height: calc(100vh);
  max-height: 767px;
}
.background-container {
  background-image: url("../assets/images/hero-blob.svg");
  background-repeat: no-repeat;
  background-position-y: -240px;
  background-position-x: 30px;
}
#htmlMain.dark div.background-container {
  opacity: 0.5;
}
</style>
