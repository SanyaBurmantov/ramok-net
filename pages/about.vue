<template>
  <div class="breadcrumb"><UBreadcrumb :links="links" /></div>
  <div>
    <h2>About</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nobis.</p>
    <p>Lorem ipsum dolor sit amet.</p>
    {{ data }}
  </div>
</template>

<script setup>
  const { data } = await useFetch('/api/currency/GBP')
  const links = [{
    label: 'Главная',
    icon: 'i-heroicons-home',
    to: '/'
  }, {
    label: 'О нас',
    icon: 'i-heroicons-square-3-stack-3d'
  }]
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
.breadcrumb{
  padding: 10px;
}
</style>