<template>
  <SiteSectionMainHeader class="mb-10"/>

  <div class="mb-20">
    <h2 class="h2">Наши товары</h2>
    <div class="products mb-10">
      <div v-for="item of picture" class="flex flex-col justify-between flex-gap2 bg-[#8881] rounded-[4px] bg-white h-full p-4 m-4">
        <div class="products-item">
          <div>{{item.name}}</div>
          <div>{{item.description}}</div>
        </div>
        <img v-if="!!item.examplePic" :src="item.examplePic" :alt="item.name" class="w-full h-auto">
        <div v-else>Хочу видеть все рамки</div>
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
import SiteSectionMainHeader from "~/components/sections/site-section-main.vue";
const store = useCategoriesStore()
const picture = store.categories;
</script>

<style lang="scss">


  .products{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
  }

</style>