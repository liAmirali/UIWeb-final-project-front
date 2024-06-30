<template>
  <form @submit.prevent="onFormSubmit" class="flex flex-col justify-between h-[70%]">
    <h1 class="font-bold text-5xl">Login</h1>
    <div class="space-y-6">
      <app-input
        name="username"
        label="Username | Email"
        placeholder="Enter your Username or Email"
      />
      <app-input
        name="password"
        label="Password"
        placeholder="Enter your Password"
        type="password"
      />
      <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
    </div>
    <div class="space-y-6">
      <app-button :fullWidth="true" type="submit">Login</app-button>
      <p class="text-center">
        Don't have an account?
        <a class="hover:underline text-picton-blue-300 cursor-pointer">Create Account.</a>
      </p>
    </div>
  </form>
</template>

<script>
import AppButton from "@/components/common/buttons/AppButton.vue";
import AppInput from "@/components/common/inputs/AppInput.vue";
import { fetcher } from "@/config/api";

export default {
  name: "LoginForm",
  data() {
    return { errorMessage: "" };
  },
  components: {
    AppInput,
    AppButton,
  },
  methods: {
    onFormSubmit(event) {
      this.errorMessage = "";

      const username = event.target.username.value;
      const password = event.target.password.value;

      console.log(username, password);

      fetcher
        .post("/auth/login/", { username, password })
        .then((response) => {
          const refreshToken = response.data.refresh;
          const accessToken = response.data.access;

          localStorage.setItem("refreshToken", refreshToken);
          localStorage.setItem("accessToken", accessToken);

          this.$router.push("/");
        })
        .catch((error) => {
          if (error?.response?.data?.detail) this.errorMessage = error.response.data.detail;
          else {
            this.errorMessage = "An unexpected error happened.";
            console.error("The unexpected error that happened:", error);
          }
        });
    },
  },
};
</script>

<style></style>
