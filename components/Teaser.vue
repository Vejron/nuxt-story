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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 125.1 121.1">
      <defs>
        <style>
          .cls-1 {
            fill: #007f32;
          }
        </style>
      </defs>
      <g>
        <g>
          <path
            d="M112.8 83.8c10.2 0 9.8-4.4 11-4.4s1.1 1 .9 2.7l-.3 2A43.6 43.6 0 0180 121H61.4c-15.3 0-23.4-10.5-23.4-23.4a30 30 0 01.7-5.9c1.2-5 5.6-8 11-8zM113.6 32.3A11.5 11.5 0 00125 21V2.8C125 1 125-.1 124 0s-1 4.4-11.1 4.4H68A11.6 11.6 0 0057 13l-5.4 21c-.5 1.7-.2 2.8 1 2.7s.8-4.4 11-4.4z"
            class="cls-1"
          />
          <path
            fill="#ffb300"
            d="M113.6 72A11.5 11.5 0 00125 60.5v-18c0-1.8 0-3-1.1-2.8s-1 4.4-11.1 4.4H59a11.6 11.6 0 00-11.2 8.6l-5.4 21c-.5 1.7-.2 2.8 1 2.7s.8-4.4 11-4.4z"
          />
          <path
            d="M26 98.2a27.6 27.6 0 01.7-6.3L43.5 19a11.2 11.2 0 00.5-3.2A11.4 11.4 0 0032.6 4.4H12.4C2 4.4 2.5.1 1.3 0S0 1.1 0 2.9v76.4c0 16.4 14 36.8 34.5 41 1.8.3 2.8.6 3-.7 0-.6-2.3-1.8-4.5-3.2-4.6-3-7.2-10.6-7-18.2z"
            class="cls-1"
          />
        </g>
      </g>
    </svg>
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
svg {
  position: absolute;
  width: 25vw;
  opacity: 0.5;
  transform: translate3d(0, -20%, 0);
}
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
  svg {
    width: 55vw;
    opacity: 0.5;
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