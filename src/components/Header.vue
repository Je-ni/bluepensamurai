<template>
  <header>
    <nav class="flex items-center justify-between flex-wrap pb-6">
      <div class="flex items-center flex-shrink-0 mr-6">
        <svg
          class="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
          />
        </svg>
        <span class="font-semibold text-xl tracking-tight">
          <router-link to="/">Bluepen Samurai</router-link>
        </span>
      </div>
      <div class="block md:hidden">
        <button
          @click="isOpen = !isOpen"
          class="flex items-center px-3 py-2 text-blue hover:text-blue-400 hover:border-blue-400"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <transition name="dropdown">
        <div
          :class="isOpen ? 'block active' : 'hidden'"
          class="w-full block flex-grow md:flex md:justify-end md:w-auto"
        >
          <div class="text-sm text-right md:flex-grow md:flex md:justify-end">
            <router-link
              to="/"
              class="block mt-4 md:inline-block md:mt-0 hover:text-blue-400 mr-4"
              >gallery</router-link
            >
            <router-link
              to="/about"
              class="block mt-4 md:inline-block md:mt-0 hover:text-blue-400 mr-4"
              >about</router-link
            >
          </div>
        </div>
      </transition>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    navToggler: function() {
      this.navShow = !this.navShow;
    }
  }
};
</script>

<style scope></style>
