<template>
  <div class="flex h-20 bg-white rounded-xl justify-evenly items-center">
    <div class="rounded-full bg-cornflower-blue-400/10 size-12 flex items-center justify-center">
      <img v-if="fileType === 'music'" src="../../../assets/icons/Logo/Music.png" alt="" />
      <img v-if="fileType === 'others'" src="../../../assets/icons/Logo/Others.png" alt="" />
      <img v-if="fileType === 'voice'" src="../../../assets/icons/Logo/Voice.png" alt="" />
      <img v-if="fileType === 'pdf'" src="../../../assets/icons/Logo/PDF.png" alt="" />
      <img v-if="fileType === 'audio'" src="../../../assets/icons/Logo/Audio.png" alt="" />
    </div>

    <div>
      <p className="text-xs font-semibold">{{ fileName }}</p>
      <p class="text-gray-400 text-xs">
        {{ fileSize + " - " + fileHour + " - " + fileDate }}
      </p>
    </div>

    <div>
      <img src="../../../assets/icons/Line/Option.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ObjectCard",
  props: {
    fileName: String,
    fileSize: Number,
    fileHour: String,
    fileDate: String,
    fileType: String,
  },
};
</script>

<style></style>
