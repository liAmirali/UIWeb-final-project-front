<template>
  <div class="bg-gray-300 my-5 mx-5 rounded-xl flex flex-wrap justify-between">
    <object-card
      v-for="file in files"
      :key="file.fileName"
      :fileName="file.fileName"
      :fileSize="file.fileSize"
      :fileHour="file.fileHour"
      :fileDate="file.fileDate"
      :fileType="file.fileType"
    ></object-card>
  </div>
</template>

<script>
import ObjectCard from "@/components/modules/objects/ObjectCard.vue";
export default {
  name: "ObjectContainer",
  components: {
    ObjectCard,
  },
  data() {
    return {
      files: [
        {
          fileName: "BC company.sketch",
          fileSize: 10,
          fileHour: "10:09pm",
          fileDate: "10 Oct",
          fileType: "music",
        },
        {
          fileName: "Amirali.pdf",
          fileSize: 20,
          fileHour: "14:06pm",
          fileDate: "12 Oct",
          fileType: "pdf",
        },
        {
          fileName: "Asal.audio",
          fileSize: 48,
          fileHour: "05:56am",
          fileDate: "3 Oct",
          fileType: "audio",
        },
        {
          fileName: "Reza.txt",
          fileSize: 48,
          fileHour: "05:56am",
          fileDate: "3 Oct",
          fileType: "others",
        },
        {
          fileName: "Arshia.voice",
          fileSize: 23,
          fileHour: "05:56am",
          fileDate: "15 Oct",
          fileType: "voice",
        },
        {
          fileName: "Arshia.voice",
          fileSize: 23,
          fileHour: "05:56am",
          fileDate: "15 Oct",
          fileType: "voice",
        },
        {
          fileName: "Arshia.voice",
          fileSize: 23,
          fileHour: "05:56am",
          fileDate: "15 Oct",
          fileType: "voice",
        },
        {
          fileName: "Arshia.voice",
          fileSize: 23,
          fileHour: "05:56am",
          fileDate: "15 Oct",
          fileType: "voice",
        },
        {
          fileName: "Amirali.pdf",
          fileSize: 20,
          fileHour: "14:06pm",
          fileDate: "12 Oct",
          fileType: "pdf",
        },
      ],
    };
  },
};
</script>

<style>
</style>