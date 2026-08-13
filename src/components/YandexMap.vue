<template>
  <section class="py-16 md:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden" aria-labelledby="map-section-title">
    <!-- Ambient Glow Background Effects -->
    <div class="absolute top-1/3 -left-40 w-96 h-96 bg-Blue/10 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-10 -right-40 w-96 h-96 bg-lightBlue/10 rounded-full blur-3xl pointer-events-none"></div>

    <div class="section-container relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-12" data-aos="fade-up" data-aos-duration="600">
        <div class="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-Blue/10 border border-Blue/20 text-Blue text-xs font-semibold uppercase tracking-wider mb-4">
          <span>Контакты и локация</span>
        </div>
        <SectionHeader id="map-section-title">Наш офис на карте</SectionHeader>
        <p class="text-gray-600 mt-4 max-w-2xl mx-auto text-base sm:text-lg">
          Главный офис компании <strong class="text-gray-900 font-semibold">HURSHIDA ENTER DELUX</strong> в Ташкенте
        </p>
      </div>

      <!-- Map Display Container Frame -->
      <div
        class="relative rounded-3xl shadow-2xl overflow-hidden border border-gray-200/80 bg-white w-full"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <!-- Floating Header Overlay on Map -->
        <div class="absolute top-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
          <!-- Active City Pill -->
          <div class="pointer-events-auto bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl border border-gray-200/80 shadow-md flex items-center space-x-3">
            <div class="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></div>
            <div class="text-xs sm:text-sm">
              <span class="text-gray-500">Наш офис: </span>
              <strong class="text-gray-900 font-bold font-raleway">{{ selectedLocation.city }}</strong>
            </div>
          </div>

          <!-- Quick Navigation Link Button -->
          <a
            :href="getRouteUrl(selectedLocation.coords)"
            target="_blank"
            rel="noopener noreferrer"
            class="pointer-events-auto bg-Blue hover:bg-darkBlue text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
          >
            <span>Построить маршрут</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        <!-- Yandex Map Container (JS API or Iframe Embed Fallback) -->
        <div class="relative w-full h-[460px] sm:h-[540px] lg:h-[620px] bg-gray-100">
          <!-- JS API Map Container -->
          <div
            v-show="!mapError"
            id="map"
            class="w-full h-full"
          ></div>

          <!-- Interactive Iframe Map Fallback (Used when Yandex JS API fails or is blocked) -->
          <iframe
            v-if="mapError"
            :src="iframeMapUrl"
            class="w-full h-full border-0"
            allowfullscreen="true"
            loading="lazy"
            title="Яндекс Карта офиса"
          ></iframe>
        </div>
      </div>

      <!-- Location Info Card Container -->
      <div class="mt-10 max-w-2xl mx-auto" data-aos="fade-up" data-aos-duration="800">
        <div
          v-for="location in locations"
          :key="location.id"
          class="rounded-3xl p-7 bg-white border border-gray-200/90 shadow-xl hover:border-Blue/40 transition-all duration-300 relative flex flex-col justify-between select-none"
        >
          <!-- Top Tag / Badge -->
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-lg bg-Blue text-white">
                {{ location.type }}
              </span>

              <div class="w-9 h-9 rounded-full bg-Blue/10 text-Blue flex items-center justify-center">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>

            <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-2 font-raleway">
              {{ location.name }} ({{ location.city }})
            </h3>

            <p class="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed flex items-center space-x-2">
              <svg class="w-5 h-5 text-Blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              <span>{{ location.address }}</span>
            </p>
          </div>

          <!-- Details & Action Link -->
          <div class="pt-5 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
            <div>
              <span class="text-xs text-gray-400 block mb-0.5">Телефон:</span>
              <a :href="`tel:${location.phone.replace(/[^0-9+]/g, '')}`" class="font-bold text-gray-900 hover:text-Blue transition-colors text-base">
                {{ location.phone }}
              </a>
            </div>

            <div>
              <span class="text-xs text-gray-400 block mb-0.5">Режим работы:</span>
              <span class="font-bold text-gray-900 text-base">{{ location.hours }}</span>
            </div>

            <div class="sm:col-span-2 pt-2">
              <a
                :href="getRouteUrl(location.coords)"
                target="_blank"
                rel="noopener noreferrer"
                class="w-full inline-flex items-center justify-center space-x-2 py-3 px-5 bg-Blue hover:bg-darkBlue text-white text-sm font-bold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <span>Построить маршрут в Яндекс Картах</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref, computed } from "vue"
import SectionHeader from './common/SectionHeader.vue'
import { env } from '@/config/env'

const mapError = ref(false)
const selectedLocationIndex = ref(0)
let mapInstance = null
let placemarks = []
let addedScript = null
let isUnmounted = false

