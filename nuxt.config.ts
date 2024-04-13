// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      API_ENDPOINT: process.env.API_ENDPOINT
    }
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', "@nuxt/image",],
  components: [
    {
      path: '~/components/ui',
      extensions: ['.vue'],
      prefix: ''
    },
    {
      path: '~/components',
      extensions: ['.vue'],
      prefix: ''
    },
  ],
})