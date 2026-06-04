<template>
  <div class="flex flex-col min-h-screen">

    <!-- Проверяем, если не home, то показываем хедер -->
    <Header v-if="route.name !== 'home'" />

    <main class="flex-1">
      <RouterView />
    </main>

    <Footer />

    <ScrollButton />

  </div>
</template>

<script setup>
import { RouterView, useRoute } from 'vue-router'
import Footer from './components/ui/Footer.vue'
import Header from './components/ui/Header.vue'
import ScrollButton from './components/ScrollButton.vue'

const route = useRoute() // Получаем текущий маршрут
</script>
