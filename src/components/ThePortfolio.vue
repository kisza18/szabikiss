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
          <ProjectCard
            src="bunq.png"
            name="Bunq"
            github="https://github.com/kisza18/bunq"
            page="https://kisza18-bunq.netlify.app/"
            color1="#FAAB78"
          />
          <ProjectCard
            src="audiophile.png"
            name="Audiophile"
            github="https://github.com/kisza18/audiophile"
            page="https://kisza18-audiophile.netlify.app/"
            color1="#F8C4B4"
          />
          <ProjectCard
            src="planets.png"
            name="Planets"
            github="https://github.com/kisza18/planets"
            page="https://kisza18-planetsfact.netlify.app"
            color1="#B8E8FC"
          />
          <ProjectCard
            class="hidden md:flex lg:hidden"
            src="apple.png"
            name="Apple"
            github="https://github.com/kisza18/apple"
            page="https://kisza18-applecopy.netlify.app/"
            color1="#F8EDE3"
          />
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
import ProjectCard from "../components/ProjectCard.vue";
</script>
