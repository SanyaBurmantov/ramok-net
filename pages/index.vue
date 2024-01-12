<template>
  <SiteSectionMainHeader class="mb-10"/>

  <div class="mb-15">
    <h2 class="h2 mb-10">Наши товары</h2>
    <div class="products mb-10">
      <NuxtLink 
        :to="`/products/${item.type}`"
        v-for="item of picture" 
        class="products__item flex flex-col justify-between flex-gap2 bg-[#8881] rounded-[4px] bg-white h-full p-4"
      >
        <div class="products-item">
          <div>{{item.name}}</div>
          <div>{{item.description}}</div>
        </div>
        <img v-if="!!item.examplePic" :src="item.examplePic" :alt="item.name" class="products__item--pic w-full h-auto">
        <div v-else>Хочу видеть все рамки</div>
      </NuxtLink>
    </div>
  </div>
  <FormCallback />
  <ExamplesSection />

</template>

<script setup>
import {useCategoriesStore, useProductStore} from '@/stores/productStore.js'
import SiteSectionMainHeader from "~/components/sections/site-section-main.vue";
import ExamplesSection from "~/components/sections/examples-section.vue";
import FormCallback from "~/components/forms/form-callback.vue";
const store = useCategoriesStore()
const picture = store.categories;
</script>

<style lang="scss">
  .products{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    @media (max-width: 450px){
      grid-template-columns: repeat(1, 1fr);
      gap: 20px;
    }
    &__item{
      cursor: pointer;
      border: 2px solid aliceblue;
      position: relative;
      transition: border 200ms;
      margin: -2px;
      &:hover{
        border: 2px solid red;
        transform: scale(102%);
        transition: border 400ms;
      }
    }
  }

</style>