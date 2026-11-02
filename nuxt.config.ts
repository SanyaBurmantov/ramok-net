// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-11-01',

  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    'nuxt-gtag',
  ],

  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'ru' },
      link: [{ rel: 'icon', href: '/favicon.ico' }],
      meta: [{ name: 'theme-color', content: '#09090b' }],
    },
  },

  colorMode: {
    preference: 'dark',
    fallback: 'dark',
  },

  fonts: {
    defaults: {
      weights: [400, 500, 600, 700, 800],
      subsets: ['latin', 'cyrillic'],
    },
  },

  image: {
    quality: 80,
    format: ['webp'],
  },

  runtimeConfig: {
    // Задаются через переменные окружения NUXT_TELEGRAM_BOT_TOKEN / NUXT_TELEGRAM_CHAT_IDS
    telegramBotToken: '',
    telegramChatIds: '408745156,809871443,573341013',
    public: {
      siteUrl: 'https://ramok-net.by',
      yandexMetrikaId: '96387730',
      metaPixelId: '1680246355716973',
    },
  },

  routeRules: {
    '/products/all': { redirect: { to: '/products', statusCode: 301 } },
  },

  gtag: {
    id: 'G-ZF7DQTR1V6',
  },

  $development: {
    gtag: { enabled: false },
  },

  piniaPluginPersistedstate: {
    storage: 'cookies',
    cookieOptions: { sameSite: 'lax', maxAge: 60 * 60 * 24 * 30 },
  },
})
