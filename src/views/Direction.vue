<template>
  <section class="directions-section">
    <div class="container">
      <h1 class="section-title">Направления</h1>

      <!-- 1. TABS (5 TA TUGMA BIR QATORDA RASMLARI BILAN) -->
      <div class="tabs-wrapper">
        <!-- 1. Albadent (Tashqi link) -->
        <a 
          href="https://jamshid-mayakupov.github.io/albaWebsite/" 
          target="_blank" 
          class="tab-btn tab-btn--external"
        >
          <img :src="img1" alt="Albadent" class="tab-img" />
          <span>Albadent</span>
          <svg class="external-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>

        <!-- 2. Daantec (Tashqi link) -->
        <a 
          href="https://jamshid-mayakupov.github.io/daantecWebSite/" 
          target="_blank" 
          class="tab-btn tab-btn--external"
        >
          <img :src="img2" alt="Daantec" class="tab-img" />
          <span>Daantec</span>
          <svg class="external-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      


                <a 
          href="https://jamshid-mayakupov.github.io/turonWebSite/" 
          target="_blank" 
          class="tab-btn tab-btn--external"
        >
          <img :src="img6" alt="Daantec" class="tab-img" />
          <span>Turon analystic</span>
          <svg class="external-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
                <a 
          href="https://jamshid-mayakupov.github.io/uritWebSite/" 
          target="_blank" 
          class="tab-btn tab-btn--external"
        >
          <img :src="img7" alt="Daantec" class="tab-img" />
          <span>Urit site</span>
          <svg class="external-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
        <button 
          class="tab-btn" 
          :class="{ 'is-active': activeTab === 'aortika' }"
          @click="activeTab = 'aortika'"
        >
          <img :src="img3" alt="Aortika" class="tab-img" />
          <span>Aortika</span>
        </button>

        <button 
          class="tab-btn" 
          :class="{ 'is-active': activeTab === 'marketing' }"
          @click="activeTab = 'marketing'"
        >
          <img :src="img4" alt="Head Marketing" class="tab-img" />
          <span>Head Marketing</span>
        </button>

        <!-- 5. Neatron (Ichki tab) -->
        <button 
          class="tab-btn" 
          :class="{ 'is-active': activeTab === 'neatron' }"
          @click="activeTab = 'neatron'"
        >
          <img :src="img5" alt="Neatron" class="tab-img" />
          <span>Neatron</span>
        </button>
      </div>

      <!-- 2. SAHIFA KONTENTLARI (HERO BANNERDA HAM SHU RASMLAR ISHLATILADI) -->
      <div class="content-display">

        <!-- AORTIKA -->
        <div v-if="activeTab === 'aortika'" class="page-block fade-in">
          <div class="hero-card">
            <div class="hero-text">
              <span class="badge">Медицина & Кардиология</span>
              <h2>Aortika — Передовые решения в медицине</h2>
              <p>Мы поставляем высокотехнологичное кардиологическое и медицинское оборудование мирового уровня для клиник и медицинских центров.</p>
            </div>
            <div class="hero-img-box">
              <img :src="img3" alt="Aortika" />
            </div>
          </div>

          <div class="features-grid">
            <div class="f-card">
              <h3>Высокая точность</h3>
              <p>Современное оборудование для точной диагностики сердечно-сосудистой системы.</p>
            </div>
            <div class="f-card">
              <h3>Сертификация</h3>
              <p>Вся продукция отвечает международным стандартам качества ISO и CE.</p>
            </div>
            <div class="f-card">
              <h3>Сервисная поддержка</h3>
              <p>Круглосуточный инжиниринговый сервис и обслуживание медицинской техники.</p>
            </div>
          </div>
        </div>

        <!-- HEAD MARKETING -->
        <div v-else-if="activeTab === 'marketing'" class="page-block fade-in">
          <div class="hero-card hero-card--marketing">
            <div class="hero-text">
              <span class="badge">Маркетинг & Аналитика</span>
              <h2>Head Marketing — Стратегии роста вашего бизнеса</h2>
              <p>Полный спектр маркетинговых услуг: SEO, таргетинг, бренд-стратегия и аналитика данных для комплексного развития.</p>
            </div>
            <div class="hero-img-box">
              <img :src="img4" alt="Head Marketing" />
            </div>
          </div>

          <div class="features-grid">
            <div class="f-card">
              <h3>SEO & Performance</h3>
              <p>Вывод сайтов в топ поиска и масштабирование трафика через цифровую рекламу.</p>
            </div>
            <div class="f-card">
              <h3>SMM & Контент</h3>
              <p>Создание уникального имиджа бренда в социальных сетях и работа с аудиторией.</p>
            </div>
            <div class="f-card">
              <h3>Сквозная аналитика</h3>
              <p>Настройка отслеживания всех этапов продаж для максимальной окупаемости ROMI.</p>
            </div>
          </div>
        </div>

        <!-- NEATRON -->
        <div v-else-if="activeTab === 'neatron'" class="page-block fade-in">
          <div class="hero-card hero-card--neatron">
            <div class="hero-text">
              <span class="badge">IT-Решения & Разработка</span>
              <h2>Neatron — Инновационные IT-платформы</h2>
              <p>Разработка сложного программного обеспечения, автоматизация бизнес-процессов и высоконагруженные облачные системы.</p>
            </div>
            <div class="hero-img-box">
              <img :src="img5" alt="Neatron" />
            </div>
          </div>

          <div class="features-grid">
            <div class="f-card">
              <h3>Web & App Разработка</h3>
              <p>Проектирование и создание масштабируемых веб-сервисов и мобильных приложений.</p>
            </div>
            <div class="f-card">
              <h3>Автоматизация CRM/ERP</h3>
              <p>Внедрение цифровых экосистем для управления предприятием и аналитики.</p>
            </div>
            <div class="f-card">
              <h3>Кибербезопасность</h3>
              <p>Защита корпоративных данных, аудит систем и построение надежных серверов.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

