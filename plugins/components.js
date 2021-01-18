import Vue from 'vue'
import Page from '~/components/Page.vue'
import Teaser from '~/components/Teaser.vue'
import Grid from '~/components/Grid.vue'
import ResponsiveGrid from '~/components/ResponsiveGrid.vue'
import Feature from '~/components/Feature.vue'
import FeaturedArticles from '~/components/FeaturedArticles.vue'
import ArticleTeaser from '~/components/ArticleTeaser.vue'
import DynamicForm from '~/components/DynamicForm.vue'
import InputField from '~/components/InputField.vue'

Vue.component('page', Page)
Vue.component('teaser', Teaser)
Vue.component('grid', Grid)
Vue.component('responsive-grid', ResponsiveGrid)
Vue.component('feature', Feature)
Vue.component('featured-articles', FeaturedArticles)
Vue.component('article-teaser', ArticleTeaser)
Vue.component('dynamic-form', DynamicForm)
Vue.component('input-field', InputField)