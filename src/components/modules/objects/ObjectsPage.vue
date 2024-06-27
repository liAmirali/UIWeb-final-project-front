<template>
  <the-header />
  <object-container />
</template>

<script>
import ObjectContainer from "./ObjectContainer.vue";
import TheHeader from "./TheHeader.vue";

export default {
  name: "ObjectsPage",
  components: { ObjectContainer, TheHeader },
};
</script>

<style></style>
