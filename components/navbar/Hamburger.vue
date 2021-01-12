<template>
<button
  aria-label="navigation menu"
  @click="click"
  class="flex items-center px-3 py-2 border rounded text-black
  border-gray-200 hover:text-white hover:border-gray-600">
  <svg
    class="fill-current h-4 w-4"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
</button>  
</template>

<script>
export default {
  data() {
    return {
      showNavbar: true,
    }
  },

  methods: {
    click() {
     console.log('hej');
    },
  },
};
</script>

<style lang="css" scoped>

</style>