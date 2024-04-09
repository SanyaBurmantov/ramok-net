<template>
  <UForm :state="state" @submit="onSubmit">
    <UFormGroup class="mb-2" label="Ваше имя">
      <UInput placeholder="Иван" v-model="state.name" icon="i-heroicons-face-smile" />
    </UFormGroup>
    <UFormGroup class="mb-2" label="Номер телефона">
      <UInput v-model="state.phone" icon="i-heroicons-phone" type="string" placeholder="Ваш номер телефона"/>
    </UFormGroup>
    <UFormGroup class="mb-4" label="Укажите предпочтительный способ связи (Telegram, Viber, звонок по мобильному)">
      <UInput placeholder="Свяжитесь со мной по ... " v-model="state.comment" icon="i-heroicons-envelope" />
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
import axios from "axios";

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
  if (!data) return;

  const token = "6619858114:AAHDaC0QVvueqSQMwlol7rkit-vw6qTHufQ";
  const users = ["408745156", "809871443", "573341013"];
  const { name, comment, phone, products, finalPrice } = data;

  const strMatrix = products.map(el => {
    return `%0A%09${el.title}%0A%09${el.category}%0A%09Цена ${el.price}BYN%0A`;
  }).join('');

  const message = `Клиент: ${name}%0AНомер телефона ${phone}%0AКоммент покупателя ${comment}%0AТовары: ${strMatrix}%0AИтоговая цена: ${finalPrice}BYN`;

  try {
    for (let el of users) {
      const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${el}&text=${message}&parse_mode=html`;
      await axios.get(url);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Ждем 1 секунду перед отправкой следующего запроса
    }
  } catch (error) {
    console.error("Ошибка при отправке сообщений:", error);
  }
}

function validatePhoneNumber(phoneNumber) {
  if(!phoneNumber) return
  let strWithoutSpaces = phoneNumber.replace(/ /g, "");
  const pattern = /^\+375\d{9}$/;
  return pattern.test(strWithoutSpaces);
}
</script>