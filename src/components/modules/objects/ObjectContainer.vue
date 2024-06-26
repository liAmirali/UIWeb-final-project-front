<template>
  <div class="bg-catskill-white my-5 mx-5 rounded-xl py-8 px-8 space-y-8">
    <div className="space-y-2">
      <h1 class="text-4xl font-bold">Objects</h1>
      <p class="text-sm">Total: <span class="font-semibold">12 GB</span></p>
    </div>

    <div class="grid grid-cols-4 gap-4">
      <object-card
        v-for="file in files"
        :key="file.id"
        :file="file"
      />
    </div>
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
          id: Math.random(),
          name: "BC company.sketch",
          size: 10,
          created: "10:09pm",
          type: "music",
        },
        {
          id: Math.random(),
          name: "BC company.sketch",
          size: 10,
          created: "10:09pm",
          type: "music",
        },
        {
          id: Math.random(),
          name: "Amirali.pdf",
          size: 20,
          created: "14:06pm",
          type: "pdf",
        },
        {
          id: Math.random(),
          name: "Asal.audio",
          size: 48,
          created: "05:56am",
          type: "audio",
        },
        {
          id: Math.random(),
          name: "Reza.txt",
          size: 48,
          created: "05:56am",
          type: "others",
        },
        {
          id: Math.random(),
          name: "Arshia.voice",
          size: 23,
          created: "05:56am",
          type: "voice",
        },
        {
          id: Math.random(),
          name: "Arshia.voice",
          size: 23,
          created: "05:56am",
          type: "voice",
        },
        {
          id: Math.random(),
          name: "Arshia.voice",
          size: 23,
          created: "05:56am",
          type: "voice",
        },
        {
          id: Math.random(),
          name: "Arshia.voice",
          size: 23,
          created: "05:56am",
          type: "voice",
        },
        {
          id: Math.random(),
          name: "Amirali.pdf",
          size: 20,
          created: "14:06pm",
          type: "pdf",
        },
      ],
    };
  },
};
</script>

<style></style>
