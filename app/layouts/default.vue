<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const nav: NavigationMenuItem[] = [
  { label: 'Главная', to: '/' },
  { label: 'Каталог', to: '/products' },
  { label: 'О нас', to: '/about' },
]
</script>

<template>
  <div class="flex min-h-dvh flex-col">
    <UHeader :ui="{ root: 'bg-default/70' }">
      <template #title>
        <img src="/logo.png" alt="" width="36" height="36" class="size-9 rounded-full ring-1 ring-default">
        <span class="font-display text-base font-semibold tracking-tight">ramok-net<span class="text-primary">.by</span></span>
      </template>

      <UNavigationMenu :items="nav" variant="link" />

      <template #right>
        <UColorModeButton />
        <CartButton />
      </template>

      <template #body>
        <UNavigationMenu :items="nav" orientation="vertical" class="-mx-2.5" />
      </template>
    </UHeader>

    <UMain class="flex-1">
      <slot />
    </UMain>

    <AppFooter :nav="nav" />
    <CartSlideover />
  </div>
</template>
