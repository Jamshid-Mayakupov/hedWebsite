<template>
  <section class="bg-gray-50 min-h-screen">
    <!-- Hero Section -->
    <div class="bg-gradient-to-br from-Blue to-darkBlue text-white">
      <div class="section-container py-16 md:py-20">
        <div class="text-center" data-aos="fade-up" data-aos-duration="800">
          <p class="text-lightBlue font-semibold text-sm uppercase tracking-wider mb-3">
            Комплаенс
          </p>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-raleway">
            Документы комплаенса
          </h1>
          <p class="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Ознакомьтесь с нашими внутренними документами и политиками компании
          </p>
        </div>
      </div>
    </div>

    <!-- Documents Grid -->
    <div class="section-container py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div 
          v-for="(doc, index) in documents" 
          :key="index"
          class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col"
          data-aos="fade-up" 
          data-aos-duration="800"
          :data-aos-delay="index * 100"
        >
          <!-- Icon -->
          <div class="flex-1 flex items-center justify-center p-8 bg-gradient-to-br from-blue-50 to-blue-100">
            <div class="w-24 h-24 bg-Blue rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <svg class="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
              </svg>
            </div>
          </div>

          <!-- Document Name -->
          <div class="text-center py-6 px-6 flex-grow">
            <h3 class="text-xl font-bold text-gray-900 group-hover:text-Blue transition-colors">
              {{ doc.name }}
            </h3>
          </div>

          <!-- Button -->
          <div class="p-6">
            <button 
              @click="openPdf(doc.file)"
              class="w-full py-3 bg-Blue text-white rounded-lg font-semibold hover:bg-darkBlue transition-colors shadow-lg hover:shadow-xl"
            >
              Посмотреть документ
            </button>
          </div>
        </div>
      </div>
    </div>
    
  </section>
</template>

<script setup>
import hedCodeOfConduct from "@/assets/images/complains/hed_code_of_conduct.pdf"
import hedKodeksPovedeniya from "@/assets/images/complains/hed_kodeks_povedeniya.pdf"
import hedOdobAhlok from "@/assets/images/complains/hed_odob-ahlok_koidalari.pdf"

const documents = [
  { file: hedCodeOfConduct, name: "Code of Conduct" },
  { file: hedKodeksPovedeniya, name: "Кодекс поведения" },
  { file: hedOdobAhlok, name: "Одоб-Аҳлоқ Қоидалари" }
]

const openPdf = (file) => {
  window.open(file, "_blank")
}
</script>

<style scoped>
.font-raleway {
  font-family: 'Raleway', sans-serif;
}
</style>