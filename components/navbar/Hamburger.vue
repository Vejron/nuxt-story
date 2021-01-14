<template>
  <button
    aria-label="navigation menu"
    @click="$emit('click', true)"
    class="flex items-center px-3 py-2 border rounded text-black border-gray-200 hover:text-green-700 hover:border-gray-600"
  >
    <svg
      :class="{'transform rotate-45': navbarActive }"
      class="fill-current h-4 w-4 transition duration-300 ease-out"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
  </button>
</template>

<script>
export default {
  props: {
    navbarActive: {
      type: Boolean,
    },
  },
};
</script>

<style lang="css" scoped>
</style>