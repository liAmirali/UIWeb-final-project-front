<template>
  <div class="flex w-full h-screen">
    <!-- Left sidebar -->
    <div
      class="basis-2/5 bg-cornflower-blue-400 px-10 py-32 text-white flex flex-col justify-between gap-y-5"
    >
      <div class="flex gap-x-4 items-center">
        <div class="relative">
          <div class="rounded-full bg-white/20 size-12"></div>
          <div
            class="rounded-full bg-white size-9 absolute top-[15px] left-4"
          ></div>
        </div>
        <h2 class="font-bold text-4xl">Storage</h2>
      </div>
      <div class="flex flex-col gap-y-4">
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
