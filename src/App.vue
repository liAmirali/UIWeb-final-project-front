<template>
  <auth-base><verify-email email="amirali@gmail.com" /></auth-base>
</template>

<script>
import AuthBase from "./components/modules/auth/AuthBase.vue";
import CreateAccountForm from "./components/modules/auth/CreateAccountForm.vue";
import LoginForm from "./components/modules/auth/LoginForm.vue";
import VerifyEmail from './components/modules/auth/VerifyEmail.vue';

export default {
  name: "App",
  components: { AuthBase, CreateAccountForm, LoginForm, VerifyEmail },
};
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
