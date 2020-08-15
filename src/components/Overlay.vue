<template>
  <section class="overlay">
    <figure class="grid overlay-inner border-2 border-blue-900 text-sm">
      <button class="text-right font-light" @click="close">close</button>
      <img
        class="max-w-lg mb-2 shadow-md"
        :src="src"
        alt="Sunset in the mountains"
      />
      <aside class="grid sm:grid-cols-3">
        <div class="sm:col-span-2">
          <h5 class="font-normal">image name</h5>
          <p>a heart swollen man</p>
        </div>
        <div class="space-x-2 text-right">
          <span>&copy;</span>
          <span>&copy;</span>
        </div>
      </aside>
    </figure>
  </section>
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
  background: white;
  padding: 1rem;
}
.overlay figure button {
  font-variant: small-caps;
}
</style>
