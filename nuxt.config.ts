// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-swiper'
  ],
  css: ['~/assets/scss/main.scss'],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  swiper: {
    prefix: 'Swiper',
    styleLang: 'scss',
    modules: ['navigation', 'pagination'],
  },
  app: {
    head: {
      title: 'Ramok-net.by',
      meta: [
        { name: 'description', content: 'Hello'}
      ],
      link: [
        { rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
      ]
    }
  },
  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY
  }
})
