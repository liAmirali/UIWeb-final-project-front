<template>
  <div class="flex flex-col">
    <h1 class="font-bold text-5xl">Create Account</h1>
    <div class="space-y-6">
      <app-input label="Username" placeholder="Enter your Username" />
      <app-input label="Email" placeholder="Enter your Username" />
      <app-input label="Password" placeholder="Enter your Password" type="Password" />
      <app-input label="Confirm Password" placeholder="Confirm Password" type="Password" />
      <app-button :fullWidth="true">Create Account</app-button>
      <p class="text-center">
        Already have an account?
        <a class="hover:underline text-picton-blue-300 cursor-pointer">Login</a>
      </p>
    </div>
  </div>
</template>

<script>
import AppButton from "@/components/common/buttons/AppButton.vue";
import AppInput from "@/components/common/inputs/AppInput.vue";

export default {
  components: {
    AppInput,
    AppButton,
  },
};
</script>

<style></style>
