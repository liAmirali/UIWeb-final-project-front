<template>
  <auth-base><login-form /></auth-base>
</template>

<script>
import AuthBase from "./components/modules/auth/AuthBase.vue";
import CreateAccountForm from "./components/modules/auth/CreateAccountForm.vue";
import LoginForm from "./components/modules/auth/LoginForm.vue";

export default {
  name: "App",
  components: { AuthBase, CreateAccountForm, LoginForm },
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
