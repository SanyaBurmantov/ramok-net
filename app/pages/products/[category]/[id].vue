<script setup lang="ts">
import type { BreadcrumbItem } from '@nuxt/ui'
import { getCategory, getProduct, getProductsByCategory } from '#shared/catalog'

const route = useRoute()
const product = getProduct(String(route.params.id))

if (!product) {
  throw createError({ statusCode: 404, statusMessage: 'Товар не найден', fatal: true })
}

// Старые ссылки вида /products/all/123 ведут на каноничный адрес
if (route.params.category !== product.category) {
  await navigateTo(`/products/${product.category}/${product.id}`, { redirectCode: 301, replace: true })
}

const category = getCategory(product.category)!
const isText = product.category === 'texts'
const related = getProductsByCategory(product.category).filter(p => p.id !== product.id).slice(0, 4)

const breadcrumbs: BreadcrumbItem[] = [
  { label: 'Главная', icon: 'i-lucide-house', to: '/' },
  { label: 'Каталог', to: '/products' },
  { label: category.name, to: `/products/${category.slug}` },
  { label: product.title },
]

const notes = [
  { icon: 'i-lucide-package', text: `Цена указана за комплект из 2 ${isText ? 'планок' : 'рамок'}` },
  ...(isText ? [] : [{ icon: 'i-lucide-ratio', text: 'Квадратные, прямоугольные или одна прямоугольная + одна квадратная' }]),
  { icon: 'i-lucide-pen-tool', text: 'Можно доработать дизайн под ваши пожелания' },
]

useSeoMeta({
  title: `${product.title} — ${category.name}`,
  description: `${product.description} Цена ${product.price} BYN за комплект.`,
  ogImage: useRuntimeConfig().public.siteUrl + (product.imageLarge ?? product.image),
})
</script>

<template>
  <UContainer class="py-8 sm:py-12">
    <UBreadcrumb :items="breadcrumbs" class="mb-8" />

    <div class="grid gap-10 lg:grid-cols-2 lg:gap-14">
      <div class="overflow-hidden rounded-2xl border border-default bg-neutral-900">
        <NuxtImg
          :src="product!.imageLarge ?? product!.image"
          :alt="product!.title"
          width="720"
          format="webp"
          densities="x1 x2"
          preload
          class="aspect-video w-full object-cover"
        />
      </div>

      <div class="flex flex-col">
        <NuxtLink :to="`/products/${category.slug}`">
          <UBadge :label="category.name" variant="subtle" class="rounded-full" />
        </NuxtLink>
        <h1 class="mt-4 font-display text-3xl font-bold tracking-tight text-highlighted sm:text-4xl">{{ product!.title }}</h1>
        <p class="mt-4 text-muted">{{ product!.description }}</p>

        <p class="mt-8 font-display text-4xl font-bold text-highlighted">
          {{ product!.price }} <span class="text-xl font-medium text-muted">BYN</span>
        </p>

        <div class="mt-6 flex flex-wrap gap-3">
          <AddToCartButton :product="product!" size="xl" />
          <UButton to="/#callback" size="xl" color="neutral" variant="subtle" icon="i-lucide-message-circle" label="Задать вопрос" />
        </div>

        <ul class="mt-10 space-y-3 border-t border-default pt-6">
          <li v-for="n in notes" :key="n.text" class="flex items-start gap-3 text-sm text-muted">
            <UIcon :name="n.icon" class="mt-0.5 size-5 shrink-0 text-primary" />
            {{ n.text }}
          </li>
        </ul>
      </div>
    </div>

    <section v-if="related.length" class="mt-24">
      <SectionHeading :title="`Ещё из коллекции «${category.name}»`">
        <UButton :to="`/products/${category.slug}`" color="neutral" variant="subtle" trailing-icon="i-lucide-arrow-right" label="Смотреть все" />
      </SectionHeading>
      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <ProductCard v-for="p in related" :key="p.id" :product="p" />
      </div>
    </section>

    <section class="mt-24">
      <SectionHeading title="Другие коллекции" />
      <CategoryGrid />
    </section>
  </UContainer>
</template>
