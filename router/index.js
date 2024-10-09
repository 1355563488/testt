import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/Login",
  },
  {
    path: "/Home",
    name: "Home",
    component: () => import("../src/views/HomePage.vue"),
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("../src/views/Login.vue"),
  },
];
const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
