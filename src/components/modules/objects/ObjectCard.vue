<template>
  <div
    class="flex h-20 bg-white rounded-xl items-center px-4 relative"
    @click="openMenu"
    @contextmenu.prevent="openMenu"
  >
    <div class="rounded-full bg-cornflower-blue-400/10 size-12 flex items-center justify-center">
      <img v-if="file.type === 'music'" src="../../../assets/icons/File Types/music.svg" alt="" />
      <img v-if="file.type === 'others'" src="../../../assets/icons/File Types/Others.svg" alt="" />
      <img v-if="file.type === 'voice'" src="../../../assets/icons/File Types/Voice.svg" alt="" />
      <img v-if="file.type === 'pdf'" src="../../../assets/icons/File Types/PDF.svg" alt="" />
      <img v-if="file.type === 'audio'" src="../../../assets/icons/File Types/Audio.svg" alt="" />
    </div>

    <div class="px-4">
      <p className="text-xs font-semibold">{{ file.name }}</p>
      <p class="text-gray-400 text-xs">
        {{ file.size + " - " + file.created }}
      </p>
    </div>

    <div class="ml-auto" @click.stop="toggleMenu">
      <img src="../../../assets/icons/Line/Option.svg" alt="" />
    </div>

    <div v-if="menuOpen" class="absolute top-0 left-0s">
      <object-menu :fileName="file.name" :accessType="'owner'"></object-menu>
    </div>
  </div>
</template>

<script>
import ObjectMenu from "./ObjectMenu.vue";

export default {
  name: "ObjectCard",
  components: { ObjectMenu },
  props: {
    file: {
      type: Object,
      required: true,
      validator(value) {
        return (
          typeof value.id === "number" &&
          typeof value.name === "string" &&
          typeof value.size === "number" &&
          typeof value.created === "string" &&
          typeof value.type === "string"
        );
      },
    },
  },
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    openMenu(event) {
      // Open menu on left click or right-click
      if (event.type === "click" || event.type === "contextmenu") {
        this.menuOpen = true;
      }
    },
  },
  mounted() {
    // Close menu when clicking outside of the card
    document.addEventListener("click", this.closeMenuOnClickOutside);
    document.addEventListener("contextmenu", this.closeMenuOnClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.closeMenuOnClickOutside);
    document.removeEventListener("contextmenu", this.closeMenuOnClickOutside);
  },
  closeMenuOnClickOutside(event) {
    // Check if the click is outside of the card
    if (!this.$el.contains(event.target)) {
      // Close the menu if it's open
      this.menuOpen = false;
    }
  },
};
</script>

<style></style>
