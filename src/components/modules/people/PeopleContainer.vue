<template>
  <div class="w-[400px] rounded-3xl border bg-neutral-50 overflow-hidden">
    <div class="flex h-16 items-center justify-center">
      <div class="flex absolute left-3"><back-button></back-button></div>
      <p class="text-xl font-semibold">Add People</p>
    </div>
    <div class="px-3 mb-5">
      <app-input placeholder="Search people" :style="'thin'"></app-input>
    </div>
    <div class="max-h-96 overflow-auto space-y-3 px-3">
      <people-item
        name="Asal"
        email="asal.khaef@gmail.com"
        pictureUrl="/Avatar.png"
      ></people-item>
      <people-item
        name="Asal"
        email="asal.khaef@gmail.com"
        pictureUrl="/Avatar.png"
      ></people-item>
      <people-item
        name="Asal"
        email="asal.khaef@gmail.com"
        pictureUrl="/Avatar.png"
      ></people-item>
      <people-item
        name="Asal"
        email="asal.khaef@gmail.com"
        pictureUrl="/Avatar.png"
      ></people-item>
      <people-item
        name="Asal"
        email="asal.khaef@gmail.com"
        pictureUrl="/Avatar.png"
      ></people-item>
      <people-item
        name="Asal"
        email="asal.khaef@gmail.com"
        pictureUrl="/Avatar.png"
      ></people-item>
      <people-item
        name="Asal"
        email="asal.khaef@gmail.com"
        pictureUrl="/Avatar.png"
      ></people-item>
      <people-item
        name="Asal"
        email="asal.khaef@gmail.com"
        pictureUrl="/Avatar.png"
      ></people-item>
    </div>
    <div class="flex justify-between p-3 bg-white items-center">
      <div class="flex">
        <img class="rounded-full size-8 border" src="/Avatar.png" alt="" />
        <img
          class="rounded-full size-8 border -ml-2"
          src="/Avatar.png"
          alt=""
        />
        <img
          class="rounded-full size-8 border -ml-2"
          src="/Avatar.png"
          alt=""
        />
      </div>
      <app-button>Continue</app-button>
    </div>
  </div>
</template>

<script>
import BackButton from "@/components/common/buttons/BackButton.vue";
import PeopleItem from "./PeopleItem.vue";
import AppInput from "@/components/common/inputs/AppInput.vue";
import AppButton from "@/components/common/buttons/AppButton.vue";
export default {
  components: { BackButton, PeopleItem, AppInput, AppButton },
};
</script>

<style>
</style>