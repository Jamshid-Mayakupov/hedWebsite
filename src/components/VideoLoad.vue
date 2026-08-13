<!-- src/components/VideoLoad.vue -->
<template>
  <img
    v-if="reducedMotion"
    :src="posterSource"
    alt=""
    class="absolute inset-0 w-full h-full object-cover pointer-events-none"
    aria-hidden="true"
  />

  <template v-else>
    <video
      ref="videoRef"
      autoplay
      muted
      loop
      playsinline
      preload="metadata"
      :poster="posterSource"
      :class="videoLoaded ? 'opacity-100' : 'opacity-0'"
      class="absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-700">
      <source :src="mobileVideoSource" type="video/mp4" media="(max-width: 767px)" />
      <source :src="desktopVideoSource" type="video/mp4" />
    </video>

    <img
      :src="posterSource"
      alt=""
      :class="videoLoaded ? 'opacity-0' : 'opacity-100'"
      class="absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-700"
      aria-hidden="true"
    />
  </template>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import desktopVideoSource from '@/assets/videos/hed-video.mp4'
import mobileVideoSource from '@/assets/videos/hed-video-mobile.mp4'
import heroPoster from '@/assets/images/hero.jpg'
import heroMobilePoster from '@/assets/images/hero-mobile.jpg'

const videoLoaded = ref(false)
const videoRef = ref(null)
const reducedMotion = ref(false)
const posterSource = window.matchMedia('(max-width: 767px)').matches
  ? heroMobilePoster
  : heroPoster

const handleCanPlay = () => {
  videoLoaded.value = true
}

onMounted(() => {
  reducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reducedMotion.value || !videoRef.value) return

  videoRef.value.addEventListener('canplay', handleCanPlay)
  videoRef.value.load()
})

onBeforeUnmount(() => {
  videoRef.value?.removeEventListener('canplay', handleCanPlay)
})
</script>
