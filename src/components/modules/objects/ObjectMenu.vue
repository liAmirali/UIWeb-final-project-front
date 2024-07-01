<template>
  <div
    class="rounded-xl flex flex-col py-4 px-4 bg-white shadow-lg z-10 relative"
  >
    <p class="font-semibold mb-3">{{ fileName }}</p>
    <div class="divide-y flex flex-col">
      <div v-if="accessType === 'owner'" class="flex gap-x-3 pb-2 items-center">
        <div class="rounded-full bg-sandy-brown-300/10 p-[0.6rem] size-8">
          <img src="../../../assets/icons/Line/Share.svg" alt="" />
        </div>
        <p class="text-sm">Share</p>
      </div>
      <div class="flex gap-x-3 py-2 items-center">
        <div class="rounded-full bg-cornflower-blue-400/10 p-[0.6rem] size-8">
          <img src="../../../assets/icons/Line/Dowload.svg" alt="" />
        </div>
        <p class="text-sm">Download</p>
      </div>
      <div v-if="accessType === 'owner'" class="flex gap-x-3 pt-2 items-center">
        <div class="rounded-full bg-geraldine-400/10 p-[0.6rem] size-8">
          <img src="../../../assets/icons/Line/Trash.svg" alt="" />
        </div>
        <p class="text-sm">Trash</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    fileName: {
      type: String,
      required: true,
    },
    accessType: {
      type: String,
      required: true,
      validator(value) {
        return value === "owner" || value === "viewer";
      },
    },
  },
};
</script>

<style>
</style>