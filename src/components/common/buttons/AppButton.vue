<template>
  <button
    class="bg-cornflower-blue-400 hover:bg-cornflower-blue-700 text-white font-bold py-3 px-4 rounded-full transition-all"
    :class="{ 'w-full': fullWidth }"
    :type="type"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    fullWidth: Boolean,
    type: {
      type: String,
      default: "button",
    },
  },
  name: "AppButton",
};
</script>

<style></style>
