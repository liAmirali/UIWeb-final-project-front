<template>
  <div
    class="w-[347px] rounded-xl border-solid border-black border flex flex-col py-4 px-4"
  >
    <h2 class="font-bold text-xl mb-3">{{ fileName }}</h2>
    <div class="divide-y flex flex-col">
      <div class="flex gap-x-3 py-3 items-center">
        <div class="rounded-full bg-sandy-brown-300/10 p-2 size-8">
          <img src="../../../assets/icons/Line/Share.png" alt="" />
        </div>
        <p>Share</p>
      </div>
      <div class="flex gap-x-3 py-3 items-center">
        <div class="rounded-full bg-cornflower-blue-400/10 p-2 size-8">
          <img src="../../../assets/icons/Line/Dowload.png" alt="" />
        </div>
        <p>Download</p>
      </div>
      <div class="flex gap-x-3 py-3 items-center">
        <div class="rounded-full bg-geraldine-400/10 p-2 size-8">
          <img src="../../../assets/icons/Line/Trash.png" alt="" />
        </div>
        <p>Trash</p>
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
  },
};
</script>

<style>
</style>