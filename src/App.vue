<template>
  <auth-base><create-account-form-vue /></auth-base>
</template>

<script>
import AuthBase from "./components/modules/auth/AuthBase.vue";
import CreateAccountFormVue from "./components/modules/auth/CreateAccountForm.vue";

export default {
  name: "App",
  components: { AuthBase, CreateAccountFormVue },
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
