<!-- src/views/News/[slug].vue -->
<template>
  <section class="min-h-screen bg-gray-50/60 py-10 md:py-16 overflow-hidden">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

      <!-- 1. Breadcrumbs Navigation -->
      <nav class="flex items-center space-x-2 text-xs sm:text-sm text-gray-500" aria-label="Breadcrumb" data-aos="fade-down" data-aos-duration="600">
        <router-link to="/" class="hover:text-Blue transition-colors">Главная</router-link>
        <span class="text-gray-300">/</span>
        <router-link to="/news" class="hover:text-Blue transition-colors">Новости</router-link>
        <span class="text-gray-300">/</span>
        <span class="text-gray-900 font-medium truncate max-w-xs sm:max-w-md">{{ story?.title || 'Статья' }}</span>
      </nav>

      <!-- 2. Main Article Container -->
      <article v-if="story" class="space-y-10">

        <!-- Article Header -->
        <div class="space-y-4" data-aos="fade-up" data-aos-duration="800">
          <div class="flex flex-wrap items-center gap-3">
            <span class="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-xs font-semibold uppercase tracking-wider border border-gray-200">
              {{ story.category || 'Новости' }}
            </span>
            <span class="text-xs text-gray-500 flex items-center space-x-1.5">
              <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{{ story.date }}</span>
            </span>
            <span class="text-xs text-gray-300">•</span>
            <span class="text-xs text-gray-500">4 мин чтения</span>
          </div>

          <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-raleway leading-tight tracking-tight">
            {{ story.title }}
          </h1>
        </div>

        <!-- Featured Article Image -->
        <div class="relative overflow-hidden rounded-3xl shadow-lg border border-gray-200/80 bg-gray-100 group" data-aos="fade-up" data-aos-duration="800">
          <img
            :src="story.image"
            :alt="story.title"
            class="w-full h-[320px] sm:h-[450px] md:h-[500px] object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>
          <div class="absolute bottom-4 left-6 right-6 text-white text-xs sm:text-sm font-normal opacity-90">
            ООО «HURSHIDA ENTER DELUX» • Официальный пресс-релиз
          </div>
        </div>

        <!-- Video Presentation Showcase (Multiple or Single Videos) -->
        <!-- Case A: Multiple Videos Grid -->
        <div 
          v-if="story.videos && story.videos.length > 1"
          class="space-y-4"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div class="flex items-center justify-between">
            <h3 class="text-lg sm:text-xl font-bold text-gray-900 font-raleway flex items-center gap-2">
              <svg class="w-5 h-5 text-red-500 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span>Видеоматериалы репортажа ({{ story.videos.length }})</span>
            </h3>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              v-for="(vid, vIdx) in story.videos"
              :key="vIdx"
              class="relative rounded-3xl overflow-hidden shadow-lg border border-gray-200 group cursor-pointer bg-gray-900"
              @click="openVideoModal(vid.id)"
            >
              <div class="relative h-64 sm:h-72 w-full overflow-hidden">
                <img
                  :src="vid.poster || story.image"
                  :alt="vid.title"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div class="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>

                <!-- Center Play Button -->
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="w-16 h-16 rounded-full bg-white/90 backdrop-blur-md text-gray-900 shadow-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-white transition-all duration-300 border border-white/80">
                    <svg class="w-7 h-7 ml-0.5 text-Blue" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                <!-- Bottom Video Info Bar -->
                <div class="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-center justify-between text-white">
                  <div class="pr-2">
                    <span class="text-[10px] uppercase tracking-wider text-gray-300 font-semibold">Видео {{ vIdx + 1 }}</span>
                    <h4 class="text-xs sm:text-sm font-bold font-raleway line-clamp-1">{{ vid.title }}</h4>
                  </div>
                  <div class="shrink-0 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-semibold tracking-wider flex items-center space-x-1 border border-white/30">
                    <template v-if="isVimeoVideo(vid.id)">
                      <svg class="w-3 h-3 fill-current text-sky-400" viewBox="0 0 24 24">
                        <path d="M22.84 6.74c-.11 2.37-1.74 5.61-4.89 9.72-3.26 4.29-6.02 6.43-8.29 6.43-1.4 0-2.58-1.3-3.55-3.89l-1.92-7.05C3.51 9.4 2.82 8.13 2.13 8.13c-.15 0-.68.32-1.58.96L0 8.35c1-.88 1.99-1.76 2.97-2.64 1.34-1.17 2.36-1.78 3.06-1.84 1.63-.16 2.64.96 3.03 3.34.42 2.55.71 4.14.88 4.77.5 2.14 1.05 3.21 1.65 3.21.46 0 1.13-.74 2.01-2.22.88-1.48 1.35-2.61 1.41-3.39.11-1.33-.38-2-1.47-2-.52 0-1.05.12-1.59.36 1.07-3.51 3.12-5.21 6.15-5.1 2.25.07 3.31 1.54 3.18 4.41z"/>
                      </svg>
                      <span>Vimeo</span>
                    </template>
                    <template v-else>
                      <svg class="w-3 h-3 fill-current text-red-500" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                      <span>YouTube</span>
                    </template>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Case B: Single Video Showcase Card -->
        <div 
          v-else-if="story.youtubeVideoId" 
          class="relative rounded-3xl overflow-hidden shadow-lg border border-gray-200 group cursor-pointer"
          data-aos="fade-up"
          data-aos-duration="800"
          @click="openVideoModal(story.youtubeVideoId)"
        >
          <div class="relative h-72 sm:h-96 md:h-[420px] w-full overflow-hidden bg-gray-900">
            <img
              :src="story.videoPoster || story.image"
              :alt="story.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
            />
            <div class="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>

            <!-- Elegant Center Play Button -->
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-white/90 backdrop-blur-md text-gray-900 shadow-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-white transition-all duration-300 border border-white/80">
                <svg class="w-8 h-8 sm:w-9 sm:h-9 ml-1 text-Blue" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>

            <!-- Bottom Video Info Bar -->
            <div class="absolute bottom-0 inset-x-0 p-5 sm:p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-center justify-between text-white">
              <div>
                <span class="text-[11px] uppercase tracking-wider text-gray-300 font-semibold">Видеорепортаж</span>
                <h3 class="text-sm sm:text-base font-bold font-raleway">Смотреть репортаж с открытия</h3>
              </div>
              <div class="px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold tracking-wider flex items-center space-x-1.5 border border-white/30">
                <template v-if="isVimeoVideo(story.youtubeVideoId)">
                  <svg class="w-3.5 h-3.5 fill-current text-sky-400" viewBox="0 0 24 24">
                    <path d="M22.84 6.74c-.11 2.37-1.74 5.61-4.89 9.72-3.26 4.29-6.02 6.43-8.29 6.43-1.4 0-2.58-1.3-3.55-3.89l-1.92-7.05C3.51 9.4 2.82 8.13 2.13 8.13c-.15 0-.68.32-1.58.96L0 8.35c1-.88 1.99-1.76 2.97-2.64 1.34-1.17 2.36-1.78 3.06-1.84 1.63-.16 2.64.96 3.03 3.34.42 2.55.71 4.14.88 4.77.5 2.14 1.05 3.21 1.65 3.21.46 0 1.13-.74 2.01-2.22.88-1.48 1.35-2.61 1.41-3.39.11-1.33-.38-2-1.47-2-.52 0-1.05.12-1.59.36 1.07-3.51 3.12-5.21 6.15-5.1 2.25.07 3.31 1.54 3.18 4.41z"/>
                  </svg>
                  <span>Vimeo</span>
                </template>
                <template v-else>
                  <svg class="w-3.5 h-3.5 fill-current text-red-500" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span>YouTube</span>
                </template>
              </div>
            </div>
          </div>
        </div>

        <!-- Article Editorial Body -->
        <div class="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-sm space-y-8" data-aos="fade-up" data-aos-duration="800">
          
          <!-- Executive Lead Excerpt -->
          <div class="text-lg sm:text-xl text-gray-900 leading-relaxed font-medium pb-6 border-b border-gray-100">
            {{ story.description }}
          </div>

          <!-- HTML Content Body -->
          <div class="prose prose-lg max-w-none text-gray-800 leading-relaxed space-y-6">
            <div v-if="story.content" v-html="story.content" />
            <div v-else class="space-y-4">
              <p>
                Фармацевтическая компания <strong>HURSHIDA ENTER DELUX</strong> продолжает активное развитие инфраструктуры, укрепление международных связей и повышение качества обеспечения населения Республики Узбекистан социально значимыми препаратами.
              </p>
            </div>
          </div>

          <!-- Photo Gallery (If story has gallery) -->
          <div v-if="story.gallery && story.gallery.length" class="space-y-4 pt-8 border-t border-gray-100">
            <div class="flex items-center justify-between">
              <h3 class="text-xl font-bold text-gray-900 font-raleway">Фотоматериалы события</h3>
              <span class="text-xs text-gray-500">{{ story.gallery.length }} фото</span>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 pt-2">
              <div
                v-for="(photo, pIdx) in story.gallery"
                :key="pIdx"
                class="h-32 sm:h-40 rounded-2xl overflow-hidden border border-gray-200/80 cursor-pointer group relative bg-gray-100"
                @click="openImagePreview(photo)"
              >
                <img
                  :src="photo"
                  :alt="`Фото ${pIdx + 1}`"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Share & Actions Bar -->
          <!-- Back to News Button -->
          <div class="pt-8 border-t border-gray-100 flex justify-between items-center">
            <router-link
              to="/news"
              class="inline-flex items-center space-x-2 px-6 py-2.5 rounded-xl bg-Blue hover:bg-lightBlue text-white font-semibold text-sm shadow-sm transition-all"
            >
              <svg class="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              <span>Ко всем новостям</span>
            </router-link>
          </div>

        </div>

      </article>

      <!-- 3. Not Found State -->
      <div v-else class="text-center py-20 bg-white rounded-3xl border border-gray-200/80 p-8 shadow-sm" data-aos="fade-up">
        <div class="w-16 h-16 rounded-2xl bg-gray-100 text-gray-400 flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.562M15 6.306a7.962 7.962 0 00-6 0M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z" />
          </svg>
        </div>
        <h2 class="text-2xl font-bold text-gray-900 mb-2 font-raleway">Новость не найдена</h2>
        <p class="text-gray-500 text-sm max-w-md mx-auto mb-6">
          Возможно, материал был перемещен или ссылка устарела.
        </p>
        <router-link
          to="/news"
          class="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-Blue text-white font-bold text-sm shadow-md hover:bg-lightBlue transition-all"
        >
          <span>Вернуться к новостям</span>
        </router-link>
      </div>

      <!-- 4. Related Recent News Grid -->
      <div v-if="relatedNews.length > 0" class="space-y-6 pt-6" data-aos="fade-up" data-aos-duration="1000">
        <div class="flex justify-between items-center">
          <h3 class="text-2xl font-bold text-gray-900 font-raleway">Другие публикации</h3>
          <router-link to="/news" class="text-xs sm:text-sm font-bold text-Blue hover:text-lightBlue transition-colors flex items-center space-x-1">
            <span>Смотреть все</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </router-link>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article
            v-for="item in relatedNews"
            :key="item.id"
            class="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-sm hover:shadow-md hover:border-gray-300 transition-all group cursor-pointer flex flex-col justify-between space-y-3"
            @click="goToRelated(item.slug)"
          >
            <div class="h-40 rounded-xl overflow-hidden bg-gray-100">
              <img
                :src="item.image"
                :alt="item.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div class="space-y-1.5">
              <span class="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">{{ item.category }}</span>
              <h4 class="text-sm font-bold text-gray-900 group-hover:text-Blue transition-colors font-raleway line-clamp-2">
                {{ item.title }}
              </h4>
            </div>
            <span class="text-xs text-gray-400">{{ item.date }}</span>
          </article>
        </div>
      </div>

    </div>

    <!-- 5. Interactive YouTube Video Popup Modal -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="isVideoModalOpen"
          class="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md"
          @click.self="closeVideoModal"
        >
          <!-- Modal Container -->
          <div
            class="relative w-full max-w-5xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/20 transform transition-all duration-300"
            @click.stop
          >
            <!-- Close Button -->
            <button
              @click="closeVideoModal"
              class="absolute top-4 right-4 z-20 w-11 h-11 rounded-full bg-white/20 hover:bg-white text-white hover:text-gray-900 transition-all duration-200 flex items-center justify-center backdrop-blur-md cursor-pointer shadow-lg"
              aria-label="Закрыть видео"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <!-- Video Player (16:9 Aspect Ratio) -->
            <div class="relative w-full aspect-video bg-black">
              <iframe
                :src="activeEmbedUrl"
                class="absolute inset-0 w-full h-full border-0"
                allow="autoplay; fullscreen; picture-in-picture; encrypted-media; web-share"
                allowfullscreen
                title="Видеорепортаж HURSHIDA ENTER DELUX"
              ></iframe>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

    <!-- 6. Image Preview Lightbox Modal -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="selectedPreviewImage"
          class="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md"
          @click="selectedPreviewImage = null"
        >
          <button
            @click="selectedPreviewImage = null"
            class="absolute top-4 right-4 z-20 w-11 h-11 rounded-full bg-white/20 hover:bg-white text-white hover:text-gray-900 transition-all duration-200 flex items-center justify-center backdrop-blur-md cursor-pointer shadow-lg"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            :src="selectedPreviewImage"
            alt="Увеличенное фото"
            class="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain"
            @click.stop
          />
        </div>
      </Transition>
    </Teleport>

  </section>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AOS from 'aos'

