<template>
  <div
    v-editable="blok"
    class="py-2 text-center">
   
    <i :class="[blok.icon]" class="text-5xl text-green-700"></i>
    <h1 class="text-lg font-semibold mb-2">{{ blok.name }}</h1>
    <p class="text-gray-700">
      {{ blok.description }}
    </p>
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