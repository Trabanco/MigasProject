import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/carritoRecetas",
      name: "carritoRecetas",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/carritoRecetasView.vue"),
    },
    {
      path: "/bizcochos",
      name: "bizcochos",
      component: () => import("../views/BizcochosView.vue"),
    },
    {
      path: "/galletas",
      name: "galletas",
      component: () => import("../views/GalletasView.vue"),
    },
    {
      path: "/tartas",
      name: "tartas",
      component: () => import("../views/TartasView.vue"),
    },
    {
      path: "/añadirRecetas",
      name: "añadirRecetas",
      component: () => import("../views/AñadirRecetasView.vue"),
    },
  ],
});

export default router;
