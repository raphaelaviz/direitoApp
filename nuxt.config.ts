// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {
    '/lawsuits': {ssr: true},
    '/dashboard': {prerender:true},
  },
  runtimeConfig: {
    public: {
      API_ENDPOINT: process.env.API_ENDPOINT
    }
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss', 
    "@nuxt/image", 
    "@nuxt/test-utils/module",
    '@nuxtjs/color-mode'
  ],
  colorMode: {
    classSuffix: ''
  },
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