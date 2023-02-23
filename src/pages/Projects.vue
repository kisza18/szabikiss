<template>
  <div id="projects-page">
    <PageLayout>
      <GlobalLayout>
        <div class="portfolio-container w-full px-5 md:px-10 pt-32 md:pt-40">
          <div class="content w-full flex items-center justify-center">
            <h1
              class="text-3xl md:text-5xl text-center font-semibold text-textdark dark:text-textlight"
            >
              Projects Portfolio
            </h1>
          </div>
          <div
            class="card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center w-full text-center my-20 md:px-12"
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
              src="apple.png"
              name="Apple"
              github="https://github.com/kisza18/apple"
              page="https://kisza18-applecopy.netlify.app/"
              color1="#F8EDE3"
            />
            <ProjectCard
              src="blogr.png"
              name="Blogr"
              github="https://github.com/kisza18/blogr"
              page="https://kisza18-blogr.netlify.app/"
              color1="#CDF0EA"
            />
            <ProjectCard
              src="microsoft.png"
              name="Microsoft"
              github="https://github.com/kisza18/microsoft"
              page="https://kisza18-microsoftcopy.netlify.app/"
              color1="#FCF9BE"
            />
            <ProjectCard
              src="sunnyside.png"
              name="SunnySide"
              github="https://github.com/kisza18/sunnyside"
              page="https://kisza18-sunnyside.netlify.app/"
              color1="#F7F6DC"
            />
          </div>
        </div>
      </GlobalLayout>
    </PageLayout>
  </div>
</template>

<script setup>
import GlobalLayout from "../layouts/GlobalLayout.vue";
import ProjectCard from "../components/ProjectCard.vue";
import PageLayout from "../layouts/PageLayout.vue";
</script>

<style scoped>
.gray-line {
  height: 2px;
}
</style>
