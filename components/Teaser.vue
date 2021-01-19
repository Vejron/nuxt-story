<template>
  <div
    v-editable="blok"
    class="p-6 text-center relative  text-white bg-gray-600 shadow rounded-sm bg-cover w-full flex flex-col items-center justify-center antialiased"
    
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
  background-color: #c8f71e;
  transition: 500ms;
}

.waves::before,
.waves::after {
  content: '';
  position: absolute;
  width: 350vw;
  height: 350vw;
  top: -70vw;
  left: 50%;
  transform: translate(-50%, -75%);
}

.waves::before {
  border-radius: 44%;
  background: rgb(11, 53, 14);
  animation: waves 32s linear infinite;
}

.waves::after {
  border-radius: 44%;
  background: rgba(13, 199, 29, 0.5);
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