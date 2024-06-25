<template>
  <div class="flex justify-between items-center gap-x-3">
    <img class="w-12 h-12 rounded-full" :src="pictureUrl" alt="" />
    <p>{{ name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    pictureUrl: String,
  },
};
</script>

<style>
</style>