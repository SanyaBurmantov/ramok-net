<template>
  <div class="card text-center">
    <div>
      <img :src="product.image" class="product__image" alt="product">
    </div>
    <div class="info">
      <div class="texts">
        <p class="font-bold text-gray-500 m-2 truncate">{{ product.title }}</p>
        <p class="font-bold text-gray-500 m-2 truncate">Цена: {{ product.price }} BYN</p>
      </div>
      <div class="flex flex-1 gap-2 justify-center buttons">
        <NuxtLink :to="`/products/${category}/${product.id}`">
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
  const route = useRoute()
  const category = (route.params.category) && 'all'

</script>

<style scoped>
.btn-remove{
  background-color: #e24b4b;
}

.product__image{
  border-radius: 10px;
}
.card{
  padding: 1.4em 0.7em ;
  margin-bottom: 15px;
}
</style>