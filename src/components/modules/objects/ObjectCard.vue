<template>
  <div class="flex h-20 bg-white rounded-xl justify-evenly items-center">
    <div class="rounded-full bg-cornflower-blue-400/10 size-12 flex items-center justify-center">
      <img v-if="file.type === 'music'" src="../../../assets/icons/File Types/music.svg" alt="" />
      <img v-if="file.type === 'others'" src="../../../assets/icons/File Types/Others.svg" alt="" />
      <img v-if="file.type === 'voice'" src="../../../assets/icons/File Types/Voice.svg" alt="" />
      <img v-if="file.type === 'pdf'" src="../../../assets/icons/File Types/PDF.svg" alt="" />
      <img v-if="file.type === 'audio'" src="../../../assets/icons/File Types/Audio.svg" alt="" />
    </div>

    <div>
      <p className="text-xs font-semibold">{{ file.name }}</p>
      <p class="text-gray-400 text-xs">
        {{ file.size + " - " + file.created }}
      </p>
    </div>

    <div>
      <img src="../../../assets/icons/Line/Option.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ObjectCard",
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
};
</script>

<style></style>
