<template>
  <auth-base>hierere</auth-base>
</template>

<script>
import AuthBase from "./components/modules/auth/AuthBase.vue";

export default {
  name: "App",
  components: { AuthBase },
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
