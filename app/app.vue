<script setup lang="ts">
const { public: { siteUrl } } = useRuntimeConfig()
const route = useRoute()

useHead({
  titleTemplate: title => (title ? `${title} · Ramok-net.by` : 'Ramok-net.by — номерные рамки с индивидуальным дизайном'),
  link: [{ rel: 'canonical', href: () => siteUrl + route.path }],
})

useSeoMeta({
  description: 'Индивидуальные номерные рамки для автомобилей с уникальными дизайнами. Выберите готовый дизайн или создайте свой собственный.',
  ogSiteName: 'Ramok-net.by',
  ogType: 'website',
  ogImage: `${siteUrl}/logo.png`,
  ogUrl: () => siteUrl + route.path,
  twitterCard: 'summary',
  twitterImage: `${siteUrl}/logo.png`,
})
</script>

<template>
  <UApp :toaster="{ position: 'top-right' }">
    <NuxtLoadingIndicator color="var(--ui-primary)" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
