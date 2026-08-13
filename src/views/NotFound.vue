<template>
  <section
    class="min-h-[60vh] bg-gray-50 px-4 py-24 text-center"
    aria-labelledby="not-found-title"
  >
    <p class="mb-3 text-sm font-semibold uppercase tracking-wider text-Blue">
      Ошибка 404
    </p>
    <h1
      id="not-found-title"
      class="mb-4 text-3xl font-bold text-gray-900 md:text-5xl"
    >
      Страница не найдена
    </h1>
    <p class="mx-auto mb-8 max-w-xl text-gray-600">
      Возможно, адрес изменился или страница была удалена.
    </p>
    <RouterLink
      to="/"
      class="inline-flex min-h-11 items-center justify-center rounded-lg bg-Blue px-6 py-3 font-semibold text-white hover:bg-darkBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-Blue"
    >
      Вернуться на главную
    </RouterLink>
  </section>
</template>
