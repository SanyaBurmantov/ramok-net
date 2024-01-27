<template>
  <UForm :state="state" @submit="onSubmit">
    <UFormGroup class="mb-2" label="Ваше имя">
      <UInput placeholder="Иван" v-model="state.name" icon="i-heroicons-face-smile" />
    </UFormGroup>
    <UFormGroup class="mb-2"  v-slot="{ error }" label="Номер телефона" :error="!validatePhoneNumber(phone) && 'Введите номер телефона в формате +375xx xxx xx xx'">
      <UInput v-model="state.phone" icon="i-heroicons-phone" type="string" placeholder="Ваш номер телефона"/>
    </UFormGroup>
    <UFormGroup class="mb-4" label="Ваш комментарий">
      <UInput placeholder="Жду звонка =)" v-model="state.comment" icon="i-heroicons-envelope" />
    </UFormGroup>

    <UButton type="submit">
      Сделать заказ
    </UButton>
  </UForm>
</template>

<script setup>
import {ref} from 'vue'
import {useCartStore} from "~/stores/cartStore.js";

const phone = ref('')
const cartStore = useCartStore()
const state = reactive({
  name: undefined,
  comment: undefined,
  phone: undefined,
  products: cartStore.cart
})
async function onSubmit (event) {
  // Do something with event.data
  console.log(event.data)
}

function validatePhoneNumber(phoneNumber) {
  if(phoneNumber.length) return true
  let strWithoutSpaces = phoneNumber.replace(/ /g, "");
  const pattern = /^\+375\d{9}$/;
  return pattern.test(strWithoutSpaces);
}
</script>