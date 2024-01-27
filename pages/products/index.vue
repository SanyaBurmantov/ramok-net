<template>
    <SectionsSectionCatalog />
    <div>
        <div class="grid grid-cols-3 gap-5">
            <div class="" v-for="p in products">
            <ProductCard :product="p" />
            </div>
        </div>
    </div>
  </template>
  
  <script setup>
  import SectionsSectionCatalog from "~/components/sections/section-catalog.vue";
  import {useProductStore} from '@/stores/productStore.js'
    definePageMeta({
      layout: 'default'
    })
    
    
    const route = useRoute()
    const productStore = useProductStore()
    const products = productStore.all
  
   
  
    useHead({
      title: 'Nuxt Dojo | Merch',
      meta: [
        { name: 'description', content: 'Nuxt 3 hello'}
      ]
    })
  </script>
  
  <style scoped>
  </style>