// Яндекс Метрика и Meta Pixel. Google Analytics подключается модулем nuxt-gtag.
/* eslint-disable prefer-rest-params */

declare global {
  interface Window {
    ym?: (...args: unknown[]) => void
    fbq?: ((...args: unknown[]) => void) & { callMethod?: (...args: unknown[]) => void, queue?: unknown[], loaded?: boolean, version?: string, push?: unknown }
    _fbq?: unknown
  }
}

function loadScript(src: string) {
  const script = document.createElement('script')
  script.async = true
  script.src = src
  document.head.appendChild(script)
}

export default defineNuxtPlugin(() => {
  if (import.meta.dev) return

  const { yandexMetrikaId, metaPixelId } = useRuntimeConfig().public
  const router = useRouter()

  if (yandexMetrikaId) {
    const ym = function (this: unknown) {
      ;(ym as unknown as { a: unknown[] }).a ||= []
      ;(ym as unknown as { a: unknown[] }).a.push(arguments)
    }
    ;(ym as unknown as { l: number }).l = Date.now()
    window.ym ||= ym
    loadScript('https://mc.yandex.ru/metrika/tag.js')
    window.ym(Number(yandexMetrikaId), 'init', {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true,
    })
  }

  if (metaPixelId && !window.fbq) {
    const fbq: NonNullable<Window['fbq']> = function () {
      if (fbq.callMethod) fbq.callMethod(...arguments)
      else fbq.queue!.push(arguments)
    }
    fbq.push = fbq
    fbq.loaded = true
    fbq.version = '2.0'
    fbq.queue = []
    window.fbq = fbq
    window._fbq ||= fbq
    loadScript('https://connect.facebook.net/en_US/fbevents.js')
    window.fbq('init', metaPixelId)
    window.fbq('track', 'PageView')
  }

  // Учёт переходов внутри SPA (первый просмотр засчитывается при инициализации)
  router.afterEach((to, from) => {
    if (to.fullPath === from.fullPath || !from.name) return
    window.ym?.(Number(yandexMetrikaId), 'hit', to.fullPath, { referer: from.fullPath })
    window.fbq?.('track', 'PageView')
  })
})
