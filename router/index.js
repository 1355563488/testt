import component from "element-plus/es/components/tree-select/src/tree-select-option.mjs";
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
        path: "/code/RecentlyVisited",
        name: "RecentlyVisited",
        component: () => import("../src/views/children/RecentlyVisited.vue"),
      },
      {
        path: "/code/SourceRepositories",
        name: "SourceRepositories",
        component: () => import("../src/views/children/SourceRepositories.vue"),
      },
      {
        path: "/code/Warehouses",
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
  {
    path: "/code",
    name: "code",
    component: () => import("../src/views/Code.vue"),
  },
];
const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
