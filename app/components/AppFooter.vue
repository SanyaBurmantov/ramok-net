<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { categories } from '#shared/catalog'

defineProps<{ nav: NavigationMenuItem[] }>()

const year = new Date().getFullYear()
</script>

<template>
  <footer class="mt-24 border-t border-default bg-muted/40">
    <UContainer class="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
      <div class="space-y-3 lg:col-span-2">
        <NuxtLink to="/" class="flex items-center gap-2">
          <img src="/logo.png" alt="" width="40" height="40" class="size-10 rounded-full">
          <span class="font-display font-semibold">ramok-net<span class="text-primary">.by</span></span>
        </NuxtLink>
        <p class="max-w-sm text-sm text-muted">
          Номерные рамки с индивидуальным дизайном. Выберите готовый вариант из каталога или расскажите нам свою идею.
        </p>
      </div>

      <div>
        <p class="mb-3 text-sm font-semibold">Каталог</p>
        <ul class="space-y-2 text-sm text-muted">
          <li v-for="c in categories" :key="c.slug">
            <NuxtLink :to="`/products/${c.slug}`" class="transition-colors hover:text-highlighted">{{ c.name }}</NuxtLink>
          </li>
        </ul>
      </div>

      <div>
        <p class="mb-3 text-sm font-semibold">Сайт</p>
        <ul class="space-y-2 text-sm text-muted">
          <li v-for="item in nav" :key="String(item.to)">
            <NuxtLink :to="item.to" class="transition-colors hover:text-highlighted">{{ item.label }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/#callback" class="transition-colors hover:text-highlighted">Обратная связь</NuxtLink>
          </li>
        </ul>
      </div>
    </UContainer>

    <UContainer class="flex flex-col items-center justify-between gap-3 border-t border-default py-6 text-xs text-dimmed sm:flex-row">
      <p>© {{ year }} Ramok-net.by</p>
      <a href="https://webmaster.yandex.ru/siteinfo/?site=ramok-net.by" target="_blank" rel="noopener">
        <img width="88" height="31" alt="Яндекс.Вебмастер" src="https://yandex.ru/cycounter?ramok-net.by&theme=dark&lang=ru" loading="lazy">
      </a>
    </UContainer>
  </footer>
</template>
