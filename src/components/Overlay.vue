<template>
  <section v-show="open" class="overlay">
    <figure class="overlay-inner">
      <button class="close" @click="open = false">x close</button>
      <img
        class="w-full mb-2 shadow-md"
        :src="src"
        alt="Sunset in the mountains"
      />
    </figure>
  </section>
</template>

<script>
export default {
  name: "Picture",
  // data() {
  //   return {
  //     open: false
  //   };
  // },
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
  /* display: none; */
  z-index: 2;
  align-items: center;
  justify-items: center;
}
.overlay figure {
  background: white;
  width: 700px;
  padding: 20px;
}
.close {
  background: none;
  color: black;
  border: 0;
}
</style>
