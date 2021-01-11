<template>
  <ul
    v-editable="blok"
    class="grid my-6 gap-4 md:grid-cols-3">
    <li
      :key="blok._uid"
      v-for="blok in blok.columns"
      class="">
      <component :blok="blok" :is="blok.component" />
    </li>
  </ul>
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