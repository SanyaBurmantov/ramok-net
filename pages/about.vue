<template>
  <div>
    <h2>About</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nobis.</p>
    <p>Lorem ipsum dolor sit amet.</p>
    {{ data }}
  </div>
</template>

<script setup>
  const { data } = await useFetch('/api/currency/GBP')
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>