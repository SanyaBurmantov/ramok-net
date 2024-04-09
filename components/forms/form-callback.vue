<template>
  <div class="dialog bg-[#8881] bg-white">
    <div class="form__text">
      <p>Не уверены, какой дизайн выбрать? Мы готовы помочь!</p>
      <p class="mb-2">Оставьте нам свой номер телефона  и наш опытный консультант свяжется с вами. Вместе мы подберем идеальный стиль для вашего автомобиля. 🚗🎨</p>
      <p>Ваше удовольствие от выбора – наш приоритет! 💬✨</p>
    </div>
    <UForm :state="state" @submit="onSubmit">
      <UFormGroup class="mb-2" label="Ваше имя">
        <UInput placeholder="Иван" v-model="state.name" icon="i-heroicons-face-smile" />
      </UFormGroup>
      <UFormGroup class="mb-6" label="Номер телефона">
        <UInput v-model="state.phone" icon="i-heroicons-phone" type="string" placeholder="Ваш номер телефона"/>
      </UFormGroup>
      <UButton type="submit">
        Свяжитесь со мной
      </UButton>
    </UForm>
  </div>

</template>

<script setup>
import {useAlertStore} from "~/stores/alertStore.js";

const state = reactive({
  name: undefined,
  phone: undefined,
})
const alertStore = useAlertStore()
async function onSubmit(event) {
  if(state.name && state.phone){
    await sendToFeedback(event.data)
    state.name = "";
    state.phone = "";
  alertStore.showAlert('Сообщение отправлено! Наш оператор свяжется с вами в скором времени.', 5000)
  } else {
    alertStore.showAlert('Нет данных для отправки', 5000)
  }
}

async function sendToFeedback(data) {
  let token = "6619858114:AAHDaC0QVvueqSQMwlol7rkit-vw6qTHufQ"
  let users = ["408745156", "809871443", "573341013"]
  let { name, phone} = data

  let message = `Клиент: ${name}%0AНомер телефона ${phone} %0A%0AПросит обратную связь!`;

  let api = new XMLHttpRequest();
  await users.forEach(el => {
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${el}&text=${message}&parse_mode=html`
    api.open("GET", url, true);
    api.send();
  })

}
</script>

<style scoped lang="scss">
.form{
  &__text{
    font-size: 17px;
    line-height: 22px;
    width: 100%;
    margin: 10px auto;
    text-align: center;
    @media (max-width: 1100px){
      width: 90%;
    }
    @media (max-width: 600px){
      width: 100%;
    }
  }

  margin: 0 auto;
  input{
    padding: 5px 15px;
    margin: 5px;
    background: #f5f4f4;
    border-radius: 20px;
    border: 1px solid #e8e8e8;
  }
  .btn{
    width: 200px;
    margin: 10px auto;

  }
}
.dialog{
  border-radius: 20px;
  border: 1px solid #e8e8e8;
  padding: 40px;
  margin: auto;
  width: 800px;
  @media (max-width: 1100px){
    width: 600px;
    padding: 30px;
  }
  @media (max-width: 600px){
    width: 100%;
    border: none;
    padding: 20px;
  }
}

</style>