<template>
  <section class="max-w-6xl mx-auto" v-editable="blok">
    <h2 class="pt-2 pl-6 text-lg text-gray-700 italic">{{ blok.title }}</h2>
    <ul class="grid mx-6 gap-8 md:grid-cols-3">
      <li
        v-for="article in sortedArticles" :key="article._uid"
        class="flex-auto ">
        <article-teaser
          v-if="article.content"
          :article-link="article.full_slug"
          :article-content="article.content"/>
        <p v-else class="px-4 py-2 text-white bg-red-700 text-center rounded">This content loads on save. <strong>Save the entry & reload.</strong></p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  },
  computed: {
    sortedArticles() {
      // Load reference data/content from store
      const featuredArticles = this.$store.state.articles.articles.filter((article) => {
        return this.blok.articles.includes(article.uuid)
      })

      // Enable the ordering of the article previews
      featuredArticles.sort((a, b) => {
        return this.blok.articles.indexOf(a.uuid) - this.blok.articles.indexOf(b.uuid);
      })
      
      return featuredArticles
    }
  }
}
</script>