<template>
    <section>
        <div class="container">
            <h1 class="ourteam__title">
                Наша команда 
            </h1>
        <div class="ourteam">
            <div class="ourteam__card reveal">
                <img src="../assets/images/ourteamimages/IMG_1.JPG" alt="">
                <h2 class="ourteam__card-title">Примов С.Б</h2>
                <p class="ourteam__card-text">Соучредитель и Председатель</p>
            </div>
            <div class="ourteam__card reveal">
                <img src="../assets/images/ourteamimages/IMG_2.JPG" alt="">
                <h2 class="ourteam__card-title">Хасанжон Собиржонов</h2>
                <p class="ourteam__card-text">Директор</p>
            </div>
            <div class="ourteam__card reveal">
                <img src="../assets/images/ourteamimages/IMG_3.JPG" alt="">
                <h2 class="ourteam__card-title">Одил Набиев</h2>
                <p class="ourteam__card-text">Финансовый аналитик</p>
            </div>
            <div class="ourteam__card reveal">
                <img src="../assets/images/ourteamimages/IMG_4.JPG" alt="">
                <h2 class="ourteam__card-title">Шодиер Уринов</h2>
                <p class="ourteam__card-text">Финансист</p>
            </div>
            <div class="ourteam__card reveal">
                <img src="../assets/images/ourteamimages/IMG_5.JPG" alt="">
                <h2 class="ourteam__card-title">Шахло Примова</h2>
                <p class="ourteam__card-text">Руководитель</p>
                <p class="ourteam__card-text">административного отдела</p>
            </div>
            <div class="ourteam__card reveal">
                <img src="../assets/images/ourteamimages/IMG_6.JPG" alt="">
                <h2 class="ourteam__card-title">Нодир Ахунджанов</h2>
                <p class="ourteam__card-text">Главный специалист по ВЭД</p>
            </div>
            <div class="ourteam__card reveal">
                <img src="../assets/images/ourteamimages/IMG_7.JPG" alt="">
                <h2 class="ourteam__card-title">Жамшид Маякубов</h2>
                <p class="ourteam__card-text">Руководитель IT-отдела</p>
            </div>
            <div class="ourteam__card reveal">
                <img src="../assets/images/ourteamimages/IMG_8.JPG" alt="">
                <h2 class="ourteam__card-title">Полина Коршунова</h2>
                <p class="ourteam__card-text">Главный бухгалтер</p>
            </div>
            <div class="ourteam__card reveal">
                <img src="../assets/images/ourteamimages/IMG_9.JPG" alt="">
                <h2 class="ourteam__card-title">Алишер Мадаминов</h2>
                <p class="ourteam__card-text">Руководитель проекта</p>
                <p class="ourteam__card-text">HED Marketing</p>
            </div>
            <div class="ourteam__card reveal">
                <img src="../assets/images/ourteamimages/IMG_10.JPG" alt="">
                <h2 class="ourteam__card-title">Жамшид Барнаев</h2>
                <p class="ourteam__card-text">Руководитель проекта Neotron</p>
            </div>
            <div class="ourteam__card reveal">
                <img src="../assets/images/ourteamimages/IMG_11.JPG" alt="">
                <h2 class="ourteam__card-title">Сардор Кузибеков</h2>
                <p class="ourteam__card-text">уководитель проекта AORTICA</p>
            </div>
            <div class="ourteam__card reveal">
                <img src="../assets/images/ourteamimages/IMG_12.JPG" alt="">
                <h2 class="ourteam__card-title">Азизжон Раимджонов</h2>
                <p class="ourteam__card-text">Заведующий складом</p>
            </div>
            <div class="ourteam__card reveal">
                <img src="../assets/images/ourteamimages/IMG_13.JPG" alt="">
                <h2 class="ourteam__card-title">Достон Нарзуллаев</h2>
                <p class="ourteam__card-text">Работник склада</p>
            </div>
        </div>
        </div>
    </section>
  </template>
  
  <script setup>
    import { onMounted } from "vue";

    onMounted(() => {
    const reveals = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
        reveals.forEach((item) => {
        const windowHeight = window.innerHeight;
        const elementTop = item.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            item.classList.add("active");
        }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
    });
  </script>
  