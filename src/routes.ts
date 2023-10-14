import { createRouter, createWebHashHistory } from "vue-router";
import { Home, Login, Welcome } from "./components";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: Welcome,
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/home",
      component: Home,
    },
  ],
});

export default router;
