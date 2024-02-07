<template>
  <div>
    <ClientOnly>
    <div class="btn button_block" @click="isOpen = true">
      <div class="btn__wrapper">
        <UButton
            class="picture btn-empty"
            icon="i-heroicons-shopping-cart"
            size="md"
            square
            variant="outlined"
        />
      </div>
      <span class="text">Корзина</span>({{cartStore.cart.length}})
    </div>
    </ClientOnly>
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

.picture{
  display: none;
  @media (max-width: 1000px){
    display: block;
    padding: 0;
    margin-right: 8px;
  }
}

.text{
  display: block;
  @media (max-width: 1000px){
    display: none;
  }
}
.button_block{
  border-radius: 0.375rem;
  border-width: 1px;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 0.875rem;
  display: flex;

}

.btn__wrapper{
  position: relative;
}
</style>