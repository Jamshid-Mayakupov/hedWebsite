<template>
  <div class="flex flex-col min-h-screen">

    <a href="#main-content" class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-3 focus:text-Blue">
      Перейти к основному содержанию
    </a>

    <!-- Universal Sticky & Dynamic Header -->
    <Header />

    <main id="main-content" class="flex-1" tabindex="-1">
      <RouterView />
    </main>

    <Footer />

    <ScrollButton />

  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Footer from './components/ui/Footer.vue'
import Header from './components/ui/Header.vue'
import ScrollButton from './components/ScrollButton.vue'
</script>
