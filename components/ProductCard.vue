<template>
  <div class="card text-center">
    <img :src="product.image" alt="product">
    <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
    <div class="flex gap-2">
      <NuxtLink :to="`/products/${product.category}/${product.id}`" class="grow">
        <p class="btn my-4">О товаре</p>
      </NuxtLink>
      <p v-if="!productInCart()" class="btn my-4 grow" @click="addToCart(product)">В корзину</p>
      <p v-else class="btn my-4 grow btn-remove" @click="removeFromCart(product)">Удалить</p>
    </div>
  </div>
</template>

<script setup>
  import {useCartStore} from "~/stores/cartStore.js";

  const { product } = defineProps(['product'])
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
.btn-remove{
  background-color: #e24b4b;
}
</style>