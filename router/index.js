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
    children: [
      {
        path: "/Home/RecentlyVisited",
        name: "RecentlyVisited",
        component: () => import("../src/views/children/RecentlyVisited.vue"),
      },
      {
        path: "/Home/SourceRepositories",
        name: "SourceRepositories",
        component: () => import("../src/views/children/SourceRepositories.vue"),
      },
      {
        path: "/Home/Warehouses",
        name: "Warehouses",
        component: () => import("../src/views/children/Warehouses.vue"),
      },
    ],
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
