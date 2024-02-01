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
          <h2 class="header-section__texts--subtitle">Подарите своему автомобилю неповторимый стиль💫</h2>
          <p class="header-section__texts--description">Наши номерные рамки помогут Вам выразить свою индивидуальность на дороге</p>
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
    @media (max-width: 767px) {
      position: relative;
      background-color: black;
      margin: auto;
      border: 1px solid white;
      border-radius: 14px;
      width: 80%;
      text-align: center;
      padding: 20px;
      transform: translateY(-25px);
      margin-bottom: -30px;
    }
  }
  .header-section{
    @media (max-width: 767px) {
      margin: auto;
    }
    &__texts{
      margin-bottom: 40px;
      margin-left: 40px;
      padding: 30px;
      @media (max-width: 767px) {
        margin: 0;
        padding: 0;
      }
      &--title{
        font-size: 42px;
        line-height: 50px;
        color: aliceblue;
        margin-bottom: 15px;
        @media (max-width: 767px) {
          font-size: 22px;
          line-height: 26px;
        }
      }
      &--subtitle{
        font-size: 22px;
        line-height: 28px;
        color: aliceblue;
        margin-bottom: 10px;
        @media (max-width: 767px) {
          font-size: 18px;
          line-height: 22px;
        }
      }
      &--description{
        font-size: 18px;
        line-height: 22px;
        color: aliceblue;
        @media (max-width: 767px) {
          font-size: 16px;
          line-height: 18px;
        }
      }
    }
  }
</style>