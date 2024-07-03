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

  <div class="bg-catskill-white my-5 mx-5 rounded-xl py-8 px-8">
    <div class="flex mx-auto">
      <div v-if="page > 1" @click="page = page - 1">&lt;</div>
      <div>{{ page }} / {{ pageCount }}</div>
      <div v-if="pageCount > page" @click="page = page + 1">&gt;</div>
    </div>
  </div>
</template>

<script>
import ObjectCard from "@/components/modules/objects/ObjectCard.vue";
import { fetcher } from "@/config/api";
import { humanReadableSize } from "@/helpers/prettifiers";

const PAGE_SIZE = 3;

export default {
  name: "ObjectContainer",
  components: {
    ObjectCard,
  },
  data() {
    return {
      files: [],
      page: 1,
      pageCount: 1,
    };
  },
  computed: {
    getTotalObjectsSize() {
      return humanReadableSize(this.files.reduce((acc, file) => acc + file.size, 0));
    },
    filesCount() {
      return this.files.length;
    },
  },
  methods: {
    fetchList() {
      fetcher
        .get("/objects/list/", {
          params: {
            page: this.page,
            page_size: PAGE_SIZE,
          },
        })
        .then((res) => {
          this.files = res.data.results;
          this.pageCount = Math.ceil(res.data.count / PAGE_SIZE);
        })
        .catch(() => {
          alert("Error fetching objects list.");
        });
    },
  },
  mounted() {
    this.fetchList();
  },
  watch: {
    page() {
      this.fetchList();
    },
  }
};
</script>

<style></style>
