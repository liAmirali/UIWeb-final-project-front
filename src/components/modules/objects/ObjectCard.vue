<template>
  <div class="flex h-24 bg-gray-200 rounded-xl justify-evenly items-center">
    <div class="rounded-full bg-gray-300 p-5">
      <img v-if="fileType === 'music'" src="../../../assets/icons/Logo/Music.png" alt="" />
      <img v-if="fileType === 'others'" src="../../../assets/icons/Logo/Others.png" alt="" />
      <img v-if="fileType === 'voice'" src="../../../assets/icons/Logo/Voice.png" alt="" />
      <img v-if="fileType === 'pdf'" src="../../../assets/icons/Logo/PDF.png" alt="" />
      <img v-if="fileType === 'audio'" src="../../../assets/icons/Logo/Audio.png" alt="" />
    </div>

    <div>
      <h3>{{ fileName }}</h3>
      <p class="text-gray-400">
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
