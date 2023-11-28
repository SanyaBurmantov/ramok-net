// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  css: ['~/assets/scss/main.scss'],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  app: {
    head: {
      title: 'Products =)',
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
