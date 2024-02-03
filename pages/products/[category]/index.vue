<template>
  <div class="breadcrumb"><UBreadcrumb class="flex-wrap" :links="links" /></div>

  <p class="mt-2">Добро пожаловать в каталог:  {{getNameOfStore(categoryName)}}! 🌟 </p>

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
  import {useRouterStore} from "~/stores/routerStore.js";


  const routerStore = useRouterStore()
  const categoryName = useRoute().params.category.toString()
  routerStore.setCategory(categoryName)

  const productStore = useProductStore()
  const products = productStore[categoryName]
  const categoriesStore = useCategoriesStore().categories

  function getNameOfStore(category){
    let breadcrumbName = ""
    categoriesStore.forEach(el => {
      if(el.type === category){
        if(el.type === "all"){
          const productStore = useProductStore()
          productStore.getAllProducts();
        }
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

  useHead({
    title: `Ramok-net.by | ${getNameOfStore(categoryName)}`,
    meta: [
      { name: 'description', content: `${getNameOfStore(categoryName)}` }
    ]
  })

  definePageMeta({
    layout: 'default'
  })
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
      display: block;
      margin-bottom: 5px;
    }
  }
</style>