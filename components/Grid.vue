<template>
<section class="max-w-6xl mx-auto">
  <ul
    v-editable="blok"
    class="grid m-6 gap-6 md:grid-cols-3">
    <li
      :key="blok._uid"
      v-for="blok in blok.columns"
      class="">
      <component :blok="blok" :is="blok.component" />
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
  }
}
</script>