<template>
  <div class="mt-8">
    <h2 class="h2 mb-5">Примеры работ:</h2>
    <p>Эти фотографии — не просто изображения, они - истории. Истории стиля, индивидуальности и творчества. </p><p>Каждая рамка уникальна, как и её обладатель.</p>

      <p> Позвольте этим фотографиям рассказать вам о том, как наши дизайны могут воплотить ваши идеи в реальность. Ваш автомобиль заслуживает быть украшенным так, как никто другой. Ваша уникальность - в вашем стиле!</p>

        <p class="mb-7">Посмотрите, как мы превращаем автомобили в произведения искусства. Ваша история начинается здесь. 📸🚗</p>
    <div class="examples ">
      <div class="example-picture"><img src="/images/mainPage/examples/1.jpg" alt="example"></div>
      <div class="example-picture"><img src="/images/mainPage/examples/3.jpg" alt="example"></div>
      <div class="example-picture"><img src="/images/mainPage/examples/4.jpg" alt="example"></div>
      <div class="example-picture"><img src="/images/mainPage/examples/5.jpg" alt="example"></div>
      <div class="example-picture"><img src="/images/mainPage/examples/6.jpg" alt="example"></div>
      <div class="example-picture"><img src="/images/mainPage/examples/8.jpg" alt="example"></div>
      <div class="example-picture"><img src="/images/mainPage/examples/9.jpg" alt="example"></div>
      <div class="example-picture"><img src="/images/mainPage/examples/10.jpg" alt="example"></div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
 .examples{
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   gap: 40px;
   @media (max-width: 1050px){
     grid-template-columns: repeat(3, 1fr);
     gap: 30px;
   }
   @media (max-width: 600px){
     grid-template-columns: repeat(3, 1fr);
     gap: 20px;
   }
   @media (max-width: 426px){
     grid-template-columns: repeat(2, 1fr);
     gap: 15px;
   }
   @media (max-width: 350px){
     grid-template-columns: repeat(2, 1fr);
     gap: 10px;
   }
   .example-picture{

    cursor: pointer;
     &:hover{
       transform: scale(110%);
       transition: scale 1600ms;
     }
     img{
       border-radius: 20px;
       width: 100%;
       height: 100%;
     }
   }
 }

</style>