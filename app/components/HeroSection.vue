<script setup lang="ts">
import { categories, minPrice, products } from '#shared/catalog'

const slides = [
  { src: '/images/mainPage/page1.jpg', alt: 'Номерная рамка M Performance на BMW' },
  { src: '/images/mainPage/page2.jpg', alt: 'Пример номерной рамки Ramok-net' },
  { src: '/images/mainPage/page3.jpg', alt: 'Пример номерной рамки Ramok-net' },
]

const stats = [
  { value: `${Math.floor(products.length / 10) * 10}+`, label: 'готовых дизайнов' },
  { value: String(categories.length), label: 'коллекций' },
  { value: `от ${minPrice} BYN`, label: 'за комплект' },
]
</script>

<template>
  <section class="relative isolate overflow-hidden bg-black">
    <UCarousel
      v-slot="{ item }"
      :items="slides"
      :autoplay="{ delay: 5000 }"
      fade
      loop
      class="absolute inset-0 -z-10"
      :ui="{ viewport: 'h-full', container: 'h-full ms-0', item: 'h-full ps-0' }"
    >
      <NuxtImg
        :src="item.src"
        :alt="item.alt"
        width="1280"
        format="webp"
        densities="x1"
        :preload="item.src === slides[0]!.src"
        class="size-full object-cover object-[70%_center] opacity-80"
      />
    </UCarousel>

    <div class="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/70 to-transparent" />
    <div class="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-(--ui-bg) to-transparent" />

    <UContainer class="flex min-h-[560px] flex-col justify-center py-20 lg:min-h-[640px]">
      <div class="max-w-2xl">
        <UBadge
          label="Номерные рамки с индивидуальным дизайном"
          icon="i-lucide-sparkles"
          variant="subtle"
          size="lg"
          class="mb-6 rounded-full"
        />
        <h1 class="font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          Подарите автомобилю <span class="text-primary">неповторимый</span> стиль
        </h1>
        <p class="mt-6 max-w-xl text-lg text-neutral-300">
          Наши номерные рамки помогут вам выразить свою индивидуальность на дороге. Выберите дизайн из коллекции или создайте свой — мы воплотим любую идею.
        </p>

        <div class="mt-8 flex flex-wrap gap-3">
          <UButton to="/products" size="xl" trailing-icon="i-lucide-arrow-right" label="Выбрать рамку" />
          <UButton
            to="/#callback"
            size="xl"
            color="neutral"
            variant="outline"
            icon="i-lucide-pen-tool"
            label="Свой дизайн"
            class="bg-black/30 text-white ring-white/30 backdrop-blur hover:bg-white/10"
          />
        </div>

        <dl class="mt-12 flex flex-wrap gap-x-10 gap-y-4">
          <div v-for="s in stats" :key="s.label">
            <dt class="sr-only">{{ s.label }}</dt>
            <dd class="font-display text-2xl font-semibold text-white">{{ s.value }}</dd>
            <dd class="text-sm text-neutral-400">{{ s.label }}</dd>
          </div>
        </dl>
      </div>
    </UContainer>
  </section>
</template>
