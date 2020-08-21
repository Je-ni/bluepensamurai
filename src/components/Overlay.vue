<template>
  <transition name="overlay-fade">
    <section
      class="overlay"
      role="dialog"
      aria-labelledby="imageName"
      aria-describedby="imageDescription"
    >
      <figure
        class="grid overlay-inner border-2 border-red-900 text-sm w-11/12 max-w-lg"
      >
        <button
          class="text-right font-light hover:text-blue-400"
          @click="close"
        >
          close
        </button>
        <img class="mb-2 shadow-md" :src="src" :alt="alt" />
        <aside class="grid sm:grid-cols-3">
          <div class="sm:col-span-2">
            <h5 class="font-normal" id="imageName">{{ caption }}</h5>
            <p id="imageDescription">{{ detail }}</p>
          </div>
          <div class="space-x-2 text-right">
            <span>&copy;</span>
            <span>&copy;</span>
          </div>
        </aside>
      </figure>
    </section>
  </transition>
</template>

<script>
export default {
  name: "Overlay",
  data() {
    return {
      show: this.open
    };
  },
  methods: {
    close() {
      this.$emit("overlayClose");
    }
  },
  props: {
    src: String,
    alt: String,
    caption: String,
    detail: String,
    open: Boolean
  }
};
</script>

<style scope>
.overlay {
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: grid;
  z-index: 2;
  align-items: center;
  justify-items: center;
}
.overlay figure {
  background: var(--bg);
  padding: 1rem;
}
.overlay figure button {
  font-variant: small-caps;
}
.overlay-fade-enter,
.overlay-fade-leave-active {
  opacity: 0;
}

.overlay-fade-enter-active,
.overlay-fade-leave-active {
  transition: opacity 0.7s ease-in-out;
}
</style>
