<template>
  <div
    v-editable="blok"
    class="p-6 text-center relative text-white bg-cover w-full flex flex-col items-center justify-center antialiased"
    style="
      overflow: hidden;
      background-position: 50%;
      height: 65vh;
      background-blend-mode: multiply;
    "
  >
    <div class="waves"></div>
    <h1 v-parallax="-0.2" class="text-6xl mb-6">{{ blok.headline }}</h1>
    <p v-parallax="0.2" class="text-xl">{{ blok.subheading }}</p>
  </div>
</template>


<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
};
//v-bind:style="{ 'background-image': 'url(' + blok.image.filename + ')' }"
</script>

<style scoped>
.waves {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 300px;
  transition: 500ms;
}

.waves::before,
.waves::after {
  content: "";
  position: absolute;
  width: 300vw;
  height: 300vw;
  top: -65vw;
  left: 50%;
  transform: translate(-50%, -75%);
}

@media only screen and (max-width: 600px) {
  .waves::before,
  .waves::after {
    top: -20vw;
  }
}

@media only screen and (min-width: 1400px) {
  .waves::before,
  .waves::after {
    top: -70vw;
  }
}

.waves::before {
  border-radius: 44%;
  background: rgba(255, 240, 25);
  animation: waves 32s linear infinite;
}

.waves::after {
  border-radius: 44%;
  background: rgba(7, 139, 14, 0.7);
  animation: waves 60s linear infinite;
}

@keyframes waves {
  0% {
    transform: translate(-50%, -75%) rotate(0deg);
  }

  100% {
    transform: translate(-50%, -75%) rotate(360deg);
  }
}
</style>