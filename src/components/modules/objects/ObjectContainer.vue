<template>
  <div class="bg-catskill-white my-5 mx-5 rounded-xl py-8 px-8 space-y-8">
    <div className="space-y-2">
      <h1 class="text-4xl font-bold">Objects</h1>
      <p class="text-sm">Total: <span class="font-semibold">12 GB</span></p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <object-card v-for="file in files" :key="file.id" :file="file" />
    </div>
  </div>
</template>

<script>
import ObjectCard from "@/components/modules/objects/ObjectCard.vue";
import { fetcher } from "@/config/api";
import { onMounted, ref } from "vue";

export default {
  name: "ObjectContainer",
  components: {
    ObjectCard,
  },
  data() {
    return {};
  },
  setup() {
    const files = ref([]);

    onMounted(async () => {
      console.log("Hi");

      try {
        // fetch objects
        const res = await fetcher("/objects/list");
        console.log("res", res.data.results);
        files.value = res.data.results;
      } catch (error) {
        console.log("error", error);
      }
    });

    return {
      files,
    };
  },
};
</script>

<style></style>
