<template>
  <div class="flex flex-col justify-between items-center gap-y-12">
    <h1 class="font-bold text-5xl">Email successfully activated!</h1>
    <div class="w-full flex flex-col items-center justify-center gap-y-6">
      <img src="../../../assets/illustration/email.png" width="230" />
    </div>
    <app-button :fullWidth="true">Login</app-button>
  </div>
</template>

<script>
import AppButton from "@/components/common/buttons/AppButton.vue";

export default {
  components: { AppButton },
};
</script>

<style></style>
