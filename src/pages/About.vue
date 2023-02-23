<template>
  <div id="about-page">
    <PageLayout>
      <div
        class="about-container pt-48 pb-40 flex items-start justify-between gap-10 px-20"
      >
        <div class="image w-72 rounded-lg overflow-hidden shadow-lg">
          <img class="" src="../assets/images/szabi.png" alt="" />
        </div>
        <div class="content w-3/4">
          <h1 class="text-textdark leading-8 text-justify dark:text-textlight">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptates, temporibus dignissimos nulla dolorem quo eaque ad dicta
            repellat sint deleniti. Odio sint, alias asperiores fuga in quasi
            obcaecati recusandae voluptate illo omnis fugit, dignissimos
            consequuntur nihil aut beatae tempora reiciendis nesciunt
            necessitatibus, aspernatur libero voluptatem neque. Aliquid
            consequuntur harum debitis, odio quae voluptatibus cum in minus
            quidem amet sequi officiis consectetur animi vero inventore
            obcaecati perferendis eum pariatur cupiditate vitae.
          </h1>
        </div>
      </div>
      <div
        class="skills w-full bg-bglinegray mb-20 py-16 text-center px-20 dark:bg-textgray"
      >
        <h1 class="text-textdark text-3xl font-semibold mb-10">Skills</h1>
        <div class="skill-container grid grid-cols-4 gap-4">
          <div
            class="skill-card bg-socialcardgray border rounded-lg py-10 px-10 h-36 flex items-center justify-center grayscale hover:grayscale-0 cursor-pointer duration-300"
          >
            <img class="h-full" src="../assets/images/skills/html.png" alt="" />
          </div>
          <div
            class="skill-card bg-socialcardgray border rounded-lg py-10 px-10 h-36 flex items-center justify-center grayscale hover:grayscale-0 cursor-pointer duration-300"
          >
            <img class="h-full" src="../assets/images/skills/css.png" alt="" />
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
            <img class="h-full" src="../assets/images/skills/vue.png" alt="" />
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
            <img class="h-full" src="../assets/images/skills/sass.png" alt="" />
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
    </PageLayout>
  </div>
</template>

<script setup>
import PageLayout from "../layouts/PageLayout.vue";
</script>
