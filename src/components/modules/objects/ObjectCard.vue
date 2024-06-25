<template>
  <div class="inline-block">
    <div
      class="flex w-80 h-24 bg-gray-200 rounded-xl justify-evenly items-center my-8 mx-8"
    >
      <div>
        <img src="../../../assets/circle.png" alt="" />
      </div>
      <div>
        <h3>{{ fileName }}</h3>
        <p class="text-gray-400">
          {{ fileSize + " - " + fileHour + " - " + fileDate }}
        </p>
      </div>
      <div>
        <a href="#"
          ><img src="../../../assets/icons/Line/Option.png" alt=""
        /></a>
      </div>
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

<style>
</style>