<template>
  <!-- <auth-base><verify-email email="amirali@gmail.com" /></auth-base> -->
  <!-- <auth-base><login-form /></auth-base> -->
  <the-header></the-header>
  <!-- <auth-base><create-account-form /></auth-base> -->
</template>

<script>
// import AuthBase from "./components/modules/auth/AuthBase.vue";
// import CreateAccountForm from "./components/modules/auth/CreateAccountForm.vue";
// import LoginForm from "./components/modules/auth/LoginForm.vue";
import TheHeader from "./components/modules/objects/TheHeader.vue";
// import VerifyEmail from "./components/modules/auth/VerifyEmail.vue";

export default {
  name: "App",
  components: {
    // AuthBase,
    // CreateAccountForm,
    // VerifyEmail,
    // LoginForm,
    TheHeader,
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
