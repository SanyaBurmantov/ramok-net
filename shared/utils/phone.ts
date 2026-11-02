/**
 * Приводит белорусский номер к виду +375XXXXXXXXX.
 * Принимает «+375 29 123-45-67», «80291234567», «375291234567» и т. п.
 * Возвращает null, если номер некорректный.
 */
export function normalizePhone(input: string | undefined | null): string | null {
  const digits = String(input ?? '').replace(/\D/g, '')
  if (/^375\d{9}$/.test(digits)) return `+${digits}`
  if (/^80\d{9}$/.test(digits)) return `+375${digits.slice(2)}`
  return null
}
