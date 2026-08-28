<template>
  <section class="independence-hero relative w-full overflow-hidden" aria-labelledby="independence-title">
    <!-- Temporarily disabled for the Independence Day greeting. -->
    <!-- <VideoLoad class="absolute inset-0 z-0 h-full w-full object-cover" /> -->

    <img
      :src="independenceMonument"
      alt=""
      class="hero-photo absolute inset-0 h-full w-full object-cover"
      aria-hidden="true"
    />
    <div class="hero-shade absolute inset-0" aria-hidden="true"></div>
    <div class="hero-grain absolute inset-0" aria-hidden="true"></div>

    <div class="relative z-10 mx-auto flex min-h-[inherit] w-full max-w-7xl items-center px-4 pb-20 pt-28 sm:px-6 sm:pt-32 lg:px-8">
      <div class="grid w-full items-center gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.65fr)] lg:gap-16">
        <div class="max-w-4xl text-white">
          <div
            class="mb-7 flex items-center gap-4"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <span class="flag-line" aria-hidden="true"></span>
            <p class="m-0 text-xs font-semibold uppercase tracking-[0.24em] text-white/80 sm:text-sm">
              1 сентября · 1991—2026
            </p>
          </div>

          <h1
            id="independence-title"
            class="font-raleway text-[2.6rem] font-extrabold leading-[0.96] tracking-[-0.035em] text-white sm:text-7xl lg:text-[5.5rem] xl:text-[6.5rem]"
            data-aos="fade-up"
            data-aos-duration="850"
            data-aos-delay="100"
          >
            <span class="block">35 лет</span>
            <span class="mt-2 block text-cyan-200">независимости</span>
          </h1>

          <p
            class="mt-7 font-raleway text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl"
            data-aos="fade-up"
            data-aos-duration="850"
            data-aos-delay="250"
          >
            С праздником, Узбекистан!
          </p>

          <p
            class="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg lg:text-xl"
            data-aos="fade-up"
            data-aos-duration="850"
            data-aos-delay="350"
          >
            Компания HED сердечно поздравляет соотечественников с 35-летием государственной
            независимости. Желаем нашей стране мира и процветания, а каждой семье — благополучия,
            здоровья и уверенности в будущем.
          </p>

          <blockquote
            class="mt-8 max-w-2xl border-l-2 border-amber-300/80 pl-5 text-sm font-medium italic leading-relaxed text-white/75 sm:text-base"
            data-aos="fade-up"
            data-aos-duration="850"
            data-aos-delay="450"
          >
            «Yagona Vatan, yagona xalq bo‘lib, yangi hayot va kelajak yaratamiz!»
          </blockquote>
        </div>

        <div
          class="anniversary-card mx-auto w-full max-w-[290px] rounded-3xl border border-white/35 bg-white/90 p-5 shadow-2xl backdrop-blur-xl sm:max-w-[330px] sm:p-7 lg:justify-self-end"
          data-aos="fade-left"
          data-aos-duration="900"
          data-aos-delay="250"
        >
          <img
            :src="independenceLogo"
            alt="Официальная эмблема 35-летия независимости Узбекистана"
            class="mx-auto h-auto w-full"
          />
          <div class="mt-4 border-t border-slate-200 pt-4 text-center">
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">HED поздравляет</p>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute inset-x-0 bottom-0 z-10 grid grid-cols-[1fr_6px_1.6fr_6px_1fr]" aria-hidden="true">
      <span class="h-1.5 bg-[#16a7dc]"></span>
      <span class="h-1.5 bg-[#cf2634]"></span>
      <span class="h-1.5 bg-white"></span>
      <span class="h-1.5 bg-[#cf2634]"></span>
      <span class="h-1.5 bg-[#18a558]"></span>
    </div>
  </section>
</template>

<script setup>
// Official 35th-anniversary assets: https://mustaqillik35.uz/ and https://ed1.customs.uz/
import independenceLogo from '@/assets/images/independence-35-emblem.png'
import independenceMonument from '@/assets/images/independence-monument.jpg'

// Temporarily disabled for the Independence Day greeting.
// import VideoLoad from '@/components/VideoLoad.vue'
</script>

<style scoped>
.font-raleway {
  font-family: 'Raleway', sans-serif;
}

.independence-hero {
  min-height: max(100vh, 720px);
  background: #06172a;
}

.hero-photo {
  object-position: 50% 58%;
}

.hero-shade {
  background:
    linear-gradient(90deg, rgba(4, 17, 34, 0.96) 0%, rgba(4, 22, 42, 0.86) 43%, rgba(5, 30, 50, 0.42) 70%, rgba(3, 16, 30, 0.58) 100%),
    linear-gradient(180deg, rgba(2, 11, 23, 0.52) 0%, transparent 32%, rgba(2, 12, 24, 0.64) 100%);
}

.hero-grain {
  opacity: 0.08;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.7'/%3E%3C/svg%3E");
  pointer-events: none;
}

.flag-line {
  width: 64px;
  height: 3px;
  background: linear-gradient(90deg, #16a7dc 0 30%, #ffffff 30% 65%, #18a558 65% 100%);
  box-shadow: 0 1px 0 #cf2634;
}

.anniversary-card {
  box-shadow: 0 28px 70px rgba(0, 8, 20, 0.38);
}

@media (max-width: 1023px) {
  .independence-hero {
    min-height: 100vh;
  }

  .hero-photo {
    object-position: 53% 50%;
  }

  .hero-shade {
    background:
      linear-gradient(180deg, rgba(3, 16, 31, 0.78) 0%, rgba(3, 19, 36, 0.86) 48%, rgba(2, 13, 27, 0.96) 100%),
      linear-gradient(90deg, rgba(3, 17, 34, 0.54), rgba(3, 17, 34, 0.35));
  }
}

@media (prefers-reduced-motion: reduce) {
  .independence-hero [data-aos] {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}
</style>
