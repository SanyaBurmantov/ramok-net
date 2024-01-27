<template>
  <div>
    <p>{{categoryName}}</p>
    <div class="products-list">
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
  .products-list{
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(3, 1fr);
    @media (max-width: 1000px) {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 7px;
    }
    @media (max-width: 640px) {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 15px;
    }
  }
</style>