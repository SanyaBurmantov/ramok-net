<template>
  <div class="burger">
  <UDropdown :items="items" mode="hover" :popper="{ placement: 'bottom-start' }">
    <UButton color="white" class="dropdown"  icon="i-heroicons-bars-3-bottom-right" label="" trailing-icon="i-heroicons-chevron-down-20-solid" />
  </UDropdown>
  </div>
</template>

<script setup>
const items = [
  [
    {
    label: 'Главная',
    to: "/",
    icon: 'i-heroicons-home'
    },
    {
      label: 'Каталог',
      to: "/products",
      icon: 'i-heroicons-folder-open'
    },
  ]
]
</script>

<style scoped lang="scss">
  .burger{
    display: none;
    @media (max-width: 1000px){
      display: block;
      margin-left: 10px;
    }
  }
  .dropdown{
    padding: 8px;
  }
</style>