<template>
  <router-view></router-view>
</template>

<script>
import { fetcher } from "@/config/api";

export default {
  name: "App",
  mounted() {
    this.checkLogin();
  },
  methods: {
    checkLogin() {
      const accessToken = localStorage.getItem("accessToken");
      if (accessToken === null) {
        this.$router.push("/login");
      } else {
        fetcher
          .post("/auth/verify/", { token: accessToken })
          .then((res) => {
            // Handle success
            localStorage.setItem("user", JSON.stringify(res.data.user));
            this.$router.push("/");
          })
          .catch((error) => {
            // Handle error
            if (error.response.status === 401) {
              this.$router.push("/login");
            }
          });
      }
    },
  },
};
</script>

<style>
#app {
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
