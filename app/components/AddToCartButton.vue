<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'
import type { Product } from '#shared/catalog'

const props = defineProps<{ product: Product, size?: ButtonProps['size'], block?: boolean }>()

const cart = useCartStore()
const toast = useToast()
const inCart = computed(() => cart.has(props.product.id))

function add() {
  cart.add(props.product.id)
  toast.add({
    title: 'Добавлено в корзину',
    description: props.product.title,
    icon: 'i-lucide-check',
    color: 'success',
    actions: [{ label: 'Открыть корзину', color: 'neutral', variant: 'outline', onClick: () => { cart.isOpen = true } }],
  })
}
</script>

<template>
  <UButton
    v-if="inCart"
    :size="size"
    :block="block"
    color="neutral"
    variant="subtle"
    icon="i-lucide-check"
    label="В корзине"
    @click="cart.isOpen = true"
  />
  <UButton
    v-else
    :size="size"
    :block="block"
    icon="i-lucide-shopping-bag"
    label="В корзину"
    @click="add"
  />
</template>
