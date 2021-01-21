export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - Umeå Energi',
    title: 'Umeå Energi',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/global.css',
    '~/assets/ue-icons.css',
    '@braid/vue-formulate/dist/snow.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/components',
    '~/plugins/composition-api.js',
    '~/plugins/vuetensils.client.js',
    '~/plugins/gtag-plugin.client.js',
    '~/plugins/crisp.client.js',
    '~/plugins/parallax.js',
    '~/plugins/storyblok-rich-text-renderer.js',
    '~/plugins/vue-formulate',
    '~/plugins/graphcms.js',
    '~/plugins/firestore.client.js',
   
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/pwa',
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    //'@nuxt/image',
    '@nuxtjs/markdownit',
    '@nuxt/http',
    [
      'storyblok-nuxt',
      {
        accessToken: 'Vy45dQVOwVhXOBRo2KlQ0Att',
        cacheProvider: 'memory'
      }
    ],
    [
      'nuxt-i18n',
      {
        locales: ['sv', 'en'],
        defaultLocale: 'sv',
        vueI18n: {
          fallbackLocale: 'sv',
          messages: {
            en: {
              welcome: 'Welcome'
            },
            sv: {
              welcome: 'Välkommen'
            },
          }
        }
      }
    ],
  ],
  
  markdownit: {
    runtime: true // Support `$md()`
  },

  image: {
    providers: {
      random: '~/providers/random'
    }
  },

  meta: {
    name: 'Umeå Energi',
    author: 'Vejron vejronsson',
    description: 'Umeå energi din lokala elleverantör och samhällsbyggare',
    theme_color: '#007f32',
    lang: 'sv'
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
