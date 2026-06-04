import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./index.css";
import "./style.css";
import "./assets/sass/main.scss";

import AOS from "aos";
import "aos/dist/aos.css";

const app = createApp(App);

app.use(router);
app.mount("#app");

AOS.init({
  duration: 800,
  once: false,
  mirror: true,
});

router.afterEach(() => {
  setTimeout(() => {
    AOS.refresh();
  }, 100);
});
