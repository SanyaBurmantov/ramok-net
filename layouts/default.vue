<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex items-center">
        <NuxtLink to="/" class="flex flex-1 justify-start" >Home</NuxtLink>
        <NuxtLink to="/" class="font-bold flex flex-1 justify-center">Logo</NuxtLink>
        <ul class="flex flex-1 gap-2 justify-end ">
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products" class="btn">Products</NuxtLink></li>
        </ul>
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
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/products">Products</NuxtLink></li>
          </ul>
        </nav>
      </div>
    </footer>
  </div>
</template>

<script setup>

</script>

<style scoped>
  a:hover{
    color: darkmagenta;
  }
  .router-link-exact-active {
    color: blueviolet;
  }

  .container{
    @media (min-width: 1530px){
      max-width: 1280px;
    }
  }
</style>