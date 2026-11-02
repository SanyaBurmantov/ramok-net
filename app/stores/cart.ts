import { getProduct, type Product } from '#shared/catalog'

export interface CartItem {
  id: string
  qty: number
}

export interface CartLine extends CartItem {
  product: Product
}

export const useCartStore = defineStore('cart', () => {
  const items = ref<CartItem[]>([])
  /** Открыта ли панель корзины (не сохраняется) */
  const isOpen = ref(false)

  // Товары, которых больше нет в каталоге, молча отбрасываются
  const lines = computed<CartLine[]>(() => items.value.flatMap((item) => {
    const product = getProduct(item.id)
    return product ? [{ ...item, product }] : []
  }))

  const count = computed(() => lines.value.reduce((sum, l) => sum + l.qty, 0))
  const total = computed(() => lines.value.reduce((sum, l) => sum + l.qty * l.product.price, 0))

  const has = (id: string) => items.value.some(i => i.id === id)

  function add(id: string) {
    const existing = items.value.find(i => i.id === id)
    if (existing) existing.qty++
    else items.value.push({ id, qty: 1 })
  }

  function setQty(id: string, qty: number) {
    if (qty < 1) return remove(id)
    const item = items.value.find(i => i.id === id)
    if (item) item.qty = Math.min(qty, 99)
  }

  function remove(id: string) {
    items.value = items.value.filter(i => i.id !== id)
  }

  function clear() {
    items.value = []
  }

  return { items, isOpen, lines, count, total, has, add, setQty, remove, clear }
}, {
  persist: { key: 'ramok-cart', pick: ['items'] },
})
