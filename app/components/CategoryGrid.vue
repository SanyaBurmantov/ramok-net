<script setup lang="ts">
import { categories, getProductsByCategory, products } from '#shared/catalog'

const items = categories.map(c => ({ ...c, count: getProductsByCategory(c.slug).length }))

const plural = (n: number) => {
  const mod10 = n % 10
  const mod100 = n % 100
  if (mod10 === 1 && mod100 !== 11) return 'дизайн'
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return 'дизайна'
  return 'дизайнов'
}
</script>

<template>
  <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    <NuxtLink
      v-for="c in items"
      :key="c.slug"
      :to="`/products/${c.slug}`"
      class="group relative flex flex-col overflow-hidden rounded-2xl border border-default bg-elevated/50 p-6 transition hover:border-primary/40"
    >
      <div class="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity group-hover:opacity-100" />
      <div class="flex items-start justify-between gap-4">
        <div>
          <h3 class="font-display text-lg font-semibold text-highlighted">{{ c.name }}</h3>
          <p class="mt-1 text-sm text-muted">{{ c.description }}</p>
        </div>
        <UBadge :label="`${c.count} ${plural(c.count)}`" color="neutral" variant="subtle" class="shrink-0" />
      </div>
      <NuxtImg
        :src="c.image"
        :alt="c.name"
        width="560"
        format="webp"
        densities="x1 x2"
        loading="lazy"
        class="mt-6 h-36 w-full object-contain transition duration-500 group-hover:scale-[1.03] sm:h-40"
      />
    </NuxtLink>

    <NuxtLink
      to="/products"
      class="group flex flex-col justify-between gap-6 rounded-2xl bg-primary p-6 text-white transition hover:brightness-110"
    >
      <UIcon name="i-lucide-layout-grid" class="size-8" />
      <div>
        <h3 class="font-display text-lg font-semibold">Весь каталог</h3>
        <p class="mt-1 text-sm text-white/80">{{ products.length }} дизайнов в одном месте</p>
      </div>
      <span class="inline-flex items-center gap-1 text-sm font-medium">
        Смотреть все
        <UIcon name="i-lucide-arrow-right" class="size-4 transition-transform group-hover:translate-x-1" />
      </span>
    </NuxtLink>
  </div>
</template>
