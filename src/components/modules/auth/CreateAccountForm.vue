<template>
  <form
    @submit.prevent="onFormSubmit"
    class="flex flex-col justify-between min-h-[75%]"
  >
    <h1 class="font-bold text-5xl">Create Account</h1>
    <div class="space-y-6">
      <app-input
        name="username"
        label="Username"
        placeholder="Enter your Username"
      />
      <app-input name="email" label="Email" placeholder="Enter your Username" />
      <app-input
        name="password1"
        label="Password"
        placeholder="Enter your Password"
        type="Password"
      />
      <app-input
        name="password2"
        label="Confirm Password"
        placeholder="Confirm Password"
        type="Password"
      />
      <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
    </div>
    <div class="space-y-6">
      <app-button :fullWidth="true" type="submit">Create Account</app-button>
      <p class="text-center">
        Already have an account?
        <a class="hover:underline text-picton-blue-300 cursor-pointer">Login</a>
      </p>
    </div>
  </form>
</template>

<script>
import AppButton from "@/components/common/buttons/AppButton.vue";
import AppInput from "@/components/common/inputs/AppInput.vue";
import { fetcher } from "@/config/api";

export default {
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
      const email = event.target.email.value;
      const password1 = event.target.password1.value;
      const password2 = event.target.password2.value;

      console.log(username, email, password1, password2);

      fetcher
        .post("/auth/signup/", {
          username: "username",
          password: "password1",
          email: "email",
        })
        .then(() => {
          this.$router.push("/verify");
        })
        .catch((error) => {
          if (error?.response?.data?.detail)
            this.errorMessage = error.response.data.detail;
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
