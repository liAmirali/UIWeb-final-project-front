<template>
  <div class="bg-white shadow-lg p-4 rounded-md">
    <label class="block text-sm font-medium text-gray-700">{{ label }}</label>
    <div class="mt-1">
      <input
        :name="name"
        :type="type"
        :placeholder="placeholder"
        class="font-bold outline-none w-full"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "AppInput",
  props: {
    name: String,
    label: String,
    type: String,
    placeholder: String,
  },
};
</script>

<style></style>
