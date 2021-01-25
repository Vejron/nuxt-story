<template>
  <nuxt-link
    :to="articleLink"
    class="transition duration-200 hover:shadow-xl block rounded-md overflow-hidden"
  >
    <div class="relative">
      <VImg
        class="h-64 overflow-hidden"
        :src="image"
        width="1000"
        height="550"
        alt="random teaser image"
      />

      <div
        class="absolute top-0 bg-gradient-to-b from-transparent to-gray-800 opacity-50 w-full h-full"
      ></div>
      <h2 class="neon-flicker absolute bottom-0 p-6 text-2xl font-bold">
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
  computed: {
    image() {
      return this.articleContent?.image?.filename;
    }
  }
};
</script>

<style scoped>
.neon-flicker {
  color: #ffffff;
  text-shadow:
    3px 5px 12px rgba(0, 0, 0, 0.52),
    3px 5px 21px rgba(0, 0, 0, 0.92);
  
}

</style>
