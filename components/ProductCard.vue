<template>
  <div class="card text-center">
    <img :src="product.image" alt="product">
    <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
    <div class="flex flex-1 gap-2 justify-center">
      <NuxtLink :to="`/products/${product.category}/${product.id}`">
        <UButton
            icon="i-heroicons-magnifying-glass"
            size="md"
            color="green"
            variant="solid"
            label="Подробнее"
            :trailing="false"
        />
      </NuxtLink>
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