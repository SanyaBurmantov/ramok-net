<template>
  <div class="dialog bg-[#8881] bg-white">
    <div class="form__text">
      <p>Не смогли подобрать рамку на свой вкус?</p>
      <p>Не проблема, заполните форму обратной связи и наш менеджер свяжется с вами и поможет подобрать именно ту рамку, которая подойдет лично вам и вашему авто.</p>
    </div>
    <form class="flex flex-col rounded-[4px] h-full p-4 form">
      <label>Введите Ваше имя</label>
      <input>
      <label>Введите ваш номер телефона</label>
      <input>
      <button class="mt-5 btn">Свяжитесь со мной</button>
    </form>
  </div>

</template>

<script setup>
</script>

<style scoped lang="scss">
.form{
  &__text{
    font-size: 17px;
    line-height: 22px;
    width: 60%;
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