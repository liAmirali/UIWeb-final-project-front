<template>
  <router-view></router-view>
  <people-item></people-item>
</template>

<script>
import PeopleItem from "./components/modules/people/PeopleItem.vue";
export default {
  components: { PeopleItem },
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
