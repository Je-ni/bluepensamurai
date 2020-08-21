<template>
  <section>
    <aside>
      <Overlay
        v-show="showOverlay"
        :src="imgSrc"
        :alt="alt"
        :caption="caption"
        :detail="detail"
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
        @click="e => openOverlay(e, picture)"
      >
        <cld-image
          :publicId="picture.public_id"
          loading="lazy"
          crop="scale"
          accessibility="colorblind"
          :alt="
            picture.context ? picture.context.custom.alt : picture.public_id
          "
        >
          <cld-placeholder type="pixelate"></cld-placeholder>
        </cld-image>
        <div class="item-overlay">
          <span class="hover:text-red-400">view ></span>
          <aside class="grid self-end grid-flow-col justify-between px-5 py-1">
            <span class="hover:text-blue-400">&copy;</span>
            <span class="caption">{{
              picture.context ? picture.context.custom.caption : "no idea"
            }}</span>
            <span class="hover:text-blue-400">&copy;</span>
          </aside>
        </div>
      </section>
    </cld-context>
  </section>
</template>

<script>
// import pictures from "@/assets/data";
import { CldContext, CldImage, CldPlaceholder } from "cloudinary-vue";
import Overlay from "@/components/Overlay";
import { fetchPictures } from "@/actions";

export default {
  name: "Picture",
  components: {
    Overlay,
    CldContext,
    CldImage,
    CldPlaceholder
  },
  data() {
    return {
      pictures: [],
      showOverlay: false,
      imgSrc: "",
      alt: "",
      caption: "",
      detail: "",
      error: "",
      base: process.env.VUE_APP_FILE_BASE
    };
  },
  created() {
    this.fetch();
  },

  methods: {
    openOverlay(e, picture) {
      this.showOverlay = true;
      this.imgSrc = e.currentTarget.querySelector("img").src;
      this.alt = picture.context
        ? picture.context.custom.alt
        : picture.public_id;
      this.caption = picture.context
        ? picture.context.custom.caption
        : "no idea";
      this.detail = picture.context ? picture.context.custom.detail : "";
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
  /* background: rgba(0, 0, 0, 0.5); */
  text-transform: lowercase;
  padding: 0.4rem 0.8rem;
  justify-self: center;
  align-self: end;
  font-size: 0.9rem;
  font-weight: 400;
  text-align: center;
}
.item:hover .item-overlay {
  transform: translateY(0);
}
</style>
