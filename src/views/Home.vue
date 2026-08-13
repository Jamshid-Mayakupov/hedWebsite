<template>
  <div class="overflow-x-hidden bg-gray-50">
    <!-- Hero Section -->
    <SectionIntro />

    <!-- Advantages -->
    <SectionAdvantages />

    <!-- News Section -->
    <SectionNews />

    <!-- Partners Carousel -->
    <section class="bg-white py-16 md:py-20">
      <Carousel />
    </section>

    <!-- Map Section -->
    <section class="bg-gray-50">
      <YandexMap />
    </section>

    <!-- Contact Form -->
    <Form />
  </div>
</template>

<script setup>
import SectionIntro from '../components/sections/Intro.vue'
import SectionAdvantages from '../components/sections/Advantages.vue'
import SectionNews from '../components/sections/NewsSection.vue'
import Carousel from '../components/Carousel.vue'
import YandexMap from '../components/YandexMap.vue'
import Form from '@/components/sections/Form.vue'
</script>
