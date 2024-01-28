<template>
  <div class="breadcrumb"><UBreadcrumb :links="links" /></div>
  <div class="card">
    <div class="card__info">
      <div class="p-3">
        <img :src="product.image" alt="product img" class="mx-auto my-7">
      </div>
      <div class="p-7">
        <h2 class="text-4xl my-7">{{ product.title }}</h2>
        <p class="text-xl my-7">Price - {{ product.price }} </p>
        <h3 class="font-bold border-b-2 mb-4 pb-2">Описание:</h3>
        <p class="mb-7">{{ product.description }}</p>
        <ClientOnly>
          <UButton
              v-if="!productInCart()"
              @click="addToCart(product)"
              icon="i-heroicons-archive-box-arrow-down"
              size="md"
              color="green"
              variant="outline"
              label="В корзину"
              :trailing="false"
          />
          <UButton
              v-else
              @click="removeFromCart(product)"
              icon="i-heroicons-archive-box-arrow-down"
              size="md"
              color="red"
              variant="soft"
              label="Удалить"
              :trailing="false"
          />
        </ClientOnly>
      </div>

    </div>
    <div class="mt-20 container">
    <h2 class="text-4xl my-7">Смотрите так же</h2>
    <SectionCatalog />
    </div>
  </div>
</template>

<script setup>
  import {useCategoriesStore} from "~/stores/productStore.js";
  import {useCartStore} from "~/stores/cartStore.js";
  import SectionCatalog from "~/components/sections/section-catalog.vue";
  const categoriesStore = useCategoriesStore().categories
  const { product } = defineProps(['product'])
  const route = useRoute()
  const category = (route.params.category)
  const links = [{
    label: 'Главная',
    icon: 'i-heroicons-home',
    to: '/'
  }, {
    label: 'Каталог',
    icon: 'i-heroicons-folder-open',
    to: '/products'
  }, {
    label: getNameOfStore(category),
    icon: 'i-heroicons-square-3-stack-3d',
    to: `/products/${category}`
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

  const cartStore = useCartStore()
  function addToCart(product) {
    cartStore.addToCart(product)
  }
  function removeFromCart(product){
    cartStore.removeFromCart(product)
  }
  function productInCart(){
    return cartStore.cart.some(item => item.id === product.id);
  }
</script>

<style scoped>
.breadcrumb{
  padding: 10px;
  @media (max-width: 540px) {
    padding:5px 0;
  }
  nav{
    ol{
      flex-wrap: wrap;
    }
  }


}
  img {
    max-width: 400px;
    @media (max-width: 540px) {
      max-width: 200px;
    }
  }
  .card__info{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    @media (max-width: 813px) {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }
</style>