import { createRouter, createWebHashHistory } from "vue-router"; // Импорт необходимых объектов из vue-router
import MainLayout from "@/layouts/MainLayout.vue"; // Импорт компонента макета
import Home from "@/views/HomePage.vue"; // Импорт компонента страницы Home

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: MainLayout,
      children: [
        {
          path: "",
          component: Home,
        },
      ],
    },
  ],
});

export default router;
