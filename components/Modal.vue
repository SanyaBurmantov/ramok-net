<template>
  <ClientOnly>
  <div>
    <button class="btn" @click="isOpen = true">
      Корзина ({{cartStore.cart.length}})
    </button>

    <UModal v-model="isOpen">
      <div v-if="cartStore.cart.length < 1" class="empty-cart">
        Ваша корзина пуста =(
      </div>

      <div v-else class="p-4">
        В корзине:
        <div class="" v-for="p in cartStore.cart">

          <div class="flex item rounded-md text-sm border">
            <img :src="p.image" class='image rounded-md text-sm border' alt="product">
            <div>
              <p class="font-bold text-gray-500 m-4 truncate">{{ p.title }}</p>
              <p class="font-bold text-gray-500 m-4 truncate">{{ p.price }}</p>
            </div>
            <div
                class="remove"
                @click="removeFromCart(p)"
              >
              <UButton
                  icon="i-heroicons-archive-box-x-mark"
                  size="md"
                  square
                  variant="ghost"
              />
            </div>
          </div>
        </div>

        <div class="mb-4">Общая сумма: {{getCount()}}</div>
        <order-form-callback />
      </div>
    </UModal>
  </div>
  </ClientOnly>
</template>

<script setup>
import {useCartStore} from "~/stores/cartStore.js";
import OrderFormCallback from "~/components/forms/order-form-callback.vue";

const isOpen = ref(false)

const cartStore = useCartStore()

function removeFromCart(product){
  cartStore.removeFromCart(product)
}

function getCount(){
  return cartStore.cart.reduce(
      (accumulator, currentValue) => Number(accumulator) + Number(currentValue.price), 0
  );

}
</script>

<style scoped lang="scss">
.image{
  width: 200px;
}
.item{
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 4px;
  margin: 8px;
  position: relative;
}

.remove{
  position: absolute;
  right: 1px;
  top: 1px;
}

.empty-cart{
  margin: 20px;
  padding: 20px;
}
</style>