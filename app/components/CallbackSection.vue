<template>
  <section id="callback" class="scroll-mt-24">
    <div class="relative overflow-hidden rounded-3xl border border-default bg-elevated/50">
      <div class="pointer-events-none absolute -left-24 -top-24 size-72 rounded-full bg-primary/15 blur-3xl" />
      <div class="relative grid gap-10 p-6 sm:p-10 lg:grid-cols-5 lg:p-14">
        <div class="lg:col-span-2">
          <UBadge label="Бесплатная консультация" icon="i-lucide-message-circle" variant="subtle" class="mb-4 rounded-full" />
          <h2 class="font-display text-3xl font-bold tracking-tight text-highlighted">
            Не уверены, какой дизайн выбрать?
          </h2>
          <p class="mt-4 text-muted">
            Оставьте номер телефона — консультант свяжется с вами, и вместе мы подберём идеальный стиль для вашего автомобиля. А если у вас уже есть идея — опишите её, и мы воплотим её в жизнь.
          </p>
          <ul class="mt-6 space-y-3 text-sm">
            <li v-for="t in ['Подскажем по готовым коллекциям', 'Разработаем дизайн по вашей идее', 'Ответим в Telegram, Viber или по телефону']" :key="t" class="flex items-center gap-2">
              <UIcon name="i-lucide-circle-check" class="size-5 shrink-0 text-primary" />
              {{ t }}
            </li>
          </ul>
        </div>
        <div class="lg:col-span-3">
          <CallbackForm />
        </div>
      </div>
    </div>
  </section>
</template>
