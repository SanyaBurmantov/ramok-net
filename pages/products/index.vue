<template>
    <div class="breadcrumb"><UBreadcrumb :links="links" /></div>

  <p class="mt-2">Добро пожаловать в наш каталог! 🌟 </p>

  <p class="mt-2 mb-3">Здесь вы найдете всё, что нужно для стильного оформления вашего автомобиля. 🚗✨ </p>

    <SectionsSectionCatalog />
    <div>
        <div class="products-list mb-10">
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

    productStore.getAllProducts();

    useHead({
      title: `Ramok-net.by`,
      meta: [
        { name: 'description', content: 'Кастомные номерные рамки для вашего авто'}
      ]
    })

  const links = [{
    label: 'Главная',
    icon: 'i-heroicons-home',
    to: '/'
  }, {
    label: 'Каталог',
    icon: 'i-heroicons-folder-open'
  }]
  </script>
  
  <style scoped>
  .breadcrumb{
    padding: 10px;
  }
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