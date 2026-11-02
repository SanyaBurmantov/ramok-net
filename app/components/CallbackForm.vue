<script setup lang="ts">
const toast = useToast()
const { loading, validate, submit } = useLeadForm()

const state = reactive({ name: '', phone: '', comment: '' })

async function onSubmit() {
  const ok = await submit({ type: 'callback', ...state })
  if (!ok) return

  toast.add({
    title: 'Заявка отправлена!',
    description: 'Наш менеджер свяжется с вами в ближайшее время.',
    icon: 'i-lucide-check',
    color: 'success',
  })
  Object.assign(state, { name: '', phone: '', comment: '' })
}
</script>

<template>
  <UForm :state="state" :validate="validate" class="space-y-5" @submit="onSubmit">
    <div class="grid gap-5 sm:grid-cols-2">
      <UFormField label="Ваше имя" name="name" required>
        <UInput v-model="state.name" placeholder="Иван" icon="i-lucide-user" autocomplete="name" size="lg" class="w-full" />
      </UFormField>
      <UFormField label="Номер телефона" name="phone" required>
        <UInput v-model="state.phone" type="tel" placeholder="+375 29 123-45-67" icon="i-lucide-phone" autocomplete="tel" size="lg" class="w-full" />
      </UFormField>
    </div>

    <UFormField label="Ваша идея" name="comment" hint="Необязательно">
      <UTextarea v-model="state.comment" :rows="3" autoresize placeholder="Например: чёрная рамка с логотипом клуба и надписью…" size="lg" class="w-full" />
    </UFormField>

    <UButton type="submit" size="lg" :loading="loading" trailing-icon="i-lucide-send" label="Свяжитесь со мной" />
  </UForm>
</template>
