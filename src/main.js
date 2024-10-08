import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "../router";
import "tailwindcss/tailwind.css";
import { Icon } from "@iconify/vue/dist/iconify.js";

createApp(App).use(router).use(Icon).mount("#app");
