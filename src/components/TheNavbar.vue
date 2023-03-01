<template>
  <div
    :class="{ scrolled: !scroll }"
    class="navbar w-full fixed z-20 px-5 md:px-10"
  >
    <GlobalLayout>
      <div class="nav-container flex items-center justify-between 2xl:px-10">
        <div class="nav-logo w-1/4 h-full flex items-center justify-start">
          <router-link
            to="/"
            class="brand pl-2 pr-3 pb-1 text-2xl text-textdark font-semibold border-b-2 border-l-2 border-textdark dark:text-textlight dark:border-textgray"
          >
            Szabi
          </router-link>
        </div>
        <div
          class="nav-links-container hidden w-full lg:w-2/4 h-full sm:flex items-center justify-center"
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
          <div class="nav_bar md:hidden ml-5" @click="toggleNav">
            <div class="bar1 dark:bg-textlight"></div>
            <div class="bar2 dark:bg-textlight"></div>
            <div class="bar3 dark:bg-textlight"></div>
          </div>
        </div>
      </div>
    </GlobalLayout>
  </div>
  <div v-show="toggleMenu" class="navbar_menu h-screen w-screen hide_nav pt-20">
    <div
      class="mobile-nav-links text-textlight flex flex-col items-center justify-center h-full bg-black opacity-80"
    >
      <router-link
        @click="toggleNav"
        class="link text-3xl px-2 md:px-5 mb-10 hover:text-deepblue duration-300"
        to="/projects"
        >Projects</router-link
      >
      <router-link
        @click="toggleNav"
        class="link text-3xl px-2 md:px-5 mb-10 hover:text-deepblue duration-300"
        to="/about"
        >About Me</router-link
      >
      <router-link
        @click="toggleNav"
        class="link text-3xl px-2 md:px-5 mb-32 hover:text-deepblue duration-300"
        to="/contact"
        >Contact</router-link
      >
    </div>
  </div>
</template>

<script setup>
import GlobalLayout from "../layouts/GlobalLayout.vue";
import { ref, onMounted } from "vue";

let darkMode = ref(false);
const scroll = ref(true);
const toggleMenu = ref(false);

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

function toggleNav() {
  const navBar = document.querySelector(".nav_bar");
  const navBarMenu = document.querySelector(".navbar_menu");
  const body = document.body;
  navBarMenu.classList.remove("hidden");
  navBar.classList.toggle("change");
  navBarMenu.classList.toggle("hide_nav");
  toggleMenu.value = !toggleMenu.value;
  window.scrollTo(0, 0);

  body.style.overflow === ""
    ? (body.style.overflow = "hidden")
    : (body.style.overflow = "");
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
  background: theme("colors.bgdark");
}
#htmlMain.dark div.navbar.scrolled {
  background: theme("colors.textdark");
  box-shadow: 0px 1px 10px black;
}
.nav_bar {
  cursor: pointer;
}
.bar1,
.bar2,
.bar3 {
  width: 30px;
  height: 2px;
  background-color: theme("colors.textdark");
  margin: 7px 0;
  transition: 0.4s;
}
.change .bar1 {
  transform: translate(0, 9px) rotate(-45deg);
}
.change .bar2 {
  opacity: 0;
}
.change .bar3 {
  transform: translate(0, -9px) rotate(45deg);
}
</style>
