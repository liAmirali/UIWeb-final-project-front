import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { createRouter, createMemoryHistory } from "vue-router";

import LoginPage from "./components/modules/auth/LoginPage.vue";
import RegisterPage from "./components/modules/auth/RegisterPage.vue";
import VerifyEmail from "./components/modules/auth/VerifyEmail.vue";
import ObjectsPage from "./components/modules/objects/ObjectsPage.vue"

const routes = [
  { path: "/login", component: LoginPage },
  { path: "/register", component: RegisterPage },
  { path: "/verify", component: VerifyEmail },
  { path: "", component: ObjectsPage },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
