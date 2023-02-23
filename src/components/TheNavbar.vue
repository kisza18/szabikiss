<template>
  <div :class="{ scrolled: !scroll }" class="navbar w-full fixed z-20 px-10">
    <GlobalLayout>
      <div class="nav-container flex items-center justify-between">
        <div class="nav-logo w-1/4 h-full flex items-center justify-start">
          <router-link
            to="/"
            class="brand pl-2 pr-3 pb-1 text-2xl text-textdark font-semibold border-b-2 border-l-2 border-textdark dark:text-textlight dark:border-textgray"
          >
            Szabi
          </router-link>
        </div>
        <div
          class="nav-links-container hidden w-2/4 h-full sm:flex items-center justify-center"
        >
          <div class="nav-links text-textdark dark:text-textlight">
            <router-link
              class="link text-lg px-2 md:px-5 hover:text-deepblue duration-300"
              to="/projects"
              >Projects</router-link
            >
            <router-link
              class="link text-lg px-2 md:px-5 hover:text-deepblue duration-300"
              to="/about"
              >About Me</router-link
            >
            <router-link
              class="link text-lg px-2 md:px-5 hover:text-deepblue duration-300"
              to="/contact"
              >Contact</router-link
            >
          </div>
        </div>
        <div class="nav-right w-1/4 h-full flex items-center justify-end">
          <div class="follow-button-container hidden lg:flex">
            <button
              @click="scrollDown"
              :class="{ scrolled_button: !scroll }"
              class="follow-button text-textdark bg-textlight hover:bg-gray-200 py-2 px-4 rounded-lg mx-5 shadow-lg duration-300"
            >
              Follow Me
            </button>
          </div>
          <div class="dark-button-container flex items-center">
            <button @click="toggleDarkMode" class="dark-button w-5">
              <img
                v-show="!darkMode"
                src="../assets/images/moon-icon.png"
                alt=""
              />
              <img
                v-show="darkMode"
                src="../assets/images/sun-icon.png"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </GlobalLayout>
  </div>
</template>

<script setup>
import GlobalLayout from "../layouts/GlobalLayout.vue";
import { ref, onMounted } from "vue";

let darkMode = ref(false);
const scroll = ref(true);

function toggleDarkMode() {
  darkMode.value = !darkMode.value;
  let html = document.querySelector("#htmlMain");
  if (darkMode.value) {
    html.className = "dark";
  } else html.className = "";
}

function handleScroll() {
  if (window.pageYOffset > 30) {
    scroll.value = false;
  } else {
    scroll.value = true;
  }
}

function scrollDown() {
  window.scrollTo({
    left: 0,
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
</script>
<style>
.link.router-link-active {
  color: theme("colors.deepblue");
}
.brand {
  font-family: "Pacifico", cursive;
}
.navbar {
  height: 100px;
  padding-top: 30px;
  transition: 0.3s ease-in-out;
}
.navbar.scrolled {
  background: white;
  height: 80px;
  padding-top: 20px;
  transition: 0.3s ease-in-out;
  box-shadow: 0px 1px 10px gray;
}
.follow-button.scrolled_button {
  background: theme("colors.buttonblue");
  color: white;
}
.follow-button.scrolled_button:hover {
  color: theme("colors.textdark");
}
#htmlMain.dark {
  background: theme("colors.textdark");
}
#htmlMain.dark div.navbar.scrolled {
  background: theme("colors.textdark");
  box-shadow: 0px 1px 10px black;
}
</style>
