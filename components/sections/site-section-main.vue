<template>
  <section class="main-page-section-preview-wrapper">
    <Swiper
        :modules="[Autoplay]"
        :slides-per-view="1"
        :loop="true"
        :effect="'creative'"
        :autoplay="{
        delay: 3600,
        disableOnInteraction: true,
      }"
        :creative-effect="{
        prev: {
          shadow: false,
          translate: ['100%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }"
    >
      <SwiperSlide v-for="slide in slides" :key="slide">
        <img :src="slide.url" :alt="slide.name">
      </SwiperSlide>
    </Swiper>
    <div class="main-page-section-text">
      <div class="header-section">
      <div class="flex">
        <div class="header-section__texts">
          <h1 class="header-section__texts--title">Ramok-net.by</h1>
          <h2 class="header-section__texts--subtitle">Твой надежный способ выделиться</h2>
          <p class="header-section__texts--description">Индивидуальные номерные рамки на любой вкус и цвет</p>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>

<script setup>
  import {useSwiperPicturesStore} from "~/stores/imageSwiperStore.js";
  import {Autoplay} from "swiper/modules";
  const store = useSwiperPicturesStore();
  const slides = store.mainPagePictures
</script>


<style scoped lang="scss">
  .main-page-section-preview-wrapper{
    position: relative;
  }
  .main-page-section-text{
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
  }
  .header-section{
    &__texts{
      margin-bottom: 40px;
      margin-left: 40px;
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
</style>