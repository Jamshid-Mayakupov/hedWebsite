<template>
  <section class="section-spacing-sm bg-gray-100">
    <div class="section-container">
      <div class="text-center mb-12" data-aos="fade-up" data-aos-duration="600">
        <p class="text-Blue font-semibold text-sm uppercase tracking-wider mb-3">
          Наше присутствие
        </p>
        <SectionHeader>Мы на карте</SectionHeader>
        <p class="text-gray-600 mt-4 max-w-2xl mx-auto">
          Наши офисы и представительства в Узбекистане
        </p>
      </div>
    </div>

    <div 
      id="map" 
      class="map-container shadow-xl" 
      data-aos="fade-up" 
      data-aos-duration="800"
      data-aos-offset="100">
    </div>

    <!-- Locations Grid -->
    <div class="section-container mt-12">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="(location, index) in locations" 
          :key="index"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
          data-aos-duration="600"
          class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer border border-gray-100"
          @click="centerMap(location.coords)">
          
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 bg-Blue/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-Blue transition-colors">
              <svg class="w-5 h-5 text-Blue group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            
            <div class="flex-1">
              <h3 class="font-semibold text-gray-900 mb-1 group-hover:text-Blue transition-colors font-raleway">
                {{ location.city }}
              </h3>
              <p class="text-sm text-gray-600">
                {{ location.address }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue"
import SectionHeader from './common/SectionHeader.vue'

const mapInstance = ref(null)

const locations = [
  {
    coords: [41.271082, 69.278766],
    city: "Ташкент",
    address: "ул. Гейдара Алиева, 313",
    name: "HURSHIDA ENTER DELUX"
  },
  { 
    coords: [39.062787, 66.836018], 
    city: "Самарканд",
    address: "ул. Арчазор",
    name: "Филиал Самарканд"
  },
  { 
    coords: [39.7686, 64.4556], 
    city: "Бухара",
    address: "Центральный офис",
    name: "Филиал Бухара"
  },
  { 
    coords: [41.5622, 61.0086], 
    city: "Турткуль",
    address: "Региональное представительство",
    name: "Филиал Турткуль"
  },
]

const centerMap = (coords) => {
  if (mapInstance.value) {
    mapInstance.value.setCenter(coords, 12, {
      duration: 500
    })
  }
}

onMounted(() => {
  if (!window.ymaps) {
    const script = document.createElement("script")
    script.src = "https://api-maps.yandex.ru/2.1/?apikey=ВАШ_API_КЛЮЧ&lang=ru_RU"
    script.async = true
    script.onload = initMap
    document.body.appendChild(script)
  } else {
    initMap()
  }
})

const initMap = () => {
  window.ymaps.ready(() => {
    const map = new window.ymaps.Map("map", {
      center: [41.2995, 69.2401],
      zoom: 6,
      controls: ['zoomControl', 'fullscreenControl']
    })

    mapInstance.value = map

    map.behaviors.disable("scrollZoom")

    locations.forEach(({ coords, name, city, address }) => {
      const placemark = new window.ymaps.Placemark(
        coords, 
        {
          balloonContentHeader: `<strong>${name}</strong>`,
          balloonContentBody: `
            <div style="padding: 8px 0;">
              <p style="margin: 0 0 4px 0; font-weight: 600;">${city}</p>
              <p style="margin: 0; color: #666;">${address}</p>
            </div>
          `,
          hintContent: city
        },
        {
          preset: 'islands#blueIcon',
          iconColor: '#162EAE'
        }
      )
      map.geoObjects.add(placemark)
    })
  })
}
</script>

<style scoped>
.map-container {
  width: 100%;
  height: 500px;
  max-height: 600px;
  border-radius: 1rem;
  overflow: hidden;
}

.font-raleway {
  font-family: 'Raleway', sans-serif;
}

@media (max-width: 768px) {
  .map-container {
    height: 350px;
  }
}

@media (max-width: 480px) {
  .map-container {
    height: 300px;
    border-radius: 0.75rem;
  }
}

:deep(.ymaps-2-1-79-map) {
  border-radius: inherit;
}
</style>