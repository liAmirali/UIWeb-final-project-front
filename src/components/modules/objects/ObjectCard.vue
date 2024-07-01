<template>
  <div
    class="flex h-20 bg-white rounded-xl items-center px-4"
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

    <div class="ml-auto relative">
      <img
        class="cursor-pointer"
        @click.stop="toggleMenu"
        src="../../../assets/icons/Line/Option.svg"
        alt=""
      />

      <div
        v-if="isMenuOpen"
        class="absolute top-5"
        :class="{ 'left-5': openMenuDir == 'right', 'right-5': openMenuDir == 'left' }"
      >
        <object-menu :fileName="file.name" :accessType="'owner'"></object-menu>
      </div>
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
      isMenuOpen: false,
      openMenuDir: "left",
    };
  },
  methods: {
    toggleMenu(event) {
      // Checks if the click is in the right half of the screen, it true, then show the modal on the left side if false, then show the modal on the right side
      if (event.clientX > window.innerWidth / 2) this.openMenuDir = "left";
      else this.openMenuDir = "right";

      this.isMenuOpen = !this.isMenuOpen;
    },
    openMenu(event) {
      if (event.clientX > window.innerWidth / 2) this.openMenuDir = "left";
      else this.openMenuDir = "right";

      this.isMenuOpen = true;
    },
  },
};
</script>

<style></style>
