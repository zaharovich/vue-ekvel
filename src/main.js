import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router"; // Импорт необходимых объектов из vue-router
import router from "./router/index.js";

const app = createApp(App);
app.use(
  createRouter({
    history: createWebHistory(),
    routes: router.options.routes, // передаем маршруты в маршрутизатор
  })
);
app.mount("#app");
