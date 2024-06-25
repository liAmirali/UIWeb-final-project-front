<template>
  <div class="flex flex-col justify-between h-[70%]">
    <h1 class="font-bold text-5xl">Login</h1>
    <div class="space-y-6">
      <app-input
        label="Username | Email"
        placeholder="Enter your Username or Email"
      />
      <app-input
        label="Password"
        placeholder="Enter your Password"
        type="Password"
      />
    </div>
    <div class="space-y-6">
      <app-button :fullWidth="true">Login</app-button>
      <p class="text-center">
        Don't have an account?
        <a class="hover:underline text-picton-blue-300 cursor-pointer"
          >Create Account.</a
        >
      </p>
    </div>
  </div>
</template>

<script>
import AppButton from "@/components/common/buttons/AppButton.vue";
import AppInput from "@/components/common/inputs/AppInput.vue";

export default {
  name: "LoginForm",
  components: {
    AppInput,
    AppButton,
  },
};
</script>

<style></style>
