<template>
  <div class="breadcrumb"><UBreadcrumb :links="links" /></div>
  <div class="card">
    <div class="grid grid-cols-2 gap-10">
      <div class="p-7">
        <img :src="product.image" alt="product img" class="mx-auto my-7">
      </div>
      <div class="p-7">
        <h2 class="text-4xl my-7">{{ product.title }}</h2>
        <p class="text-xl my-7">Price - {{ product.price }} </p>
        <h3 class="font-bold border-b-2 mb-4 pb-2">Product description:</h3>
        <p class="mb-7">{{ product.description }}</p>
        <button class="btn flex">
          <i class="material-icons mr-2">add_shopping_cart</i>
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {useCategoriesStore} from "~/stores/productStore.js";
  const categoriesStore = useCategoriesStore().categories
  const { product } = defineProps(['product'])
  const links = [{
    label: 'Главная',
    icon: 'i-heroicons-home',
    to: '/'
  }, {
    label: 'Каталог',
    icon: 'i-heroicons-folder-open',
    to: '/products'
  }, {
    label: getNameOfStore(product.category),
    icon: 'i-heroicons-square-3-stack-3d',
    to: `/products/${product.category}`
  },{
    label: product.title,
  }]


  function getNameOfStore(category){
    let breadcrumbName = ""
    categoriesStore.forEach(el => {
      if(el.type === category){
        console.log(el.type)
        breadcrumbName =  el.name
      }
    })
    return breadcrumbName
  }
</script>

<style scoped>
.breadcrumb{
  padding: 10px;
}
  img {
    max-width: 400px;
  }
</style>