<template>
  <section>
    <component
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
      :is="story.content.component"
    />
  </section>
</template>

<script>

export default {
  data() {
    return {
      story: { content: {} },
    };
  },
  mounted() {
    // Use the input event for instant update of content
    this.$storybridge.on("input", (event) => {
      if (event.story.id === this.story.id) {
        this.story.content = event.story.content;
      }
    });
    // Use the bridge to listen the events
    this.$storybridge.on(["published", "change"], (event) => {
      // window.location.reload()
      this.$nuxt.$router.go({
        path: this.$nuxt.$router.currentRoute,
        force: true,
      });
    });
  },

  head() {
    return {
      title: "Kundservice",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "Bli kund hos umeås bästa elbolag",
        },
      ],
    };
  },
  asyncData(context) {
    // // This what would we do in real project
    // const version = context.query._storyblok || context.isDev ? 'draft' : 'published'
    // const fullSlug = (context.route.path == '/' || context.route.path == '') ? 'home' : context.route.path

    // Load the JSON from the API - loadig the home content (index page)
    return context.app.$storyapi
      .get("cdn/stories/kundservice", {
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
            message: "Failed to receive content from api",
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