<template>
  <div
    class="bg-white shadow-lg rounded-2xl"
    :class="{ 'p-4': style === 'default', 'p-2 shadow-md': style === 'thin' }"
  >
    <label v-if="label" class="block text-sm font-medium text-gray-700">{{
      label
    }}</label>

    <div class="flex gap-2">
      <div v-if="type === 'search'" class="flex items-center w-4 h-4">
        <search-icon></search-icon>
      </div>
      <input
        @input="onInputChange"
        :name="name"
        :type="type === 'password' && isPasswordVisible ? 'text' : type"
        :placeholder="placeholder"
        class="font-semibold text-sm outline-none w-full"
      />

      <div v-if="type === 'password'" class="flex items-center">
        <button @click="isPasswordVisible = !isPasswordVisible">
          <eye-icon :type="isPasswordVisible ? 'off' : 'on'" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import EyeIcon from "../icons/EyeIcon.vue";
import SearchIcon from "../icons/SearchIcon.vue";

export default {
  components: { EyeIcon, SearchIcon },
  name: "AppInput",
  data() {
    return {
      isPasswordVisible: false,
    };
  },
  emits: ["updateInput"],
  props: {
    name: String,
    label: String,
    type: String,
    placeholder: String,
    style: {
      type: String,
      default: "default",
      validator(value) {
        return value === "thin" || value === "default";
      },
    },
  },
  methods: {
    onInputChange(event) {
      const value = event.target.value;
      this.$emit("updateInput", value);
    },
  },
};
</script>

<style></style>
