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
import {sendToSubscribers} from "~/server/api/telegram.js";
import {useAlertStore} from "~/stores/alertStore.js";

const phone = ref('')
const cartStore = useCartStore()
const state = reactive({
  name: undefined,
  comment: undefined,
  phone: undefined,
  products: cartStore.cart,
  finalPrice: cartStore.cart.reduce(
      (accumulator, currentValue) => Number(accumulator) + Number(currentValue.price), 0
  )
})

const alertStore = useAlertStore()
async function onSubmit(event) {
  if(!validatePhoneNumber(event.data.phone)) {
   alertStore.showAlert('Вы не ввели номер/ неправильный номер телефона', 5000)
    return
  }
  sendToSubscribers.sendData(event.data)
  alertStore.showAlert(`Спасибо за заказ, ${state.name}, наш менеджер свяжется с Вами!`, 5000)
  cartStore.cart = []
}

function validatePhoneNumber(phoneNumber) {
  if(!phoneNumber) return
  let strWithoutSpaces = phoneNumber.replace(/ /g, "");
  const pattern = /^\+375\d{9}$/;
  return pattern.test(strWithoutSpaces);
}
</script>