const locations = [
  {
    id: "tashkent",
    coords: [41.271082, 69.278766],
    city: "Ташкент",
    type: "Главный офис",
    address: "ул. Гейдара Алиева, 313",
    phone: "+998 (99) 863-77-07",
    hours: "09:00 - 18:00",
    name: "HURSHIDA ENTER DELUX"
  }
]

const selectedLocation = computed(() => locations[selectedLocationIndex.value] || locations[0])

const iframeMapUrl = computed(() => {
  const coords = selectedLocation.value.coords
  return `https://yandex.ru/map-widget/v1/?ll=${coords[1]}%2C${coords[0]}&z=14&pt=${coords[1]}%2C${coords[0]},pm2rdm`
})

const getRouteUrl = (coords) => {
  return `https://yandex.ru/maps/?rtext=~${coords[0]},${coords[1]}`
}

const selectLocation = (index) => {
  selectedLocationIndex.value = index
  const loc = locations[index]
  
  if (mapInstance && loc) {
    try {
      mapInstance.setCenter(loc.coords, 14, {
        duration: 500,
        checkZoomRange: true
      })
      if (placemarks[index]) {
        placemarks[index].balloon.open()
      }
    } catch (err) {
      console.warn("Map pan error:", err)
    }
  }
}

onMounted(() => {
  if (!window.ymaps) {
    const apiKeyParam = env.yandexMapsApiKey ? `apikey=${encodeURIComponent(env.yandexMapsApiKey)}&` : ''
    const script = document.createElement("script")
    script.src = `https://api-maps.yandex.ru/2.1/?${apiKeyParam}lang=ru_RU`
    script.async = true
    script.onload = initMap
    script.onerror = () => {
      console.warn("Yandex Maps API script failed to load. Falling back to Yandex Map Widget.")
      mapError.value = true
    }
    document.body.appendChild(script)
    addedScript = script
  } else {
    initMap()
  }
})

const initMap = () => {
  if (!window.ymaps) {
    mapError.value = true
    return
  }
  
  window.ymaps.ready(() => {
    if (isUnmounted) return

    const mapEl = document.getElementById('map')
    if (!mapEl) return
    
    try {
      const map = new window.ymaps.Map("map", {
        center: locations[0].coords,
        zoom: 13,
        controls: ['zoomControl', 'fullscreenControl', 'typeSelector']
      })

      mapInstance = map
      map.behaviors.disable("scrollZoom")

      placemarks = []

      locations.forEach((loc, index) => {
        const routeLink = getRouteUrl(loc.coords)
        const placemark = new window.ymaps.Placemark(
          loc.coords,
          {
            balloonContentHeader: `<div style="font-family: Raleway, sans-serif; font-weight: 700; color: #101F70; font-size: 15px;">${loc.name}</div>`,
            balloonContentBody: `
              <div style="font-family: Poppins, sans-serif; padding: 6px 0; font-size: 13px; color: #333;">
                <p style="margin: 0 0 6px 0; font-weight: 600; color: #162EAE;">${loc.type} — ${loc.city}</p>
                <p style="margin: 0 0 6px 0;">${loc.address}</p>
                <p style="margin: 0 0 8px 0; color: #666;">Тел: <strong>${loc.phone}</strong></p>
                <a href="${routeLink}" target="_blank" rel="noopener" style="display: inline-block; background: #162EAE; color: #fff; padding: 6px 12px; border-radius: 6px; text-decoration: none; font-size: 12px; font-weight: 600;">Построить маршрут →</a>
              </div>
            `,
            hintContent: `${loc.city} - ${loc.name}`
          },
          {
            preset: loc.type === 'Главный офис' ? 'islands#redDotIconWithCaption' : 'islands#blueDotIconWithCaption',
            iconColor: loc.type === 'Главный офис' ? '#162EAE' : '#1C46F5'
          }
        )

        placemark.events.add('click', () => {
          selectLocation(index)
        })

        map.geoObjects.add(placemark)
        placemarks.push(placemark)
      })

      // Open balloon for default location
      if (placemarks[0]) {
        placemarks[0].balloon.open()
      }
    } catch (err) {
      console.error("Yandex Map initialization error:", err)
      mapError.value = true
    }
  })
}

onBeforeUnmount(() => {
  isUnmounted = true
  if (addedScript) {
    addedScript.onload = null
    addedScript.onerror = null
  }

  try {
    mapInstance?.destroy?.()
  } catch (error) {
    console.warn("Yandex Map cleanup error:", error)
  } finally {
    mapInstance = null
    placemarks = []
  }
})
</script>

<style scoped>
.font-raleway {
  font-family: 'Raleway', sans-serif;
}

:deep(.ymaps-2-1-79-map) {
  border-radius: inherit;
}
</style>
