<template>
  <section>
    <aside>
      <Overlay
        v-show="showOverlay"
        :src="imgSrc"
        @overlayClose="closeOverlay"
      />
    </aside>
    <cld-context
      class="grid md:grid-cols-2 gap-5 grid-flow-row-dense justify-around py-3"
      cloudName="chidera"
    >
      <section
        v-for="(picture, index) in pictures"
        :key="index"
        class="item grid overflow-hidden"
        @click="e => openOverlay(e)"
      >
        <cld-image :publicId="picture.public_id" crop="scale" />
        <div class="item-overlay">
          <span class="hover:text-blue-400">view ></span>
          <aside class="grid self-end grid-flow-col justify-between px-5 py-1">
            <span class="hover:text-blue-400">&copy;</span>
            <span>cold sunset</span>
            <span class="hover:text-blue-400">&copy;</span>
          </aside>
        </div>
      </section>
    </cld-context>
  </section>
</template>

<script>
// import pictures from "@/assets/data";
import { CldContext, CldImage } from "cloudinary-vue";
import Overlay from "@/components/Overlay";
import { fetchPictures } from "@/actions";

export default {
  name: "Picture",
  components: {
    Overlay,
    CldContext,
    CldImage
  },
  data() {
    return {
      pictures: [],
      showOverlay: false,
      imgSrc: "",
      error: "",
      base: process.env.VUE_APP_FILE_BASE
    };
  },
  created() {
    this.fetch();
  },

  methods: {
    openOverlay(e) {
      this.showOverlay = true;
      this.imgSrc = e.currentTarget.querySelector("img").src;
    },
    closeOverlay() {
      this.showOverlay = false;
    },
    async fetch() {
      const res = await fetchPictures();
      if (res.status === 200) {
        this.pictures = res.data;
      } else {
        this.error = res.message;
      }
    }
  }
};
</script>

<style scope>
.item .cld-image {
  grid-column: 1/-1;
  grid-row: 1/-1;
}

.item-overlay {
  background: rgba(26, 28, 68, 0.68);
  grid-column: 1/-1;
  grid-row: 1/-1;
  position: relative;
  display: grid;
  transition: 0.7s;
  transform: translateY(100%);
  /* color: white; */
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
