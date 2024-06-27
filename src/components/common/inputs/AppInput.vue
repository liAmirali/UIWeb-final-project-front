<template>
  <div class="bg-white shadow-lg p-1 rounded-2xl">
    <label class="block text-sm font-medium text-gray-700">{{ label }}</label>

    <div class="flex">
      <input
        :name="name"
        :type="type === 'password' && isPasswordVisible ? 'text' : type"
        :placeholder="placeholder"
        class="font-bold outline-none w-full px-2"
      />

      <div v-if="type === 'password'" class="self-end">
        <button
          @click="isPasswordVisible = !isPasswordVisible"
          class="text-sm font-medium text-gray-700"
        >
          {{ isPasswordVisible ? "Hide" : "Show" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppInput",
  data() {
    return {
      isPasswordVisible: false,
    };
  },
  props: {
    name: String,
    label: String,
    type: String,
    placeholder: String,
  },
};
</script>

<style></style>
