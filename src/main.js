import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "../router";
import "tailwindcss/tailwind.css";
import { Icon } from "@iconify/vue/dist/iconify.js";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

createApp(App).use(router).use(ElementPlus).use(Icon).mount("#app");
