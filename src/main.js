import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { createRouter, createWebHistory } from "vue-router";

import LoginPage from "./components/modules/auth/LoginPage.vue";
import RegisterPage from "./components/modules/auth/RegisterPage.vue";
import VerifyEmailPage from "./components/modules/auth/VerifyEmailPage.vue";
import ObjectsPage from "./components/modules/objects/ObjectsPage.vue";
import ActivateEmailPage from "./components/modules/auth/ActivateEmailPage.vue";

const routes = [
  { path: "/", component: ObjectsPage },
  { path: "/login", component: LoginPage },
  { path: "/register", component: RegisterPage },
  { path: "/verify", component: VerifyEmailPage },
  { path: "/activation-complete", component: ActivateEmailPage },
  { path: "/:pathMatch(.*)*", redirect: "/" }, // Redirect any unknown paths to the /
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
