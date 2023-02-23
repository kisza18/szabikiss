<template>
  <div id="contact-page">
    <PageLayout>
      <GlobalLayout>
        <div
          class="about-container pt-32 md:pt-40 flex flex-col md:flex-row items-start justify-between px-5 md:px-10 lg:px-20 gap-10"
        >
          <div
            class="contact-form w-full md:w-1/2 dark:bg-projectcard rounded-lg"
          >
            <div class="form shadow-xl w-full p-5 md:p-10 dark:text-textlight">
              <h1
                class="text-xl font-semibold text-textdark mb-8 dark:text-textlight"
              >
                Contact Form
              </h1>
              <form
                action="https://formsubmit.co/szabolcs17@gmail.com"
                method="POST"
              >
                <div class="fullname flex flex-col">
                  <label for="fullname">Full name</label>
                  <input type="text" name="fullname" placeholder="Full name" />
                </div>
                <div class="email flex flex-col">
                  <label for="email">Email</label>
                  <input type="email" name="email" placeholder="Email" />
                </div>
                <div class="subject flex flex-col">
                  <label for="subject">Subject</label>
                  <input type="text" name="subject" placeholder="Subject" />
                </div>
                <div class="message flex flex-col">
                  <label for="message">Message</label>
                  <textarea
                    type="text"
                    name="message"
                    placeholder="Message"
                    rows="6"
                  ></textarea>
                  <button
                    class="w-48 text-lg text-textlight bg-buttonblue py-2 px-3 rounded-lg shafow-lg hover:shadow-xl duration-300 hover:text-textdark"
                    click="submit"
                  >
                    Send Message
                  </button>
                  <input
                    type="hidden"
                    name="_next"
                    value="http://localhost:5173/"
                  />
                  <input type="hidden" name="_captcha" value="false" />
                </div>
              </form>
            </div>
          </div>
          <div
            class="contact-details w-full md:w-1/2 pt-10 flex flex-col items-center md:items-start"
          >
            <h1
              class="text-xl font-semibold text-textdark mb-8 dark:text-textlight"
            >
              Contact details
            </h1>
            <div class="flex items-center mb-3">
              <img
                class="h-5 mr-3"
                src="../assets/images/map-icon.png"
                alt=""
              />
              <p class="text-textdark dark:text-textlight">Hungary, Budapest</p>
            </div>
            <div class="flex items-center">
              <img
                class="h-5 mr-3"
                src="../assets/images/email-icon.png"
                alt=""
              />

              <p class="text-textdark dark:text-textlight">
                szabolcs17@gmail.com
              </p>
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

<style scoped>
input,
textarea {
  background-color: theme("colors.textlight");
  border-radius: 5px;
  font-size: 15px;
  padding: 12px 15px;
  border: 1px solid #ccc;
  margin-bottom: 25px;
  margin-top: 5px;
}
</style>
