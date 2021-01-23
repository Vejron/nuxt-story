<template>
  <div
    class="card-wrapper flex flex-col rounded overflow-hidden shadow-lg transition-shadow duration-500 hover:shadow-2xl"
  >
    <div>
      <div class="flex relative overflow-hidden">
        <img
          class="w-full"
          width="600"
          height="600"
          :src="avtal.image"
          alt="nonsensbild"
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
      <div class="font-bold text-xl mb-2">{{ avtal.name }}</div>
      <p class="text-gray-700 text-base">
        {{ avtal.body }}
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span
        v-for="tag in avtal.tags"
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
    avtal: {
      type: Object,
      required: true,
    },
    area: {
      required: true,
    },
  },
  data() {
    return {
      price: 0
    }
  },
  watch: {
    avtal(current, previus) {
      if (current.prices[this.area] !== previus.prices[this.area]) {
        console.log("Price changed to", current.prices[this.area]);
        this.price = current.prices[this.area];
      }
    },
  },
  created() {
    this.price = this.avtal.prices[this.area];
  },
  methods: {
    animateValue(start, end, duration) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        this.price = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    },
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