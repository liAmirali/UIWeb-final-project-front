<template>
  <div class="flex justify-between items-center px-6 py-4 gap-x-24">
    <h2 class="text-cornflower-blue-400 font-bold">Storage</h2>
    <div class="grow">
      <div class="w-1/2">
        <app-input placeholder="Search"></app-input>
      </div>
    </div>
    <div class="flex justify-between gap-x-4">
      <app-button>Login</app-button>
      <app-avatar :name="user.name" :pictureUrl="user.pictureUrl" />
    </div>
  </div>
</template>

<script>
import AppButton from "@/components/common/buttons/AppButton.vue";
import AppInput from "@/components/common/inputs/AppInput.vue";
import AppAvatar from "@/components/common/AppAvatar.vue";
export default {
  name: "TheHeader",
  data() {
    return {
      user: {
        name: "Asal",
        pictureUrl: "http://localhost:8080/Avatar.png",
      },
    };
  },
  components: {
    AppButton,
    AppInput,
    AppAvatar,
  },
};
</script>

<style>
</style>