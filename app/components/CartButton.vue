<script setup lang="ts">
const cart = useCartStore()
</script>

<template>
  <UChip :text="cart.count" :show="cart.count > 0" size="3xl" inset>
    <UButton
      icon="i-lucide-shopping-bag"
      color="neutral"
      variant="ghost"
      aria-label="Корзина"
      @click="cart.isOpen = true"
    />
  </UChip>
</template>
