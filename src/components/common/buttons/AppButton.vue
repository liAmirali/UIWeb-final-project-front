<template>
  <button
    class="bg-cornflower-blue-400 hover:bg-cornflower-blue-700 text-white font-bold py-3 px-4 rounded-full transition-all"
    :class="{ 'w-full': fullWidth }"
    :type="type"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "AppButton",
  emits: ["click"],
  props: {
    fullWidth: Boolean,
    type: {
      type: String,
      default: "button",
    },
  },
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>

<style></style>
