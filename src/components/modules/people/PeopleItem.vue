<template>
  <div class="flex gap-x-3 items-center">
    <input type="checkbox" checked="checked" />
    <div class="size-8">
      <img class="rounded-full" :src="pictureUrl" alt="" />
    </div>
    <div class="flex flex-col">
      <p class="text-sm font-semibold">{{ name }}</p>
      <p class="text-sm text-gray-400">{{ email }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pictureUrl: String,
    name: String,
    email: String,
  },
};
</script>

<style>
</style>