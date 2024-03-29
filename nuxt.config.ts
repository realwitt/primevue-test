// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
  'nuxt-primevue'
  ],
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css',
    'primevue/resources/themes/lara-light-green/theme.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
