# ramok-net.by

Сайт номерных рамок с индивидуальным дизайном.

- Прод: https://ramok-net.by
- Тестовый стенд: https://ramok-net.vercel.app

## Стек

Nuxt 4 · Vue 3.5 · Nuxt UI 4 (Tailwind CSS 4) · Pinia · @nuxt/image

## Запуск

```bash
npm install
cp .env.example .env   # указать NUXT_TELEGRAM_BOT_TOKEN
npm run dev
```

`npm run build` — production-сборка (нужен сервер или serverless, например Vercel: заявки отправляются через `/api/lead`).

## Где что лежит

- `shared/catalog.ts` — категории и товары (добавлять новые рамки сюда), картинки — в `public/images/mainPage/categorys/`
- `app/pages` — страницы, `app/components` — компоненты, `app/stores/cart.ts` — корзина
- `server/api/lead.post.ts` — приём заявок и заказов, отправка менеджерам в Telegram
- `app/plugins/analytics.client.ts` — Яндекс Метрика и Meta Pixel (Google Analytics — модуль `nuxt-gtag`)

## Переменные окружения

| Переменная | Описание |
| --- | --- |
| `NUXT_TELEGRAM_BOT_TOKEN` | токен Telegram-бота (обязательно) |
| `NUXT_TELEGRAM_CHAT_IDS` | ID чатов получателей через запятую (по умолчанию — текущие менеджеры) |
