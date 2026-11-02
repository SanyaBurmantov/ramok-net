<script setup lang="ts">
useSeoMeta({
  title: '',
  ogTitle: 'Ramok-net.by — номерные рамки с индивидуальным дизайном',
})

const steps = [
  {
    icon: 'i-lucide-layout-grid',
    title: 'Выберите из коллекции',
    description: 'Флаги, футбольные клубы, игры и фильмы, модели авто, надписи — больше 70 готовых дизайнов.',
  },
  {
    icon: 'i-lucide-pen-tool',
    title: 'Или создайте свой',
    description: 'Расскажите идею — текст, логотип, цвета — и мы сделаем уникальную рамку, которой нет ни у кого.',
  },
  {
    icon: 'i-lucide-ratio',
    title: 'Любой формат',
    description: 'Квадратные или прямоугольные рамки — а можно одну прямоугольную и одну квадратную.',
  },
]
</script>

<template>
  <div>
    <HeroSection />

    <UContainer class="space-y-24 py-16 sm:py-24">
      <section>
        <SectionHeading eyebrow="Как это работает" title="В Ramok-net.by у вас есть выбор" />
        <div class="grid gap-4 md:grid-cols-3">
          <UPageCard
            v-for="s in steps"
            :key="s.title"
            :icon="s.icon"
            :title="s.title"
            :description="s.description"
            variant="subtle"
            spotlight
            spotlight-color="primary"
          />
        </div>
      </section>

      <section>
        <SectionHeading eyebrow="Каталог" title="Коллекции рамок" description="Уникальные дизайны и высокое качество — создайте свой стиль.">
          <UButton to="/products" color="neutral" variant="subtle" trailing-icon="i-lucide-arrow-right" label="Весь каталог" />
        </SectionHeading>
        <CategoryGrid />
      </section>

      <section>
        <SectionHeading
          eyebrow="Наши работы"
          title="Каждая рамка уникальна, как и её владелец"
          description="Посмотрите, как наши дизайны выглядят на автомобилях клиентов."
        />
        <ExamplesGallery />
      </section>

      <CallbackSection />
    </UContainer>
  </div>
</template>
