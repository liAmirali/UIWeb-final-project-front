<template>
  <div class="rounded-xl flex flex-col py-4 bg-white shadow-lg z-10 relative">
    <p class="font-semibold text-sm mb-3 px-3">{{ fileName }}</p>
    <div class="divide-y flex flex-col">
      <div
        v-if="accessType === 'owner'"
        class="flex gap-x-3 py-2 px-3 items-center cursor-pointer hover:bg-neutral-100 transition-all"
        @click="isShareDialogOpen = true"
      >
        <div class="rounded-full bg-sandy-brown-300/10 p-[0.6rem] size-8">
          <img src="../../../assets/icons/Line/Share.svg" alt="" />
        </div>
        <p class="text-sm">Share</p>
      </div>
      <div
        class="flex gap-x-3 py-2 px-3 items-center cursor-pointer hover:bg-neutral-100 transition-all"
        @click="onDownload"
      >
        <div class="rounded-full bg-cornflower-blue-400/10 p-[0.6rem] size-8">
          <img src="../../../assets/icons/Line/Dowload.svg" alt="" />
        </div>
        <p class="text-sm">Download</p>
      </div>
      <div
        v-if="accessType === 'owner'"
        class="flex gap-x-3 pt-2 px-3 items-center cursor-pointer hover:bg-neutral-100 transition-all"
        @click="onDelete"
      >
        <div class="rounded-full bg-geraldine-400/10 p-[0.6rem] size-8">
          <img src="../../../assets/icons/Line/Trash.svg" alt="" />
        </div>
        <p class="text-sm">Trash</p>
      </div>
    </div>
  </div>

  <teleport to="#app">
    <dialog
      :open="isShareDialogOpen"
      v-if="isShareDialogOpen"
      class="fixed inset-0 size-full flex items-center backdrop-blur-sm justify-center bg-cornflower-blue-400/10 z-30"
    >
      <people-container @back-click="handleBackClick" :objectKey="objectKey"></people-container>
    </dialog>
  </teleport>
</template>

<script>
import PeopleContainer from "../people/PeopleContainer.vue";
import { fetcher } from "@/config/api";

export default {
  components: { PeopleContainer },
  props: {
    objectKey: {
      type: String,
      required: true,
    },
    fileName: {
      type: String,
      required: true,
    },
    fileMimeType: {
      type: String,
      required: true,
    },
    accessType: {
      type: String,
      required: true,
      validator(value) {
        return value === "owner" || value === "viewer";
      },
    },
  },
  data() {
    return {
      isShareDialogOpen: false,
    };
  },
  methods: {
    onDownload() {
      console.log(this.objectKey);
      const mime = this.fileMimeType;
      console.log("mime:", mime);
      fetcher
        .get("/objects/download/", {
          params: { object_key: this.objectKey },
          responseType: "blob",
        })
        .then((res) => {
          const blob = new Blob([res.data], { type: mime });
          const link = document.createElement("a");
          link.setAttribute("download", this.fileName);
          link.setAttribute("target", "_blank");

          const href = URL.createObjectURL(blob);
          link.href = href;
          link.click();
          URL.revokeObjectURL(href);
        });
    },
    onDelete() {
      fetcher
        .delete("/objects/delete/", { data: { object_key: this.objectKey } })
        .then(() => {
          console.log("Successfully deleted object");
        })
        .catch((e) => {
          console.log("Failed to delete object", e);
        });
    },
    handleBackClick() {
      console.log("handleBackClick");
      this.isShareDialogOpen = false;
    },
  },
};
</script>

<style></style>
