<template>
  <section class="header-section mb-20">
    <div class="flex">
    <div class="header-section__texts">
      <h1 class="header-section__texts--title">Ramok-net.by</h1>
      <h2 class="header-section__texts--subtitle">Твой надежный способ выделиться</h2>
      <p class="header-section__texts--description">Индивидуальные номерные рамки на любой вкус и цвет</p>
    </div>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in items" :key="item.id">
          {{ item.text }}
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </section>

  <div class="mb-20">
    <h2 class="h2">Наши товары</h2>
    <div class="products mb-10">
      <div v-for="item of picture" class="flex flex-row justify-between flex-gap2 bg-[#8881] rounded-[4px] bg-white h-full p-4 m-4">
        <div class="products-item">
          <div>{{item.name}}</div>
          <div>{{item.description}}</div>
        </div>
        <img :src="item.examplePic" :alt="item.name" class="w-full h-auto sm:w-44 md:w-28 lg:w-46 xl:w-34">
      </div>
    </div>
    <div class="flex justify-center">
      <div class="btn w-40 text-center">В каталог</div>
    </div>
  </div>

  <div class="mb-20">
    <h2 class="h2">Отзывы</h2>
    <div class="mx-auto grid grid-cols-3 mb-5">
      <div>Отзыв1</div>
      <div>Отзыв2</div>
      <div>Отзыв3</div>
    </div>
    <div class="flex justify-center">
      <div class="btn w-40 text-center">Перейти к отзывам</div>
    </div>

  </div>

  <div class="">
    <h2 class="h2">Примеры</h2>
    <div>
      <div>Пример1</div>
      <div>Пример2</div>
      <div>Пример3</div>
      <div>Пример4</div>
    </div>
    <div class="flex justify-center">
      <div class="btn w-40 text-center">Смотреть все</div>
    </div>
  </div>

</template>

<script setup>
import {useCategoriesStore, useProductStore} from '@/stores/productStore.js'
// access the `store` variable anywhere in the component ✨
const store = useCategoriesStore()
const picture = store.categories;
</script>
<script>
import Swiper from "swiper";
export default {
  data() {
    return {
      swiper: null,
      items: [
        { id: 1, text: 'Слайд 1' },
        { id: 2, text: 'Слайд 2' },
        { id: 3, text: 'Слайд 3' }
      ]
    };
  },
  mounted() {
    console.log('hello')
    this.swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination'
      }
    });
  },
  beforeDestroy() {
    if (this.swiper) {
      this.swiper.destroy();
      this.swiper = null;
    }
  }
};
</script>

<style lang="scss">
  .header-section{
    background-image: url("/images/header-section-image.jpg");
    background-size: cover;
    &__texts{
      margin-top: 150px;
      margin-bottom: 40px;
      margin-left: 40px;
      backdrop-filter: blur(4px) ;
      padding: 30px;

      &--title{
        font-size: 42px;
        line-height: 50px;
        color: aliceblue;
        margin-bottom: 15px;
      }
      &--subtitle{
        font-size: 22px;
        line-height: 28px;
        color: aliceblue;
        margin-bottom: 10px;
      }
      &--description{
        font-size: 18px;
        line-height: 22px;
        color: aliceblue;
      }
    }
  }

  .products{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }

</style>