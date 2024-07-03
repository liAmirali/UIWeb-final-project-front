<template>
  <div class="bg-catskill-white my-5 mx-5 rounded-xl py-8 px-8 space-y-8">
    <div className="space-y-2">
      <h1 class="text-4xl font-bold">Objects</h1>
      <p class="text-sm">
        Total: <span class="font-semibold">{{ getTotalObjectsSize }}</span>
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <object-card v-for="file in files" :key="file.id" :file="file" />
    </div>
  </div>
</template>

<script>
import ObjectCard from "@/components/modules/objects/ObjectCard.vue";
import { fetcher } from "@/config/api";
import { humanReadableSize } from "@/helpers/prettifiers";

export default {
  name: "ObjectContainer",
  components: {
    ObjectCard,
  },
  data() {
    return {
      files: [],
    };
  },
  computed: {
    getTotalObjectsSize() {
      return humanReadableSize(this.files.reduce((acc, file) => acc + file.size, 0));
    },
  },
  methods: {
    fetchList() {
      fetcher("/objects/list/")
        .then((res) => {
          this.files = res.data.results;
        })
        .catch(() => {
          alert("Error fetching objects list.");
        });
    },
  },
  mounted() {
    this.fetchList();
  },
};
</script>

<style></style>
