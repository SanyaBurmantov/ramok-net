<template>
  <div class="breadcrumb"><UBreadcrumb :links="links" /></div>
  <div>
    <div class="products-list mb-10">
      <div class="" v-for="p in products">
        <ProductCard :product="p" />
      </div>
    </div>
    <FormCallback />
  </div>
</template>

<script setup>
import {useCategoriesStore, useProductStore} from '@/stores/productStore.js'
import FormCallback from "~/components/forms/form-callback.vue";
  definePageMeta({
    layout: 'default'
  })
  
  const categoryName = useRoute().params.category.toString()
  const productStore = useProductStore()
  const products = productStore[categoryName]
  const categoriesStore = useCategoriesStore().categories

  useHead({
    title: `Ramok-net.by | ${getNameOfStore(categoryName)}`,
    meta: [
      { name: 'description', content: `${getNameOfStore(categoryName)}` }
    ]
  })

  function getNameOfStore(category){
    let breadcrumbName = ""
    categoriesStore.forEach(el => {
      if(el.type === category){
        breadcrumbName =  el.name
      }
    })
    return breadcrumbName
  }


  const links = [{
    label: 'Главная',
    icon: 'i-heroicons-home',
    to: '/'
  }, {
    label: 'Каталог',
    icon: 'i-heroicons-folder-open',
    to: '/products'
  }, {
    label: getNameOfStore(categoryName),
    icon: 'i-heroicons-square-3-stack-3d'
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