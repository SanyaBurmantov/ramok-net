<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <p>{{categoryName}}</p>
      <div class="" v-for="p in products">
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup>
import {useProductStore} from '@/stores/productStore.js'
  definePageMeta({
    layout: 'default'
  })
  
  const categoryName = useRoute().params.category.toString()
  const productStore = useProductStore()
  const products = productStore[categoryName]

 

  useHead({
    title: 'Nuxt Dojo | Merch',
    meta: [
      { name: 'description', content: 'Nuxt 3 hello'}
    ]
  })
</script>

<style scoped>
</style>