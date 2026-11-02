const escapeHtml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/** Экранирует пользовательский ввод для parse_mode=HTML */
export const tg = (strings: TemplateStringsArray, ...values: unknown[]) =>
  strings.reduce((out, str, i) => out + str + (i < values.length ? escapeHtml(String(values[i] ?? '')) : ''), '')

export async function sendToManagers(text: string) {
  const { telegramBotToken, telegramChatIds } = useRuntimeConfig()

  if (!telegramBotToken) {
    throw createError({ statusCode: 500, statusMessage: 'Telegram bot token is not configured' })
  }

  const chatIds = String(telegramChatIds).split(',').map(id => id.trim()).filter(Boolean)

  const results = await Promise.allSettled(chatIds.map(chat_id =>
    $fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
      method: 'POST',
      body: { chat_id, text, parse_mode: 'HTML' },
    }),
  ))

  const failed = results.filter(r => r.status === 'rejected')
  failed.forEach(r => console.error('[telegram] sendMessage failed:', (r as PromiseRejectedResult).reason))

  // Заявка считается доставленной, если её получил хотя бы один менеджер
  if (failed.length === results.length) {
    throw createError({ statusCode: 502, statusMessage: 'Не удалось отправить заявку' })
  }
}
