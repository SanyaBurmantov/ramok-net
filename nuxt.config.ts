// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    'nuxt-swiper',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxt/ui',
    'nuxt-lazy-load',
    'yandex-metrika-module-nuxt3',
    'nuxt-gtag',
    'nuxt3-meta-pixel',
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
        { name: 'description', content: 'Индивидуальные номерные рамки для автомобилей с уникальными дизайнами. Выберите готовый дизайн или создайте свой собственный. Качественные номерные рамки для стильного оформления вашего авто.'},
        { name: 'og:title', property: 'og:title', content: 'Ramok-Net.by' },
        { name: 'og:description', property: 'og:description', content: 'Индивидуальные номерные рамки для автомобилей с уникальными дизайнами.' },
        { name: 'og:image', property: 'og:image', content: '/logo.png' },
        { name: 'og:url', property: 'og:url', content: 'https://ramok-net.by' },  // Замените на фактический URL вашего сайта
        { name: 'twitter:card', content: '/logo.png' },
        { name: 'twitter:title', content: 'Ramok-Net.by' },
        { name: 'twitter:description', content: 'Индивидуальные номерные рамки для автомобилей с уникальными дизайнами.' },
        { name: 'twitter:image', content: '/logo.png' }
      ],

      link: [
        { rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
      ]
    }
  },
  yandexMetrika: {
    id: '96387730',
  },
  gtag: {
    id: 'G-ZF7DQTR1V6'
  },
  lazyLoad: {
    images: true,
    videos: true,
    audios: true,
    iframes: true,
    native: false,
    directiveOnly: false,
    loadingClass: 'isLoading',
    loadedClass: 'isLoaded',
    appendClass: 'lazyLoad',
    observerConfig: {
    }
  },
  facebook: {
    /* module options */
    track: 'PageView',
    pixelId: '1680246355716973',
    autoPageView: true,
    disabled: false
  },

})
