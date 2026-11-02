<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()

const is404 = computed(() => props.error.statusCode === 404)

useSeoMeta({ title: is404.value ? 'Страница не найдена' : 'Ошибка' })
</script>

<template>
  <UApp>
    <NuxtLayout>
      <UError
        :error="{
          statusCode: error.statusCode,
          statusMessage: is404 ? 'Страница не найдена' : 'Что-то пошло не так',
          message: is404 ? 'Возможно, товар убрали из каталога или в адресе опечатка.' : 'Попробуйте обновить страницу чуть позже.',
        }"
        :clear="{ label: 'На главную', size: 'lg' }"
        redirect="/"
      />
    </NuxtLayout>
  </UApp>
</template>
