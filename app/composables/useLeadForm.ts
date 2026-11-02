import type { FormError } from '@nuxt/ui'

/** Общая валидация и отправка формы заявки на /api/lead */
export function useLeadForm() {
  const loading = ref(false)
  const toast = useToast()

  function validate(state: { name?: string, phone?: string }): FormError[] {
    const errors: FormError[] = []
    if (!state.name?.trim()) errors.push({ name: 'name', message: 'Как к вам обращаться?' })
    if (!normalizePhone(state.phone)) errors.push({ name: 'phone', message: 'Введите номер в формате +375 XX XXX-XX-XX' })
    return errors
  }

  async function submit(body: Record<string, unknown>) {
    loading.value = true
    try {
      await $fetch('/api/lead', { method: 'POST', body })
      return true
    } catch (error) {
      console.error(error)
      toast.add({
        title: 'Не удалось отправить',
        description: 'Попробуйте ещё раз через минуту.',
        icon: 'i-lucide-circle-alert',
        color: 'error',
      })
      return false
    } finally {
      loading.value = false
    }
  }

  return { loading, validate, submit }
}
