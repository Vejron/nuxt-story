<template>
  <footer class="py-10 bg-yellow-200">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="p-4">
          <h2 class="text-lg font-semibold mb-4">Umeå Energi AB</h2>
          <div
            class="mark text-sm "
            v-html="$md.render(footer.contact)"
          ></div>
        </div>
        <div class="p-4">
          <h2 class="text-lg font-semibold mb-4">Kundservice</h2>
          <div
            class="mark text-sm"
            v-html="$md.render(footer.service)"
          ></div>
        </div>
        <div class="p-4">
          <h2 class="text-lg font-semibold mb-4">Följ oss</h2>
          <div class="flex">
            <a
              class="mr-4"
              v-for="link in footer.socialLinks"
              :key="link.name"
              :href="link.url"
            >
              <img
                width="24"
                height="24"
                :src="link.icon.url"
                :alt="link.name"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { gql } from "graphql-request";

export default {
  data() {
    return {
      footer: Object,
    };
  },
  // fetch from graphCMS with GraphQL
  async fetch() {
    const { footers } = await this.$nuxt.context.$graphcms.request(
      gql`
        {
          footers {
            service
            contact
            socialLinks {
              name
              url
              icon {
                url
              }
            }
          }
        }
      `
    );
    this.footer = footers[0];
  },
};
</script>

<style >
.mark p {
  @apply mb-4;
}
</style>