<template>
  <div class="flex justify-between items-center px-6 py-4 gap-x-24">
    <h2 class="text-cornflower-blue-400 font-bold">Storage</h2>
    <div class="grow">
      <div class="w-1/2">
        <app-input placeholder="Search" :style="'thin'"></app-input>
      </div>
    </div>
    <div class="flex justify-between gap-x-4">
      <input type="file" ref="fileInput" @change="handleFileChange" style="display: none" />
      <app-button @click="triggerFileInput">Upload</app-button>
      <app-avatar :name="user.name" :pictureUrl="user.pictureUrl" />
    </div>
  </div>
</template>

<script>
import AppButton from "@/components/common/buttons/AppButton.vue";
import AppInput from "@/components/common/inputs/AppInput.vue";
import AppAvatar from "@/components/common/AppAvatar.vue";
import { fetcher } from "@/config/api";

export default {
  name: "TheHeader",
  data() {
    return {
      user: {
        name: "",
        pictureUrl: "http://localhost:8080/Avatar.png",
      },
    };
  },
  components: {
    AppButton,
    AppInput,
    AppAvatar,
  },
  methods: {
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    handleFileChange(event) {
      this.selectedFile = event.target.files[0];
      this.uploadFile();
    },
    uploadFile() {
      if (!this.selectedFile) return;

      const formData = new FormData();
      formData.append("object", this.selectedFile);

      console.log("formData:", formData);

      fetcher
        .put("/objects/upload/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    setName() {
      this.user.name = JSON.parse(localStorage.getItem("user")).username;
    },
  },
  mounted() {
    this.setName();
  },
};
</script>

<style></style>
