<script setup lang="ts">
import type { BreadcrumbItem } from '@nuxt/ui'
import { categories, getCategory, getProductsByCategory, products } from '#shared/catalog'

const props = defineProps<{ category?: string }>()

const current = computed(() => (props.category ? getCategory(props.category) : undefined))
const list = computed(() => (props.category ? getProductsByCategory(props.category) : products))

const search = ref('')
const sort = ref<'default' | 'price-asc' | 'price-desc'>('default')
const sortOptions = [
  { label: 'По умолчанию', value: 'default' },
  { label: 'Сначала дешевле', value: 'price-asc' },
  { label: 'Сначала дороже', value: 'price-desc' },
]

const filtered = computed(() => {
  const q = search.value.trim().toLowerCase()
  const result = q ? list.value.filter(p => p.title.toLowerCase().includes(q)) : [...list.value]
  if (sort.value === 'price-asc') result.sort((a, b) => a.price - b.price)
  if (sort.value === 'price-desc') result.sort((a, b) => b.price - a.price)
  return result
})

const filters = computed(() => [
  { label: 'Все', to: '/products', active: !props.category },
  ...categories.map(c => ({ label: c.name, to: `/products/${c.slug}`, active: c.slug === props.category })),
])

const breadcrumbs = computed<BreadcrumbItem[]>(() => [
  { label: 'Главная', icon: 'i-lucide-house', to: '/' },
  { label: 'Каталог', to: current.value ? '/products' : undefined },
  ...(current.value ? [{ label: current.value.name }] : []),
])
</script>

<template>
  <UContainer class="py-8 sm:py-12">
    <UBreadcrumb :items="breadcrumbs" class="mb-6" />

    <div class="mb-8">
      <h1 class="font-display text-3xl font-bold tracking-tight text-highlighted sm:text-4xl">
        {{ current?.name ?? 'Каталог' }}
      </h1>
      <p class="mt-3 max-w-2xl text-muted">
        {{ current ? current.description : 'Всё, что нужно для стильного оформления вашего автомобиля. Цена указана за комплект из двух рамок.' }}
      </p>
    </div>

    <div class="sticky top-(--ui-header-height) z-10 -mx-4 mb-8 flex flex-col gap-3 border-b border-default bg-default/80 px-4 py-3 backdrop-blur sm:mx-0 sm:rounded-xl sm:border sm:px-3 lg:flex-row lg:items-center lg:justify-between">
      <nav class="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 lg:pb-0" aria-label="Категории">
        <UButton
          v-for="f in filters"
          :key="f.to"
          :to="f.to"
          :label="f.label"
          size="sm"
          :color="f.active ? 'primary' : 'neutral'"
          :variant="f.active ? 'solid' : 'subtle'"
          class="shrink-0 rounded-full"
        />
      </nav>
      <div class="flex gap-2">
        <UInput v-model="search" icon="i-lucide-search" placeholder="Поиск по названию" size="sm" class="flex-1 lg:w-56" />
        <USelect v-model="sort" :items="sortOptions" size="sm" class="w-44" />
      </div>
    </div>

    <div v-if="filtered.length" class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <ProductCard v-for="p in filtered" :key="p.id" :product="p" :show-category="!category" />
    </div>
    <UEmpty
      v-else
      icon="i-lucide-search-x"
      title="Ничего не найдено"
      description="Попробуйте изменить запрос — или закажите собственный дизайн."
      :actions="[{ label: 'Сбросить поиск', color: 'neutral', variant: 'subtle', onClick: () => { search = '' } }, { label: 'Свой дизайн', to: '/#callback' }]"
    />

    <CallbackSection class="mt-20" />
  </UContainer>
</template>
