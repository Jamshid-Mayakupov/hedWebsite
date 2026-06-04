<template>
    <div class="bg-gray-200 mb-6 flex items-center w-fit">
      <router-link
        :to="admin ? '/admin/news' : '/news'"
        class="px-6 py-2 transition text-gray-600 font-medium"
        :class="$route.path === (admin ? '/admin/news' : '/news') ? 'bg-blue-800 text-white shadow-sm' : ''"
      >
        Новости
      </router-link>
      <router-link
        :to="admin ? '/admin/gallery' : '/gallery'"
        class="px-6 py-2 transition text-gray-600 font-medium"
        :class="$route.path === (admin ? '/admin/gallery' : '/gallery') ? 'bg-blue-800 text-white shadow-sm' : ''"
      >
        Галерея
      </router-link>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  const props = defineProps({
    admin: {
      type: Boolean,
      default: false
    }
  })
  </script>
  