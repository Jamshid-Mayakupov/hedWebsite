<!-- src/components/VideoLoad.vue -->
<template>
  <!-- Video без wrapper div -->
  <video 
    v-show="videoLoaded" 
    ref="videoRef" 
    autoplay 
    muted 
    loop
    playsinline
    class="absolute inset-0 w-full h-full object-cover pointer-events-none">
    <source :src="videoSource" type="video/mp4" />
  </video>

  <!-- Fallback gradient если видео не загрузилось -->
  <div 
    v-if="!videoLoaded"
    class="absolute inset-0 bg-gradient-to-br from-darkBlue via-Blue to-darkBlue animate-pulse pointer-events-none">
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import videoSource from "@/assets/videos/hed-video.mp4"

const videoLoaded = ref(false)
const videoRef = ref(null)

onMounted(() => {
  if (videoRef.value) {
    videoRef.value.oncanplaythrough = () => {
      videoLoaded.value = true
    }
    
    // Принудительная загрузка
    videoRef.value.load()
  }
})
</script>