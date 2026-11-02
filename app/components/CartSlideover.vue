<script setup lang="ts">
const cart = useCartStore()
const step = ref<'cart' | 'checkout'>('cart')

watch(() => cart.isOpen, (open) => {
  if (open) step.value = 'cart'
})
watch(() => cart.count, (count) => {
  if (!count) step.value = 'cart'
})
</script>

<template>
  <USlideover
    v-model:open="cart.isOpen"
    :title="step === 'cart' ? 'Корзина' : 'Оформление заказа'"
    :description="step === 'cart' ? 'Цена указана за комплект из 2 рамок или планок' : 'Менеджер свяжется с вами для уточнения деталей'"
    :ui="{ body: 'flex flex-col', footer: 'flex-col items-stretch gap-3' }"
  >
    <template #body>
      <UEmpty
        v-if="!cart.lines.length"
        icon="i-lucide-shopping-bag"
        title="Корзина пуста"
        description="Загляните в каталог — там больше 70 дизайнов"
        :actions="[{ label: 'Перейти в каталог', to: '/products', onClick: () => { cart.isOpen = false } }]"
        variant="naked"
        class="my-auto"
      />

      <ul v-else-if="step === 'cart'" class="divide-y divide-default">
        <li v-for="line in cart.lines" :key="line.id" class="flex gap-3 py-4 first:pt-0">
          <NuxtLink
            :to="`/products/${line.product.category}/${line.id}`"
            class="w-28 shrink-0 overflow-hidden rounded-md bg-neutral-900"
            @click="cart.isOpen = false"
          >
            <NuxtImg :src="line.product.image" :alt="line.product.title" width="224" height="126" format="webp" class="aspect-[16/9] size-full object-cover" />
          </NuxtLink>

          <div class="flex min-w-0 flex-1 flex-col gap-2">
            <div class="flex items-start justify-between gap-2">
              <p class="line-clamp-2 text-sm font-medium text-highlighted">{{ line.product.title }}</p>
              <UButton
                icon="i-lucide-trash-2"
                color="neutral"
                variant="ghost"
                size="xs"
                aria-label="Удалить"
                @click="cart.remove(line.id)"
              />
            </div>
            <div class="mt-auto flex items-center justify-between gap-2">
              <UInputNumber
                :model-value="line.qty"
                :min="1"
                :max="99"
                size="xs"
                class="w-24"
                @update:model-value="(v) => cart.setQty(line.id, Number(v) || 1)"
              />
              <p class="text-sm font-semibold text-highlighted">{{ line.qty * line.product.price }} BYN</p>
            </div>
          </div>
        </li>
      </ul>

      <OrderForm v-else @success="cart.isOpen = false" />
    </template>

    <template v-if="cart.lines.length" #footer>
      <div class="flex items-center justify-between">
        <span class="text-muted">Итого</span>
        <span class="text-xl font-bold text-highlighted">{{ cart.total }} BYN</span>
      </div>
      <UButton
        v-if="step === 'cart'"
        size="lg"
        block
        trailing-icon="i-lucide-arrow-right"
        label="Оформить заказ"
        @click="step = 'checkout'"
      />
      <UButton
        v-else
        size="lg"
        block
        color="neutral"
        variant="ghost"
        icon="i-lucide-arrow-left"
        label="Вернуться к корзине"
        @click="step = 'cart'"
      />
    </template>
  </USlideover>
</template>
