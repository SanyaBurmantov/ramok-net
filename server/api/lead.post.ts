import { categories, getProduct } from '#shared/catalog'

interface LeadBody {
  type?: 'callback' | 'order'
  name?: string
  phone?: string
  contact?: string
  comment?: string
  items?: { id: string, qty: number }[]
}

const clip = (value: unknown, max = 200) => String(value ?? '').trim().slice(0, max)

export default defineEventHandler(async (event) => {
  const body = await readBody<LeadBody>(event)

  const name = clip(body?.name, 80)
  const phone = normalizePhone(body?.phone)

  if (!name) throw createError({ statusCode: 400, statusMessage: 'Укажите имя' })
  if (!phone) throw createError({ statusCode: 400, statusMessage: 'Некорректный номер телефона' })

  if (body.type === 'order') {
    // Цены берём из каталога на сервере, а не из запроса клиента
    const lines = (Array.isArray(body.items) ? body.items : [])
      .slice(0, 50)
      .map(item => ({ product: getProduct(String(item?.id)), qty: Math.min(Math.max(Math.trunc(Number(item?.qty) || 1), 1), 99) }))
      .filter((line): line is { product: NonNullable<typeof line.product>, qty: number } => !!line.product)

    if (!lines.length) throw createError({ statusCode: 400, statusMessage: 'Корзина пуста' })

    const total = lines.reduce((sum, l) => sum + l.product.price * l.qty, 0)
    const categoryName = (slug: string) => categories.find(c => c.slug === slug)?.name ?? slug

    const itemsText = lines
      .map(l => tg`• ${l.product.title} (${categoryName(l.product.category)}) — ${l.qty} × ${l.product.price} BYN`)
      .join('\n')

    const header = [
      '🛒 <b>Новый заказ</b>',
      tg`Клиент: ${name}`,
      tg`Телефон: ${phone}`,
      tg`Связаться через: ${clip(body.contact, 40) || 'не указано'}`,
      body.comment ? tg`Комментарий: ${clip(body.comment, 1000)}` : '',
    ].filter(Boolean).join('\n')

    await sendToManagers(`${header}\n\n${itemsText}\n\n<b>Итого: ${total} BYN</b>`)

    return { ok: true }
  }

  await sendToManagers([
    '📞 <b>Просят обратную связь</b>',
    tg`Клиент: ${name}`,
    tg`Телефон: ${phone}`,
    body?.comment ? tg`Идея: ${clip(body.comment, 1000)}` : '',
  ].filter(Boolean).join('\n'))

  return { ok: true }
})
