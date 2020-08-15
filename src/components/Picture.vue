<template>
  <section>
    <aside>
      <Overlay
        v-show="showOverlay"
        :src="imgSrc"
        @overlayClose="closeOverlay"
      />
    </aside>
    <section
      class="grid md:grid-cols-2 gap-5 grid-flow-row-dense justify-around px-6 py-3 md:px-16"
    >
      <section
        v-for="(picture, index) in pictures"
        :key="index"
        class="item grid overflow-hidden"
        @click="e => openOverlay(e)"
      >
        <img
          class="w-full h-full shadow-md"
          :src="picture"
          alt="Sunset in the mountains"
        />
        <div class="item-overlay">
          <span>view ></span>
          <aside class="grid self-end grid-flow-col justify-between px-5 py-1">
            <span>&copy;</span>
            <span>cold sunset</span>
            <span>&copy;</span>
          </aside>
        </div>
      </section>
    </section>
  </section>
</template>

<script>
import pictures from "@/assets/data";
import Overlay from "@/components/Overlay";
export default {
  name: "Picture",
  components: {
    Overlay
  },
  data() {
    return {
      pictures: pictures,
      showOverlay: false,
      imgSrc: ""
    };
  },
  methods: {
    openOverlay(e) {
      this.showOverlay = true;
      this.imgSrc = e.currentTarget.querySelector("img").src;
    },
    closeOverlay() {
      this.showOverlay = false;
    }
  }
};
</script>

<style scope>
.item img {
  grid-column: 1/-1;
  grid-row: 1/-1;
}

.item-overlay {
  /* background: #0064ff5e; */
  background: rgba(0, 0, 0, 0.7);
  grid-column: 1/-1;
  grid-row: 1/-1;
  position: relative;
  display: grid;
  transition: 0.7s;
  transform: translateY(100%);
  color: white;
  font-weight: 400;
}
.item-overlay span {
  /* border: 2px solid white; */
  font-variant: small-caps;
  /* background: rgba(0, 0, 0, 0.5); */
  padding: 0.4rem 0.8rem;
  justify-self: center;
  align-self: end;
  font-size: 0.9rem;
  font-weight: 400;
}
.item:hover .item-overlay {
  transform: translateY(0);
}
</style>
