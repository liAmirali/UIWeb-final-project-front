<template>
  <div class="bg-gray-300 my-8 mx-5 rounded-xl h-[500px]">
    <object-card
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