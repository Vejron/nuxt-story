<template>
  <div
    v-editable="blok"
    class="prose prose-sm sm:prose lg:prose-lg my-24 mx-auto"
  >
    <h1>{{ blok.name }}</h1>
    <img class="w-full" height="1430" width="953" :src="image" />
    <p class="lead">{{ blok.intro }}</p>
    <rich-text-renderer :document="blok.body" />
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
  computed: {
    image() {
      return this.blok?.image?.filename
    }
  }
};
</script>