// Import news images
import news1_1 from '@/assets/images/news/news-1.1.jpg'
import news1_2 from '@/assets/images/news/news-1.2.jpg'
import news1_3 from '@/assets/images/news/news-1.3.jpg'
import news1_4 from '@/assets/images/news/news-1.4.jpg'
import news1_5 from '@/assets/images/news/news-1.5.jpg'
import news1_6 from '@/assets/images/news/news-1.6.jpg'
import news1_7 from '@/assets/images/news/news-1.7.jpg'
import sumalakImg from '@/assets/images/sumalak-party.jpg'
import about1 from '@/assets/images/about-1.JPG'
import about2 from '@/assets/images/about-2.JPG'
import springTour1 from '@/assets/images/news/spring-tournament-1.jpg'
import springTour2 from '@/assets/images/news/spring-tournament-2.jpg'
import runningCompImg from '@/assets/images/news/running-competition.jpg'

const route = useRoute()
const router = useRouter()
const story = ref(null)
// Video Modal
const isVideoModalOpen = ref(false)
const activeVideoId = ref('')

const isVimeoVideo = (videoId) => {
  if (!videoId) return false
  const str = String(videoId).trim()
  return str.includes('vimeo.com') || /^\d+$/.test(str)
}

const activeEmbedUrl = computed(() => {
  if (!activeVideoId.value) return ''
  const vid = String(activeVideoId.value).trim()
  if (vid.includes('vimeo.com')) {
    return vid.includes('autoplay') ? vid : `${vid}?autoplay=1`
  }
  if (/^\d+$/.test(vid)) {
    return `https://player.vimeo.com/video/${vid}?autoplay=1&title=0&byline=0&portrait=0&badge=0`
  }
  return `https://www.youtube.com/embed/${vid}?autoplay=1&rel=0`
})

