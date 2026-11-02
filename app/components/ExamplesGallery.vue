<script setup lang="ts">
const photos = [1, 3, 4, 5, 6, 8, 9, 10].map(n => `/images/mainPage/examples/${n}.jpg`)
const active = ref<number | null>(null)
const open = computed({
  get: () => active.value !== null,
  set: (v) => { if (!v) active.value = null },
})

function step(delta: number) {
  if (active.value === null) return
  active.value = (active.value + delta + photos.length) % photos.length
}
</script>

<template>
  <div class="columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
    <button
      v-for="(src, i) in photos"
      :key="src"
      type="button"
      class="group block w-full cursor-zoom-in overflow-hidden rounded-xl break-inside-avoid"
      :aria-label="`Открыть фото ${i + 1}`"
      @click="active = i"
    >
      <NuxtImg
        :src="src"
        alt="Номерная рамка на автомобиле клиента"
        width="400"
        format="webp"
        loading="lazy"
        class="w-full transition duration-500 group-hover:scale-105"
      />
    </button>
  </div>

  <UModal v-model:open="open" :ui="{ content: 'max-w-4xl bg-transparent ring-0 shadow-none' }" title="Пример работы" :close="false">
    <template #content>
      <div v-if="active !== null" class="relative">
        <NuxtImg :src="photos[active]!" alt="Номерная рамка на автомобиле клиента" width="1200" format="webp" class="max-h-[85dvh] w-full rounded-xl object-contain" />
        <div class="absolute inset-x-2 top-1/2 flex -translate-y-1/2 justify-between">
          <UButton icon="i-lucide-chevron-left" color="neutral" variant="solid" class="rounded-full" aria-label="Назад" @click="step(-1)" />
          <UButton icon="i-lucide-chevron-right" color="neutral" variant="solid" class="rounded-full" aria-label="Вперёд" @click="step(1)" />
        </div>
        <UButton icon="i-lucide-x" color="neutral" variant="solid" class="absolute right-2 top-2 rounded-full" aria-label="Закрыть" @click="active = null" />
      </div>
    </template>
  </UModal>
</template>
