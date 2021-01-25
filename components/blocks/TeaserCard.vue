<template>
  <div
    class="card-wrapper flex flex-col rounded overflow-hidden shadow-lg transition-shadow duration-500 hover:shadow-2xl"
  >
    <div>
      <div class="flex relative overflow-hidden">
        <img
          class="w-full"
          width="600"
          height="400"
          :src="blok.image.filename"
          :alt="blok.image.alt"
        />
        <div
          class="radial-glare w-full h-full absolute text-4xl text-green-200 font-extrabold"
        >
          <div class="absolute italic ml-6 bottom-0">
            {{ price }}
            <span class="text-sm text-yellow-500">öre / kWh</span>
          </div>
        </div>
      </div>
    </div>

    <div class="flex-grow px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ blok.title }}</div>
      <p class="text-gray-700 text-base">
        {{ blok.body }}
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span
        v-for="tag in blok.tags"
        :key="tag"
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >{{ tag }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  },
};
</script>

<style scoped>
img {
  filter: brightness(100%);
  transition: transform 0.5s, filter 0.5s ease-in-out;
}
.card-wrapper:hover img {
  transform: scale(1.05);
  filter: brightness(120%);
}
.radial-glare {
  background: radial-gradient(
    circle,
    rgba(2, 0, 36, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  );
}
</style>