<template>
  <auth-base><activate-email /></auth-base>
</template>

<script>
import AuthBase from "./AuthBase.vue";
import ActivateEmail from "./ActivateEmail.vue";
import { fetcher } from "@/config/api";

export default {
  components: { AuthBase, ActivateEmail },
  mounted() {
    this.activateAccount();
  },
  methods: {
    activateAccount() {
      // Function to get query parameters
      const queryParams = new URLSearchParams(window.location.search);
      const uid = queryParams.get("uid");
      const token = queryParams.get("token");

      if (uid && token) {
        fetcher
          .get("/auth/login/", {
            params: {
              uid: uid,
              token: token,
            },
          })
          .then((response) => {
            // Handle success
            console.log("Activation successful:", response.data);
            this.message = "Email verified successfully";
          })
          .catch((error) => {
            // Handle error
            console.error("Activation failed:", error.response.data);
            this.error = "Activation link is invalid";
          });
      } else {
        console.error("Invalid query parameters");
        this.error = "Invalid activation link";
      }
    },
  },
};
</script>

<style></style>
