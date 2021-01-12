<template>
  <nuxt-link
    :to="articleLink"
    class="md:shadow-md hover:shadow-xl block rounded"
  >
    <div class="relative text-white">
      <VImg
        src="https://source.unsplash.com/random/600x350"
        width="1000"
        height="550"
        alt="random teaser image"
      />

      <div
        class="absolute top-0 bg-gradient-to-b from-transparent to-gray-800 w-full h-full"
      ></div>
      <h2 class="absolute bottom-0 p-6 text-2xl font-bold">
        {{ articleContent.name }}
      </h2>
    </div>

    <p class="p-6 leading-relaxed">
      {{ articleContent.intro }}
    </p>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    articleContent: {
      type: Object,
      required: true,
    },
    articleLink: {
      type: String,
      required: true,
    },
  },
};
</script>
