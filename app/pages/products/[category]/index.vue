<script setup lang="ts">
import { getCategory } from '#shared/catalog'

const route = useRoute()
const category = getCategory(String(route.params.category))

if (!category) {
  throw createError({ statusCode: 404, statusMessage: 'Категория не найдена', fatal: true })
}

useSeoMeta({
  title: `${category.name} — номерные рамки`,
  description: `${category.description}. Номерные рамки с индивидуальным дизайном от Ramok-net.by.`,
})
</script>

<template>
  <CatalogView :category="category!.slug" />
</template>
