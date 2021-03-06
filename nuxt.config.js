require("dotenv").config();
const { DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, DB_PASSWORD } = process.env;

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: "Caputure Plus",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Global CSS
   */
  css: ["~/assets/css/tailwind.css"],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  axios: {
    baseURL: process.env.BASE_URL || "http://localhost:3000"
  },
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/tailwindcss"],
  // buildModules: ["@nuxtjs/vuetify", "@nuxtjs/tailwindcss"],
  // vuetify: {
  //   /* module options */
  // },
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/axios"],
  serverMiddleware: ["~/api/index.js"],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  env: {
    DB_HOST,
    DB_PORT,
    DB_USERNAME,
    DB_DATABASE,
    DB_PASSWORD
  }
};