const openVideoModal = (videoId) => {
  activeVideoId.value = videoId
  isVideoModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeVideoModal = () => {
  isVideoModalOpen.value = false
  activeVideoId.value = ''
  document.body.style.overflow = ''
}

// Lightbox
const selectedPreviewImage = ref(null)
const openImagePreview = (img) => {
  selectedPreviewImage.value = img
}

const allNewsData = [
  {
    id: 1,
    title: "В дом, куда пришла вода, приходит радость",
    description: "По инициативе и при спонсорской поддержке основателей компании «Hurshida Enter Delux» — Бахтиёра Примова и его сыновей Элёра и Сардора — более 2300 жителей Пайарыкского района обеспечены чистой питьевой водой.",
    image: news1_1,
    videoPoster: news1_2,
    youtubeVideoId: "5Pm5hfCPpK8",
    videos: [
      {
        id: "5Pm5hfCPpK8",
        title: "Официальный видеорепортаж: открытие гидротехнического сооружения",
        poster: news1_2
      },
      {
        id: "nzk2IhABreQ",
        title: "Видеоматериал: чистая питьевая вода для жителей Пайарыка",
        poster: news1_1
      }
    ],
    date: "Август 2026",
    slug: "v-dom-kuda-prishla-voda-prihodit-radost",
    category: "Общество",
    gallery: [news1_1, news1_2, news1_3, news1_4, news1_5, news1_6, news1_7],
    content: `<div class="space-y-6 text-gray-800 leading-relaxed text-base sm:text-lg">
      <p>
        В Пайарыкском районе по инициативе и при спонсорской поддержке Бахтиёра Примова — младшего сына мастера-хлопкороба Ахада Примова, а также его сыновей Элёра и Сардора, основателей компании «Hurshida Enter Delux», более 2300 жителей обеспечены качественной чистой питьевой водой.
      </p>

      <p>
        Истинную ценность воды лучше всего знает тот, кто испытывал в ней нужду. Чистая питьевая вода, которая в нашей повседневной жизни кажется привычной и естественной потребностью, для некоторых семей на протяжении долгих лет оставалась заветной мечтой.
      </p>

      <p>
        Жители 480 домохозяйств, проживающие в махаллях «Фаровон», «Тохиршайх» и имени Алишера Навои Пайарыкского района, на протяжении многих лет остро ощущали эту проблему. Сегодня в эти дома пришла настоящая радость — более 2300 человек получили стабильный доступ к чистой питьевой воде.
      </p>

      <p>
        Ушбу хайрли иш — эта благородная и жизненно важная инициатива была полностью реализована при спонсорской поддержке семьи Примовых — основателей компании «Hurshida Enter Delux».
      </p>

      <p>
        На торжественной церемонии открытия нового гидротехнического сооружения выступили заместитель хокима района Э. Мамадиёров, главный редактор объединенной редакции газет «Зарафшон» и «Самаркандский вестник» Ф. Тошев и другие почетные гости.
      </p>

      <p>
        В ходе мероприятия было подчеркнуто, что поддержка предпринимательства в нашей стране дает реальные и ощутимые плоды. Самое главное — предпринимательство является не только источником дохода, но и высокой социальной ответственностью, возможностью внести вклад в решение насущных общественных задач. Благородная инициатива семьи Примовых служит ярким тому подтверждением.
      </p>

      <blockquote class="my-8 pl-6 sm:pl-8 border-l-4 border-gray-900 py-2 space-y-3 bg-gray-50/80 rounded-r-2xl">
        <p class="text-base sm:text-lg text-gray-800 italic leading-relaxed">
          «Хотя сейчас мы живем в Ташкенте, Пайарык — это наша священная малая родина, земля, где мы родились и выросли. Это край, который мы всегда с благодарностью и теплотой вспоминаем, где прошло наше беззаботное детство рядом с дорогими родителями. Где бы мы ни находились, мы с гордостью и трепетом думаем о родном крае. Мы всей семьей долго думали над этим и, видя огромную потребность махаллей в питьевой воде, взялись за это благое дело. В реализации проекта особая роль принадлежит общенациональному движению "Юксалиш", и мы выражаем им искреннюю признательность».
        </p>
        <cite class="block text-sm font-bold text-gray-900 not-italic">
          — Бахтиёр ПРИМОВ, основатель компании «HURSHIDA ENTER DELUX»
        </cite>
      </blockquote>

      <p>
        Действительно, скучать по родной земле — это одно, а исцелять ее раны и помогать людям словом и делом — совсем другое. Инициатива семьи Примовых ценна тем, что объединила в себе оба этих благородных чувства.
      </p>

      <p>
        Сегодня в 480 домах махаллей «Фаровон», «Тохиршайх» и имени Алишера Навои многолетние хлопоты по доставке воды вручную остались позади. Когда в дом приходит чистая вода, светлеет на душе у каждого жителя. Решение жизненно важного вопроса для более чем 2300 человек стало практическим воплощением искренней заботы о людях.
      </p>

      <div class="text-right text-sm text-gray-500 font-medium pt-4">
        Автор: Хусниддин ХОЛДОРОВ
      </div>
    </div>`
  },
  {
    id: 6,
    title: "Корпоративный тимбилдинг и объединение команды HED",
    description: "В мае 2026 года состоялся масштабный корпоративный тимбилдинг компании «Hurshida Enter Delux», объединивший руководство, проектные офисы и специалистов всех ключевых подразделений для укрепления командного духа и синергии.",
    image: about2,
    videoPoster: about1,
    youtubeVideoId: "1219452814",
    date: "Май 2026",
    slug: "korporativnyj-timbilding-komandy-hed-maj-2026",
    category: "События",
    gallery: [about2, about1],
    content: `<div class="space-y-6 text-gray-800 leading-relaxed text-base sm:text-lg">
      <p>
        В мае 2026 года компания <strong>«Hurshida Enter Delux»</strong> провела масштабный корпоративный тимбилдинг, в котором приняли участие руководство, руководители направлений (Daantec, Daantec Pediatrics, Alba Dent, Neotron, Аортика, HED Logistics, HED Marketing, Inspiring Education School) и сотрудники всех ключевых подразделений.
      </p>

      <p>
        Мероприятие было направлено на укрепление командного взаимодействия, обмен опытом между проектными офисами, развитие синергии внутри холдинга и совместную выработку стратегических ориентиров на второе полугодие.
      </p>

      <p>
        Программа тимбилдинга объединила тренинги по эффективной кросс-функциональной коммуникации, командные интерактивы на открытом воздухе, спортивные состязания, а также открытые стратегические сессии, где каждый участник смог предложить инициативы по оптимизации рабочих процессов и развитию новых сервисов.
      </p>

      <blockquote class="my-8 pl-6 sm:pl-8 border-l-4 border-Blue py-2 space-y-3 bg-blue-50/50 rounded-r-2xl">
        <p class="text-base sm:text-lg text-gray-800 italic leading-relaxed">
          «Сила нашей компании — это сплоченная команда экспертов и единомышленников. Тимбилдинг показал, что вместе мы способны решать задачи любой сложности, развивать передовые медицинские и образовательные направления и уверенно достигать поставленных целей.»
        </p>
        <cite class="block text-sm font-bold text-Blue not-italic">
          — Руководство компании «HURSHIDA ENTER DELUX»
        </cite>
      </blockquote>

      <p>
        Завершилось мероприятие праздничным ужином, награждением активных участников и неформальным общением, которое еще сильнее сплотило коллектив и зарядило каждого сотрудника энергией и мотивацией для новых достижений.
      </p>
    </div>`
  },
  {
    id: 7,
    title: "Весенний детский спортивный праздник HED: перетягивание каната и прыжки со скакалкой",
    description: "В апреле 2026 года компания «Hurshida Enter Delux» организовала яркий весенний спортивный праздник для детей сотрудников с увлекательными состязаниями по перетягиванию каната, прыжкам со скакалкой и призами.",
    image: springTour1,
    videoPoster: springTour2,
    gallery: [springTour1, springTour2],
    youtubeVideoId: "AYw2bis1B6A",
    date: "Апрель 2026",
    slug: "vesennij-sportivnyj-turnir-i-iniciativy-hed-aprel-2026",
    category: "События",
    content: `<div class="space-y-6 text-gray-800 leading-relaxed text-base sm:text-lg">
      <p>
        В апреле 2026 года компания <strong>«Hurshida Enter Delux»</strong> провела яркий и радостный весенний спортивный праздник для детей сотрудников и их семей на открытом воздухе.
      </p>
      <p>
        Главными событиями дня стали захватывающие командные и индивидуальные состязания: юные участники с огромным азартом соревновались в перетягивании каната (Tug-of-war), синхронных и скоростных прыжках со скакалкой (Jump Rope / Skipping Rope Competition), а также в веселых подвижных эстафетах.
      </p>
      <p>
        Праздник подарил детям море смеха, позитивных эмоций и искренней радости побед, а родителям — возможность провести незабываемый активный выходной вместе со своими семьями и коллегами.
      </p>
      <blockquote class="my-8 pl-6 sm:pl-8 border-l-4 border-Blue py-2 space-y-3 bg-blue-50/50 rounded-r-2xl">
        <p class="text-base sm:text-lg text-gray-800 italic leading-relaxed">
          «Забота о семьях наших сотрудников и счастливые улыбки детей — это то, что вдохновляет нас каждый день. Детский спортивный праздник стал прекрасной весенней традицией HED, объединяющей поколения вокруг спорта, дружбы и здорового образа жизни.»
        </p>
        <cite class="block text-sm font-bold text-Blue not-italic">
          — Команда «HURSHIDA ENTER DELUX»
        </cite>
      </blockquote>
      <p>
        В завершение праздника все юные чемпионы получили памятные медали, призы и сладкие подарки, унеся с собой заряд бодрости и самые теплые весенние воспоминания.
      </p>
    </div>`
  },
  {
    id: 8,
    title: "Корпоративный забег и марафон HED Running Competition 2026",
    description: "В феврале 2026 года состоялся масштабный легкоатлетический забег «HED Running Competition», объединивший сотрудников компании для преодоления дистанций, проверки выносливости и популяризации активного бега и здорового образа жизни.",
    image: runningCompImg,
    videoPoster: runningCompImg,
    gallery: [runningCompImg],
    youtubeVideoId: "1219452903",
    date: "Февраль 2026",
    slug: "korporativnyj-zabeg-hed-running-competition-fevral-2026",
    category: "События",
    content: `<div class="space-y-6 text-gray-800 leading-relaxed text-base sm:text-lg">
      <p>
        В феврале 2026 года фармацевтическая компания <strong>«Hurshida Enter Delux»</strong> провела масштабный зимний легкоатлетический забег <strong>HED Running Competition</strong>, приуроченный к популяризации спорта, беговой культуры и укреплению здоровья сотрудников.
      </p>
      <p>
        В забеге приняли участие представители всех департаментов и подразделений компании — от руководящего состава до специалистов логистических комплексов и проектных офисов. Участники соревновались на различных дистанциях, демонстрируя силу воли, отличную физическую подготовку, целеустремленность и взаимную поддержку на трассе.
      </p>
      <p>
        Атмосфера соревнований была наполнена спортивным азартом и энергией. Каждый километр маршрута требовал концентрации и выносливости, а активные группы поддержки подбадривали коллег на протяжении всей дистанции до самой финишной арки.
      </p>
      <blockquote class="my-8 pl-6 sm:pl-8 border-l-4 border-Blue py-2 space-y-3 bg-blue-50/50 rounded-r-2xl">
        <p class="text-base sm:text-lg text-gray-800 italic leading-relaxed">
          «Бег — это не только проверка личной выносливости, но и умение распределять силы, ставить амбициозные цели и непрерывно двигаться к ним шаг за шагом. HED Running Competition показал, что наш коллектив готов преодолевать любые дистанции вместе!»
        </p>
        <cite class="block text-sm font-bold text-Blue not-italic">
          — Оргкомитет HED Running Competition
        </cite>
      </blockquote>
      <p>
        На финише всех участников ждали памятные медали финишеров, горячий чай и теплые поздравления. Победители в индивидуальных зачетах среди мужчин и женщин были награждены почетными кубками и ценными призами. Корпоративный забег стал ярким спортивным праздником единства, силы и здорового духа команды HED.
      </p>
    </div>`
  },
  {
    id: 2,
    title: "Грандиозное празднование Sumalak Party 2025",
    description: "Компания 'Hurshida Enter Delux' организовала масштабное корпоративное мероприятие, посвященное традиционному весеннему празднику с участием ключевых партнеров отрасли.",
    image: sumalakImg,
    videoPoster: sumalakImg,
    youtubeVideoId: "lFh9rSvFQ_E",
    date: "Март 2025",
    slug: "grandioznoe-prazdnovanie-sumalak-party-2025",
    category: "События",
    content: `<div class="space-y-4 text-gray-800 text-base sm:text-lg leading-relaxed">
      <p>Весенний праздник Сумаляк стал ярким символом единения коллектива, уважения к национальным традициям и совместного движения к новым высотам в фармацевтической индустрии Республики Узбекистан.</p>
      <p>В мероприятии приняли участие более 200 сотрудников, ведущие специалисты региональных хабов и ключевые международные партнеры компании.</p>
    </div>`
  },
  {
    id: 3,
    title: "Новые достижения компании в области фармацевтических инноваций",
    description: "Hurshida Enter Delux представила современные решения в области холодовой цепи и автоматизированного складского учета стандартов GDP.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
    date: "Март 2025",
    slug: "novye-dostizheniya-kompanii-v-oblasti-innovacij",
    category: "Инновации и рынок",
    content: `<div class="space-y-4 text-gray-800 text-base sm:text-lg leading-relaxed">
      <p>Внедрение инновационных датчиков температуры и влажности позволяет отслеживать сохранность термолабильных лекарственных средств в режиме реального времени на каждом этапе транспортировки.</p>
    </div>`
  },
  {
    id: 4,
    title: "Расширение команды и масштабирование региональных складов",
    description: "Компания объявила об открытии новых распределительных центров и расширении логистического персонала на 50 квалифицированных специалистов.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    date: "Февраль 2025",
    slug: "rasshirenie-komandy-i-novye-vozmozhnosti",
    category: "О компании",
    content: `<div class="space-y-4 text-gray-800 text-base sm:text-lg leading-relaxed">
      <p>Открытие дополнительных логистических мощностей в Бухаре, Хорезме и Карши позволило сократить время доставки жизненно важных медикаментов до региональных медицинских центров.</p>
    </div>`
  },
  {
    id: 5,
    title: "Стратегическое партнерство с европейскими фармпроизводителями",
    description: "Заключены долгосрочные соглашения на прямую дистрибуцию жизненно необходимых медикаментов в лечебные учреждения Узбекистана.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
    date: "Февраль 2025",
    slug: "partnerstvo-s-mezhdunarodnymi-kompaniyami",
    category: "Инновации и рынок",
    content: `<div class="space-y-4 text-gray-800 text-base sm:text-lg leading-relaxed">
      <p>Новые контракты гарантируют бесперебойные поставки оригинальных европейских препаратов высшего качества по прямым заводским ценам.</p>
    </div>`
  },
  {
    id: 6,
    title: "Успешная сертификация центрального складского комплекса GDP",
    description: "Логистический хаб площадью 5000 кв.м. успешно подтвердил соответствие международным стандартам надлежащей дистрибьюторской практики.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    date: "Январь 2025",
    slug: "zapusk-novoj-liniejki-produktov",
    category: "О компании",
    content: `<div class="space-y-4 text-gray-800 text-base sm:text-lg leading-relaxed">
      <p>Аудит подтвердил полную готовность комплекса к хранению и обработке любых объемов фармацевтической продукции в строгом соответствии со стандартами GDP.</p>
    </div>`
  },
  {
    id: 7,
    title: "Участие в международном фармацевтическом конгрессе 2025",
    description: "Руководство компании представило доклад о развитии импортозамещения и стабильных цепочках поставок в Центральной Азии.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    date: "Январь 2025",
    slug: "konferenciya-po-cifrovoj-transformacii",
    category: "События",
    content: `<div class="space-y-4 text-gray-800 text-base sm:text-lg leading-relaxed">
      <p>В рамках конгресса состоялся продуктивный обмен опытом с ведущими дистрибьюторами и экспертами в области здравоохранения стран СНГ и Европы.</p>
    </div>`
  }
]

const loadStory = () => {
  const slug = route.params.slug
  story.value = allNewsData.find(item => item.slug === slug) || allNewsData[0]
}

const relatedNews = computed(() => {
  if (!story.value) return allNewsData.slice(0, 3)
  return allNewsData.filter(item => item.slug !== story.value.slug).slice(0, 3)
})

const goToRelated = (slug) => {
  window.scrollTo({ top: 0, behavior: 'instant' })
  router.push(`/news/${slug}`)
}

const handleKeydown = (e) => {
  if (e.key === 'Escape') {
    if (isVideoModalOpen.value) closeVideoModal()
    if (selectedPreviewImage.value) selectedPreviewImage.value = null
  }
}

watch(() => route.params.slug, () => {
  window.scrollTo({ top: 0, behavior: 'instant' })
  loadStory()
  setTimeout(() => {
    AOS.refreshHard()
  }, 100)
})

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'instant' })
  loadStory()
  window.addEventListener('keydown', handleKeydown)
  setTimeout(() => {
    AOS.refreshHard()
  }, 100)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.font-raleway {
  font-family: 'Raleway', sans-serif;
}
</style>