/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        //light mode
        lightblue: "#37CFDC",
        deepblue: "#598DE4",
        textdark: "#1E3851",
        textgray: "#9CA3AF",
        bglinegray: "#F7F8FC",
        socialcardgray: "#F9FAFB",
        button: "#EEF2FF",
        buttonblue: "#4BA9E0",
        //dark mode
        textlight: "#F7F8FC",
        bgdark: "#0D2438",
        projectcard: "#1E3851",
      },
    },
  },
  plugins: [],
};
