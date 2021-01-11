<template>
  <nuxt-link
    :to="articleLink"
    class="shadow-md hover:shadow-xl block py-4 px-6"
  >
    <h2 class="pt-2 pb-4 text-2xl font-bold">
      {{ articleContent.name }}
    </h2>
    <p class="pb-6 leading-relaxed">
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
