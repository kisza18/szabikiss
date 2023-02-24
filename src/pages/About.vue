<template>
  <div id="about-page">
    <PageLayout>
      <GlobalLayout>
        <div
          class="about-container pt-32 md:pt-48 pb-32 md:pb-40 flex flex-col md:flex-row items-start justify-between gap-10 px-5 md:px-20"
        >
          <div
            class="image w-full md:w-72 rounded-lg overflow-hidden shadow-lg"
          >
            <img class="" src="../assets/images/szabi.png" alt="" />
          </div>
          <div class="content w-full md:w-3/4">
            <h1
              class="text-textdark leading-8 text-justify dark:text-textlight"
            >
              Currently I'm not working as a developer, but I spend all my free
              time to learn front end development. I have already acquired many
              skills and knowledge, however I'm open to learn more and I would
              like to work on live projects.
            </h1>
          </div>
        </div>
        <div
          class="skills w-full bg-bglinegray mb-20 py-16 text-center px-5 md:px-20 dark:bg-projectcard"
        >
          <h1
            class="text-textdark text-3xl font-semibold mb-10 dark:text-textlight"
          >
            Skills
          </h1>
          <div
            class="skill-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
          >
            <div
              class="skill-card bg-socialcardgray border rounded-lg py-10 px-10 h-36 flex items-center justify-center grayscale hover:grayscale-0 cursor-pointer duration-300"
            >
              <img
                class="h-full"
                src="../assets/images/skills/html.png"
                alt=""
              />
            </div>
            <div
              class="skill-card bg-socialcardgray border rounded-lg py-10 px-10 h-36 flex items-center justify-center grayscale hover:grayscale-0 cursor-pointer duration-300"
            >
              <img
                class="h-full"
                src="../assets/images/skills/css.png"
                alt=""
              />
            </div>
            <div
              class="skill-card bg-socialcardgray border rounded-lg py-10 px-10 h-36 flex items-center justify-center grayscale hover:grayscale-0 cursor-pointer duration-300"
            >
              <img
                class="h-full"
                src="../assets/images/skills/javascript.png"
                alt=""
              />
            </div>
            <div
              class="skill-card bg-socialcardgray border rounded-lg py-10 px-10 h-36 flex items-center justify-center grayscale hover:grayscale-0 cursor-pointer duration-300"
            >
              <img
                class="h-full"
                src="../assets/images/skills/vue.png"
                alt=""
              />
            </div>
            <div
              class="skill-card bg-socialcardgray border rounded-lg py-10 px-10 h-36 flex items-center justify-center grayscale hover:grayscale-0 cursor-pointer duration-300"
            >
              <img
                class="h-full"
                src="../assets/images/skills/tailwind.png"
                alt=""
              />
            </div>
            <div
              class="skill-card bg-socialcardgray border rounded-lg py-10 px-10 h-36 flex items-center justify-center grayscale hover:grayscale-0 cursor-pointer duration-300"
            >
              <img
                class="h-full"
                src="../assets/images/skills/sass.png"
                alt=""
              />
            </div>
            <div
              class="skill-card bg-socialcardgray border rounded-lg py-10 px-10 h-36 flex items-center justify-center grayscale hover:grayscale-0 cursor-pointer duration-300"
            >
              <img
                class="h-full"
                src="../assets/images/skills/firebase.png"
                alt=""
              />
            </div>
            <div
              class="skill-card bg-socialcardgray border rounded-lg py-10 px-10 h-36 flex items-center justify-center grayscale hover:grayscale-0 cursor-pointer duration-300"
            >
              <img
                class="h-full"
                src="../assets/images/skills/github.png"
                alt=""
              />
            </div>
            <div
              class="skill-card bg-socialcardgray border rounded-lg py-10 px-10 h-36 flex items-center justify-center grayscale hover:grayscale-0 cursor-pointer duration-300"
            >
              <img class="h-full" src="../assets/images/skills/ps.png" alt="" />
            </div>
            <div
              class="skill-card bg-socialcardgray border rounded-lg py-10 px-10 h-36 flex items-center justify-center grayscale hover:grayscale-0 cursor-pointer duration-300"
            >
              <img
                class="h-full"
                src="../assets/images/skills/vscode.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </GlobalLayout>
    </PageLayout>
  </div>
</template>

<script setup>
import PageLayout from "../layouts/PageLayout.vue";
import GlobalLayout from "../layouts/GlobalLayout.vue";
</script>
