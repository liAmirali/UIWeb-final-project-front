<template>
  <div class="bg-white shadow-lg p-1 rounded-2xl">
    <label class="block text-sm font-medium text-gray-700">{{ label }}</label>
    <div>
      <input
        :name="name"
        :type="type"
        :placeholder="placeholder"
        class="font-bold outline-none w-full px-2"
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
