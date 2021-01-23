<template>
  <section>
    <h2 class="py-10 text-center font-bold text-4xl">Artiklar</h2>
    <ul class="mx-0 md:mx-4 grid md:grid-cols-2 xl:grid-cols-4 gap-6">
      <li
        v-for="article in stories"
        :key="article._uid"
        class="flex-auto"
      >
        <article-teaser
          v-if="article.content"
          :article-link="article.full_slug"
          :article-content="article.content"
        />
        <p v-else class="px-4 py-2 text-white bg-red-700 text-center rounded">
          This content loads on save. <strong>Save the entry & reload.</strong>
        </p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      stories: [],
    };
  },
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories", {
        starts_with: "articles/",
        version: "draft",
      })
      .then((res) => {
        return res.data;
      })
      .catch((res) => {
        if (!res.response) {
          console.error(res);
          context.error({
            statusCode: 404,
            message: "Failed to receive content form api",
          });
        } else {
          console.error(res.response.data);
          context.error({
            statusCode: res.response.status,
            message: res.response.data,
          });
        }
      });
  },
};
</script>