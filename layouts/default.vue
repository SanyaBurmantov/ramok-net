<template>
  <div>
    <Alert></Alert>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex items-center">
        <ul class="flex flex-1 gap-2 justify-start items-center navigation">
          <li><NuxtLink to="/" class="btn-empty">Главная</NuxtLink></li>
        </ul>
        <NuxtLink to="/" class="font-bold flex flex-1 justify-center logo"><img src="/logo.png" alt="logo"></NuxtLink>
        <ul class="flex flex-1 gap-2 justify-end items-center">
          <li><NuxtLink to="/about" class="btn-empty navigation">О нас</NuxtLink></li>
          <li><NuxtLink to="/products" class="btn-empty navigation">Товары</NuxtLink></li>
          <li><Modal v-model="isOpen"/></li>
        </ul>
        <Dropdown></Dropdown>
      </nav>
    </header>

   <!-- output the page -->
    <div class="container mx-auto p-4 mb-20">
      <slot />
    </div>

    <footer class="shadow-sm bg-white">
      <div>
        <nav class="container mx-auto p-4 flex">
          <ul class="flex gap-2">
            <li><NuxtLink to="/">Главная</NuxtLink></li>
            <li><NuxtLink to="/about">О нас</NuxtLink></li>
            <li><NuxtLink to="/products">Каталог</NuxtLink></li>
          </ul>
        </nav>
      </div>
    </footer>
  </div>
</template>

<script setup>
const isOpen = ref(false)
</script>

<style scoped>
  a:hover{
    color: darkmagenta;
  }
  .router-link-exact-active {
    color: blueviolet;
  }

  .logo{
    position: relative;
    img{
      position: absolute;
      top: -55px;
      width: 109px;
      @media (max-width: 1000px){
        top: -52px;
        width: 99px;
        left: -25px;
      }
    }

  }

  .container{
    @media (min-width: 1530px){
      max-width: 1280px;
    }
  }

  .navigation{
    display: flex;
    @media (max-width: 1000px){
      display: none;
    }
  }
</style>