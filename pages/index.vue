<template>
  <div class="mb-20">
    <h1 class="">Твой заглавный текст</h1>
    <p>Твой слоган 1</p>
    <p>Твой слоган 2</p>
  </div>

  <div class="mb-20">
    <h2 class="h2">Наши товары</h2>
    <div v-for="item of picture" class="flex flex-row justify-between flex-gap2 bg-[#8881] rounded-[4px] bg-white h-full p-4 m-4">
      <div class="">
        <div>{{item.name}}</div>
        <div>{{item.description}}</div>
      </div>
      <img :src="item.examplePic" :alt="item.name" class="w-full h-auto sm:w-44 md:w-28 lg:w-46 xl:w-34">
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
const picture = store.categories

</script>

<style scoped>

</style>