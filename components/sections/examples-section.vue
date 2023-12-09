<template>
  <div class="">
    <h2 class="h2 mb-10">Примеры</h2>
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