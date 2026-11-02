<script setup lang="ts">
const emit = defineEmits<{ success: [] }>()

const cart = useCartStore()
const toast = useToast()
const { loading, validate, submit } = useLeadForm()

const contactOptions = ['Telegram', 'Viber', 'Звонок']

const state = reactive({
  name: '',
  phone: '',
  contact: 'Telegram',
  comment: '',
})

async function onSubmit() {
  const ok = await submit({
    type: 'order',
    ...state,
    items: cart.items.map(({ id, qty }) => ({ id, qty })),
  })
  if (!ok) return

  toast.add({
    title: `Спасибо за заказ${state.name ? `, ${state.name}` : ''}!`,
    description: 'Наш менеджер скоро свяжется с вами.',
    icon: 'i-lucide-party-popper',
    color: 'success',
  })
  cart.clear()
  emit('success')
}
</script>

<template>
  <UForm :state="state" :validate="validate" class="space-y-5" @submit="onSubmit">
    <UFormField label="Ваше имя" name="name" required>
      <UInput v-model="state.name" placeholder="Иван" icon="i-lucide-user" autocomplete="name" class="w-full" />
    </UFormField>

    <UFormField label="Номер телефона" name="phone" required>
      <UInput v-model="state.phone" type="tel" placeholder="+375 29 123-45-67" icon="i-lucide-phone" autocomplete="tel" class="w-full" />
    </UFormField>

    <UFormField label="Как с вами связаться" name="contact">
      <URadioGroup v-model="state.contact" :items="contactOptions" orientation="horizontal" variant="table" indicator="hidden" />
    </UFormField>

    <UFormField label="Комментарий" name="comment" hint="Необязательно">
      <UTextarea v-model="state.comment" :rows="3" autoresize placeholder="Форма рамок, пожелания по тексту или дизайну…" class="w-full" />
    </UFormField>

    <UButton type="submit" size="lg" block :loading="loading" label="Отправить заказ" />
  </UForm>
</template>
