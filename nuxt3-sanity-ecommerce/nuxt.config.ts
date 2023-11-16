// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  modules: ['@nuxtjs/sanity', [
    "@nuxtjs/google-fonts",
    {
      families: {
        "IBM Plex Mono": [500, 700],
        Inter: [500, 700, 800],
        "PT Serif": [400, 700],
        download: true,
        inject: true,
      },
    },
  ], "@nuxt/ui"],
  // ssr: false,
  sanity: {
    projectId: process.env.NUXT_ENV_SANITY_PROJECT_ID,
    dataset: process.env.NUXT_ENV_SANITY_DATASET,
  }
})
