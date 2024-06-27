<template>
  <verify-email-page />
</template>

<script>
import VerifyEmailPage from "./components/modules/auth/VerifyEmailPage.vue";
// import LoginPage from "./components/modules/auth/LoginPage.vue";
// import RegisterPage from "./components/modules/auth/RegisterPage.vue";
export default {
  name: "App",
  components: {
    // LoginPage,
    // RegisterPage,
    VerifyEmailPage,
  },
};
</script>

<style>
CreateAccountForm #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
