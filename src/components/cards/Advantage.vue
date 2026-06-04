<template>
  <div class="text-center group">
    <div class="mb-6 flex justify-center">
      <div class="relative">
        <div class="w-20 h-20 bg-Blue/10 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:bg-Blue group-hover:scale-110">
          <img 
            :src="advantage.icon" 
            :alt="advantage.alt" 
            class="w-10 h-10 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
          />
        </div>
      </div>
    </div>
    
    <h3 class="text-4xl sm:text-5xl font-bold text-Blue mb-3 font-raleway">
      {{ advantage.number }}
    </h3>
    <p class="text-gray-600 leading-relaxed text-sm sm:text-base">
      {{ advantage.text }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  advantage: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.font-raleway {
  font-family: 'Raleway', sans-serif;
}
</style>