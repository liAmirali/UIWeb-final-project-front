<template>
  <div class="flex w-full h-screen">
    <div
      class="basis-2/5 bg-cornflower-blue-400 px-10 py-32 text-white flex flex-col justify-between"
    >
      <h1 class="text-4xl">Storage</h1>

      <div>
        <p class="text-5xl font-bold">Manage your files the best way</p>
        <p>Awesome, we've created the perfect place for you to store all your documents.</p>
      </div>

      <div class="flex justify-center">
        <img src="../../../assets/search-files-illustration.png" class="w-2/3" />
      </div>
    </div>
    <div class="flex-grow px-20">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthBase",
};
</script>
