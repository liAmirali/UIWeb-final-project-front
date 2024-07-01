<template>
  <div class="flex flex-col justify-between items-center gap-y-12">
    <h1 class="font-bold text-5xl">Check your email</h1>
    <div class="w-full flex flex-col items-center justify-center gap-y-6">
      <img src="../../../assets/illustration/email.png" width="230" />
      <p>
        We've sent an email to <span class="font-bold">{{ email }}</span> to
        verify your account.
      </p>
    </div>
    <app-button :fullWidth="true" @click="goToLogin">Login</app-button>
  </div>
</template>

<script>
import AppButton from "@/components/common/buttons/AppButton.vue";

export default {
  components: { AppButton },
  props: {
    email: String,
  },
  methods: {
    goToLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<style></style>
