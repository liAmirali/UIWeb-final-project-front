<template>
  <div class="flex w-full h-screen">
    <!-- Left sidebar -->
    <div
      class="basis-2/5 bg-cornflower-blue-400 px-10 py-32 text-white flex flex-col justify-between"
    >
      <h1 class="text-4xl">Storage</h1>

      <div>
        <p class="text-5xl font-bold">Manage your files the best way</p>
        <p>
          Awesome, we've created the perfect place for you to store all your
          documents.
        </p>
      </div>

      <div class="flex justify-center">
        <img
          src="../../../assets/illustration/search-files.png"
          class="w-2/3"
        />
      </div>
    </div>
    <!-- Right sidebar -->
    <div class="flex-grow flex flex-col justify-center">
      <div class="flex flex-col justify-center w-2/3 mx-auto flex-1">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthBase",
};
</script>
