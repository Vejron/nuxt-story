<template>
  <div
    v-editable="blok"
    class="p-6 text-center antialiased text-white bg-gray-600 shadow rounded-sm bg-cover w-full flex flex-col items-center justify-center antialiased"
    v-bind:style="{ 'background-image': 'url(' + blok.image.filename + ')' }"
    style="
      background-position: 50%;
      height: 65vh;
      background-blend-mode: multiply;
    "
  >
    <h1 v-parallax="-0.2" class="text-6xl mb-6">{{ blok.headline }}</h1>
    <p v-parallax="0.2" class="text-xl">{{ blok.subheading }}</p>
  </div>
</template>


<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
};
</script>