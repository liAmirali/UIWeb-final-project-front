<template>
  <div
    class="flex w-80 h-24 bg-gray-200 rounded-xl justify-evenly items-center mx-auto my-20"
  >
    <div>
      <img src="../../../assets/circle.png" alt="" />
    </div>
    <div>
      <h3>{{ file.fileName }}</h3>
      <p class="text-gray-400">
        {{ file.fileSize + " - " + file.fileHour + " - " + file.fileDate }}
      </p>
    </div>
    <div>
      <a href="#"><img src="../../../assets/icons/Line/Option.png" alt="" /></a>
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
  data() {
    return {
      file: {
        fileName: "BC company.sketch",
        fileSize: 10,
        fileHour: "10:09pm",
        fileDate: "10 Oct",
        fileType: "pdf",
      },
    };
  },
};
</script>

<style>
</style>