<template>
<div class="pb-32">
  <nav class="navbar w-full" :class="{ 'navbar--hidden': !showNavbar, 'navbar--shadow': showShadow }">
    <div class="system-bar bg-black text-white text-xs flex justify-between items-center px-4 h-8">
      <div class="flex items-center divide-x-2 divide-gray-700">
        <nuxt-link to="/" class="pr-2">Privat</nuxt-link>
        <nuxt-link to="/" class="pl-2">Företag</nuxt-link>
      </div>
      <div>
        <nuxt-link to="/">Pressrum</nuxt-link>
      </div>
    </div>
    <div class="navigation-bar bg-white text-lg flex justify-between px-4 h-16">
      <nuxt-link to="/" class="logo-section flex items-center">
        <img class="w-40" width="180" src="/logo-ue-full-color.svg" alt="Umeå energi logotyp">
      </nuxt-link>
      <ul class="hidden md:flex navbar-top-links items-center">
        <li class="px-4" v-for="link in topLinks" :key="link.name">
          <nuxt-link class="top-link pb-1 whitespace-no-wrap" :to="link.url">{{ link.name }}</nuxt-link>
        </li>
      </ul>
      <div class="last-bit-stuff flex items-center">
        <Hamburger/>
      </div>
    </div>
    <div class="navbar-sub-links bg-white bg-opacity-25 h-0"></div>
  </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showNavbar: true,
      showShadow: false,
      lastScrollPosition: 0,
      topLinks: [
        {
          name: "Produkter",
          url: "",
        },
        {
          name: "Hållbarhet",
          url: "/articles",
        },
        {
          name: "Innovation",
          url: "",
        },
        {
          name: "Om oss",
          url: "",
        },
        {
          name: "Kundservice",
          url: "",
        },
      ],
    };
  },

  methods: {
    onScroll() {
      const currentScrollPosition = window.pageYOffset
      this.showShadow = !!currentScrollPosition;
      if (currentScrollPosition < 0) {
        return;
      }
      // Stop executing this function if the difference between
      // current scroll position and last scroll position is less than some offset
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 40) {
        return;
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    },
  },

  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
};
</script>

<style lang="css" scoped>
.navbar {
  position: fixed;
  box-shadow: none;
  transform: translate3d(0, 0, 0);
  transition: 0.2s all ease-out;
}
.navbar.navbar--hidden {
  
  transform: translate3d(0, -2rem, 0);
}
.navbar.navbar--shadow {
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.5);
}
.top-link {
  font-weight: 300;
  border-bottom-color: transparent;
  border-bottom-style: solid;
  border-bottom-width: 2.5px;
  transition: border-bottom-color, font-weight .3s;
}
.top-link:hover {
  border-bottom-color: black;
  font-weight: 600;
}
</style>