import img1 from '@/assets/images/direction/image.png'
import img2 from '@/assets/images/direction/image copy.png'
import img3 from '@/assets/images/direction/image copy 2.png'
import img4 from '@/assets/images/direction/image copy 3.png'
import img5 from '@/assets/images/direction/image copy 4.png'
import img6 from '@/assets/images/direction/image copy 5.png'
import img7 from '@/assets/images/direction/image copy 6.png'

const activeTab = ref('aortika')
</script>

<style scoped>
.directions-section {
  width: 100%;
  padding: 50px 0;
  background-color: #f8fafc;
  min-height: 80vh;
}

.container {
  max-width: 1250px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  font-size: 32px;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 30px;
}

/* TABS STYLES */
.tabs-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 35px;
}

.tab-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  border-radius: 12px;
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  color: #334155;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
  text-decoration: none;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}

.tab-btn:hover {
  border-color: #cbd5e1;
  background-color: #f1f5f9;
}

/* Tab ichidagi rasmcha */
.tab-img {
  width: 24px;
  height: 24px;
  object-fit: cover;
  border-radius: 6px;
}

/* Aktiv holatdagi ko'k tab */
.tab-btn.is-active {
  background-color: #2563eb;
  border-color: #2563eb;
  color: #ffffff;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25);
}

.tab-btn--external .external-arrow {
  opacity: 0.5;
  transition: opacity 0.2s;
}

.tab-btn--external:hover .external-arrow {
  opacity: 1;
}

/* PAGE CONTENT STYLES */
.content-display {
  width: 100%;
}

.fade-in {
  animation: fadeIn 0.35s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-card {
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  border-radius: 20px;
  padding: 40px;
  color: #ffffff;
  margin-bottom: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  box-shadow: 0 10px 30px rgba(37, 99, 235, 0.15);
}

.hero-card--marketing {
  background: linear-gradient(135deg, #0f172a 0%, #2563eb 100%);
}

.hero-card--neatron {
  background: linear-gradient(135deg, #0284c7 0%, #0f172a 100%);
}

.hero-text {
  flex: 1;
}

.hero-img-box {
  width: 280px;
  height: 180px;
  border-radius: 14px;
  overflow: hidden;
  flex-shrink: 0;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.hero-img-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 15px;
}

.hero-text h2 {
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 12px 0;
}

.hero-text p {
  font-size: 16px;
  opacity: 0.9;
  line-height: 1.5;
  margin: 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.f-card {
  background: #ffffff;
  padding: 25px;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
}

.f-card h3 {
  font-size: 18px;
  font-weight: 600;
  color: #0f172a;
  margin: 0 0 10px 0;
}

.f-card p {
  font-size: 14px;
  color: #64748b;
  line-height: 1.5;
  margin: 0;
}

@media (max-width: 850px) {
  .hero-card {
    flex-direction: column;
    text-align: center;
  }
  .hero-img-box {
    width: 100%;
    height: 200px;
  }
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>