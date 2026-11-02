<script setup lang="ts">
import { getCategory, type Product } from '#shared/catalog'

const props = defineProps<{ product: Product, showCategory?: boolean }>()

const to = computed(() => `/products/${props.product.category}/${props.product.id}`)
const categoryName = computed(() => getCategory(props.product.category)?.name)
</script>

<template>
  <article class="group flex flex-col overflow-hidden rounded-xl border border-default bg-elevated/50 transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
    <NuxtLink :to="to" class="relative block aspect-[16/9] overflow-hidden bg-neutral-900">
      <NuxtImg
        :src="product.image"
        :alt="product.title"
        width="640"
        height="360"
        format="webp"
        densities="x1 x2"
        loading="lazy"
        class="size-full object-cover transition duration-500 group-hover:scale-105"
      />
    </NuxtLink>

    <div class="flex flex-1 flex-col gap-4 p-4">
      <div class="min-w-0">
        <p v-if="showCategory" class="mb-1 text-xs font-medium uppercase tracking-wider text-dimmed">{{ categoryName }}</p>
        <NuxtLink :to="to" class="line-clamp-1 font-semibold text-highlighted transition-colors hover:text-primary">
          {{ product.title }}
        </NuxtLink>
      </div>

      <div class="mt-auto flex items-center justify-between gap-3">
        <p class="text-lg font-bold text-highlighted">
          {{ product.price }} <span class="text-sm font-medium text-muted">BYN</span>
        </p>
        <AddToCartButton :product="product" size="sm" />
      </div>
    </div>
  </article>
</template>
