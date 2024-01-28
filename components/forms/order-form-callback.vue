<template>
  <UForm :state="state" @submit="onSubmit">
    <UFormGroup class="mb-2" label="Ваше имя">
      <UInput placeholder="Иван" v-model="state.name" icon="i-heroicons-face-smile" />
    </UFormGroup>
    <UFormGroup class="mb-2" label="Номер телефона">
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
  await sendToSubscribers(event.data)
  alertStore.showAlert(`Спасибо за заказ, ${state.name}, наш менеджер свяжется с Вами!`, 5000)
  cartStore.cart = []
}


async function sendToSubscribers(data) {
  if(!data) return
  let token = "6619858114:AAHDaC0QVvueqSQMwlol7rkit-vw6qTHufQ"
  let users = ["408745156", "809871443"]

  let { name, comment, phone, products, finalPrice } = data
  let strMatrix = "";
  let posValue = products.length;

  products.forEach(el => {
    strMatrix += "%0A %09" + el.title.toString();
    strMatrix += "%0A %09" + el.category.toString();
    strMatrix += "%0A %09Цена " + el.price.toString() + "BYN%0A";
  })

  let message = `Клиент: ${name}%0AНомер телефона ${phone} %0AКоммент покупателя ${comment}%0AТовары: ${strMatrix}%0AИтоговая цена: ${finalPrice.toString()}BYN`;

  let api = new XMLHttpRequest();
  users.forEach(el => {
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${el}&text=${message}&parse_mode=html`
    api.open("GET", url, true);
    api.send();
  })
}

function validatePhoneNumber(phoneNumber) {
  if(!phoneNumber) return
  let strWithoutSpaces = phoneNumber.replace(/ /g, "");
  const pattern = /^\+375\d{9}$/;
  return pattern.test(strWithoutSpaces);
}
</script>