import { createRouter, createWebHistory, createWebHashHistory  } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },

    {
      path: "/home",
      name: "home",
      alias: "/home",

      component: () => import("../views/Homeview.vue"),
      children: [
        {
          path: "league/:idLeague",
        
          component: () => import("../views/Homeview.vue"),
        },
      ],
    },
    {
      path: "/favorite",
      name: "favorite",
      component: () => import("../views/Favorites.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/About.vue"),
    },
  ],
});

export default router;
