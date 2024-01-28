// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    'nuxt-swiper',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxt/ui',
    'nuxt-lazy-load'
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
  },
  lazyLoad: {
    // These are the default values
    images: true,
    videos: true,
    audios: true,
    iframes: true,
    native: false,
    directiveOnly: false,

    // Default image must be in the public folder


    // To remove class set value to false
    loadingClass: 'isLoading',
    loadedClass: 'isLoaded',
    appendClass: 'lazyLoad',

    observerConfig: {
      // See IntersectionObserver documentation
    }
  }
})
