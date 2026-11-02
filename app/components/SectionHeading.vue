<script setup lang="ts">
defineProps<{ title: string, description?: string, eyebrow?: string }>()
</script>

<template>
  <div class="mb-8 flex flex-wrap items-end justify-between gap-4">
    <div class="max-w-2xl">
      <p v-if="eyebrow" class="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">{{ eyebrow }}</p>
      <h2 class="font-display text-2xl font-bold tracking-tight text-highlighted sm:text-3xl">{{ title }}</h2>
      <p v-if="description" class="mt-3 text-muted">{{ description }}</p>
    </div>
    <slot />
  </div>
</template>
