<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div class="" v-for="p in products">
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'default'
  })

  const { data: products } =await useFetch('https://fakestoreapi.com/products')

  useHead({
    title: 'Nuxt Dojo | Merch',
    meta: [
      { name: 'description', content: 'Nuxt 3 hello'}
    ]
  })
</script>

<style scoped>
</style>