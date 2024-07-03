<template>
  <div class="flex h-20 bg-white rounded-xl items-center px-4" @contextmenu.prevent="openMenu">
    <div
      class="rounded-full bg-cornflower-blue-400/10 shrink-0 size-12 flex items-center justify-center"
    >
      <img
        v-if="file.file_type === 'music'"
        src="../../../assets/icons/File Types/music.svg"
        alt=""
      />
      <img v-if="file.file_type === 'pdf'" src="../../../assets/icons/File Types/PDF.svg" alt="" />
      <img
        v-if="file.file_type === 'video'"
        src="../../../assets/icons/File Types/Audio.svg"
        alt=""
      />
      <img
        v-if="file.file_type === 'image'"
        src="../../../assets/icons/File Types/Image.svg"
        alt=""
      />
      <img
        v-if="file.file_type === 'others'"
        src="../../../assets/icons/File Types/Others.svg"
        alt=""
      />
    </div>

    <div class="px-4">
      <p className="text-xs font-semibold">{{ file.name }}</p>
      <p class="text-gray-400 text-xs">{{ formattedFileSize }} - {{ formattedDateTime }}</p>
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
        <object-menu
          :fileName="file.name"
          :accessType="file.is_owner ? 'owner' : 'viewer'"
          :objectKey="file.object_key"
        ></object-menu>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDateTime, humanReadableSize } from "@/helpers/prettifiers";
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
          typeof value.object_key === "string" &&
          typeof value.name === "string" &&
          typeof value.size === "number" &&
          typeof value.uploaded_at === "string" &&
          typeof value.file_type === "string" &&
          typeof value.mime_type === "string" &&
          typeof value.is_owner === "boolean"
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
  computed: {
    formattedFileSize() {
      return humanReadableSize(this.file.size);
    },
    formattedDateTime() {
      return formatDateTime(this.file.uploaded_at);
    },
  },
};
</script>

<style></style>
