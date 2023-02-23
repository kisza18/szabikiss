<template>
  <div class="follow-me mb-5">
    <GlobalLayout>
      <div class="gray-line w-full px-10 md:px-20 my-20">
        <div class="w-full h-full bg-textlight dark:bg-gray-600"></div>
      </div>
      <div
        class="container_footer flex flex-col items-center justify-center w-full"
      >
        <h1
          class="text-2xl md:text-4xl font-semibold text-textdark dark:text-textlight"
        >
          Follow Me
        </h1>
        <div
          class="social-container w-full flex items-center justify-center mt-5"
        >
          <div
            class="w-12 md:w-16 bg-socialcardgray dark:bg-projectcard rounded-lg p-2 md:p-4 mx-5 shadow-sm"
          >
            <a href="https://www.facebook.com/szabicsabi" target="_blank">
              <img
                class="opacity-50 hover:opacity-100 duration-300 dark:opacity-100"
                src="../assets/images/facebook-icon.png"
                alt=""
              />
            </a>
          </div>
          <div
            class="w-12 md:w-16 bg-socialcardgray dark:bg-projectcard rounded-lg p-2 md:p-4 mx-5 shadow-sm"
          >
            <a href="https://github.com/kisza18" target="_blank">
              <img
                class="opacity-50 hover:opacity-100 duration-300 dark:opacity-100"
                src="../assets/images/github-icon.png"
                alt=""
              />
            </a>
          </div>
          <div
            class="w-12 md:w-16 bg-socialcardgray dark:bg-projectcard rounded-lg p-2 md:p-4 mx-5 shadow-sm"
          >
            <a
              href="https://www.linkedin.com/in/szabolcs-kiss-119529187/"
              target="_blank"
            >
              <img
                class="opacity-50 hover:opacity-100 duration-300 dark:opacity-100"
                src="../assets/images/linkedin-icon.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <p class="text-textdark dark:text-textlight mt-20">
          © 2023. Developed by Szabolcs Kiss
        </p>
      </div>
    </GlobalLayout>
  </div>
</template>

<script setup>
import GlobalLayout from "../layouts/GlobalLayout.vue";
</script>

<style scoped>
.gray-line {
  height: 2px;
}
</style>
