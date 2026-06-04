<template>
    <div class="shadow hover:shadow-lg overflow-hidden border border-gray-200 bg-white transition">
      <img
        :src="story.image"
        :alt="story.alt || 'News Image'"
        class="w-full h-48 object-cover"
      />
      <div class="p-4">
        <h3 class="text-lg font-bold text-gray-900 mb-2 line-clamp-1 min-h-[1 rem]  ">
          {{ story.title }}
        </h3>
        <p v-if="story.description" class="text-gray-700 text-sm mb-2 line-clamp-2 min-h-[2.5rem]">
          {{ story.description }}
        </p>
        <p v-if="story.dateTime" class="text-gray-500 text-xs text-right">
          {{ formatDate(story.dateTime) }}
        </p>
        
      </div>
      <div class="-mx-1  flex">
  <button
    @click="$emit('edit', story)"
    class="w-1/2 hover:bg-blue-700 bg-blue-900  font-medium py-2  transition rounded-l-md flex justify-center items-center gap-2"
  >
    <!-- <img src="@/assets/images/icons/edit-1.svg" alt="Edit" class="w-5 h-5" /> -->
    <EditIcon class="w-5 h-5 text-white" />
  </button>
  <button
    @click="$emit('delete', story)"
    class="w-1/2 font-medium py-2 transition rounded-r-md bg-red-800 hover:bg-red-700 flex justify-center items-center gap-2"
  >
    <!-- <img src="@/assets/images/icons/delete-1.svg" alt="Delete" class="w-5 h-5" /> -->
    <TrashIcon class="w-5 h-5 text-white" />
  </button>
</div>

    </div>
  </template>
  
  <script setup>
  import dayjs from 'dayjs'
  import 'dayjs/locale/ru'
  import TrashIcon from '../Icons/Trash.vue'
  import EditIcon from '../Icons/Edit.vue'
  dayjs.locale('ru')
  
  function formatDate(dateTime) {
    return dayjs(dateTime).format('D MMMM YYYY года')
  }
  
  defineProps({
    story: {
      type: Object,
      required: true
    }
  })
  
  defineEmits(['edit', 'delete'])
  </script>
  