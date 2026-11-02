<script setup lang="ts">
import type { BreadcrumbItem } from '@nuxt/ui'
import { categories, minPrice, products } from '#shared/catalog'

useSeoMeta({
  title: 'О нас',
  description: 'Ramok-net.by — номерные рамки с индивидуальным дизайном. Как сделать заказ и что нужно знать.',
})

const breadcrumbs: BreadcrumbItem[] = [
  { label: 'Главная', icon: 'i-lucide-house', to: '/' },
  { label: 'О нас' },
]

const steps = [
  { title: 'Выберите дизайн', description: 'Найдите рамку в каталоге или оставьте заявку на собственный дизайн.' },
  { title: 'Оформите заказ', description: 'Добавьте товары в корзину, укажите имя, телефон и удобный способ связи.' },
  { title: 'Обсудим детали', description: 'Менеджер свяжется с вами в Telegram, Viber или по телефону и уточнит формат рамок.' },
]

const facts = [
  { value: `${products.length}`, label: 'готовых дизайнов в каталоге' },
  { value: `${categories.length}`, label: 'тематических коллекций' },
  { value: `от ${minPrice} BYN`, label: 'за комплект из двух рамок' },
]
</script>

<template>
  <UContainer class="py-8 sm:py-12">
    <UBreadcrumb :items="breadcrumbs" class="mb-8" />

    <div class="grid gap-12 lg:grid-cols-2 lg:items-center">
      <div>
        <p class="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">О нас</p>
        <h1 class="font-display text-3xl font-bold tracking-tight text-highlighted sm:text-5xl">
          Превращаем номерную рамку в часть стиля автомобиля
        </h1>
        <p class="mt-6 text-lg text-muted">
          Ramok-net.by делает номерные рамки с индивидуальным дизайном. Флаг страны, любимый клуб, герой игры, модель вашего авто или собственная надпись — рамка рассказывает о владельце ещё до того, как он выйдет из машины.
        </p>
        <p class="mt-4 text-muted">
          Можно выбрать готовый вариант из коллекций или прийти со своей идеей: мы подготовим дизайн и согласуем его с вами.
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
          <UButton to="/products" size="lg" trailing-icon="i-lucide-arrow-right" label="Перейти в каталог" />
          <UButton to="/#callback" size="lg" color="neutral" variant="subtle" label="Обсудить свой дизайн" />
        </div>
      </div>

      <div class="overflow-hidden rounded-3xl border border-default">
        <NuxtImg src="/images/mainPage/page1.jpg" alt="Номерная рамка Ramok-net на автомобиле" width="1280" format="webp" class="aspect-[4/3] w-full object-cover object-[65%_center]" />
      </div>
    </div>

    <dl class="mt-20 grid gap-4 sm:grid-cols-3">
      <div v-for="f in facts" :key="f.label" class="rounded-2xl border border-default bg-elevated/50 p-6">
        <dd class="font-display text-3xl font-bold text-highlighted">{{ f.value }}</dd>
        <dt class="mt-1 text-sm text-muted">{{ f.label }}</dt>
      </div>
    </dl>

    <section class="mt-24">
      <SectionHeading eyebrow="Как заказать" title="Три простых шага" />
      <ol class="grid gap-4 md:grid-cols-3">
        <li v-for="(s, i) in steps" :key="s.title" class="rounded-2xl border border-default bg-elevated/50 p-6">
          <span class="flex size-10 items-center justify-center rounded-full bg-primary/10 font-display font-semibold text-primary">{{ i + 1 }}</span>
          <h3 class="mt-4 font-semibold text-highlighted">{{ s.title }}</h3>
          <p class="mt-2 text-sm text-muted">{{ s.description }}</p>
        </li>
      </ol>
    </section>

    <CallbackSection class="mt-24" />
  </UContainer>
</template>
