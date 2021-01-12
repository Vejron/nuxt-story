<template>
  <div
    v-editable="blok"
    class="">
    <component
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
      :is="blok.component" />
      <div class="hmm">sdsdsdsdlkhdur</div>
  </div>
  
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

<style scoped>
.hmm {
  font-family: ue-font;
}
</style>