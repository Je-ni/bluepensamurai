<template>
  <section
    class="grid md:grid-cols-2 gap-4 grid-flow-row-dense justify-evenly px-6 py-3 md:px-16"
  >
    <section
      v-for="(picture, index) in pictures"
      :key="index"
      class="item grid max-w-md overflow-hidden my-2"
    >
      <img
        class="w-full shadow-md"
        :src="picture"
        alt="Sunset in the mountains"
      />
      <div class="item-overlay">
        <button>View --></button>
        <aside class="grid align-end grid-flow-col justify-between align-end">
          <span>&copy;</span>
          <span>cold sunset</span>
          <span>&copy;</span>
        </aside>
      </div>
    </section>
  </section>
</template>

<script>
import pictures from "@/assets/data";
export default {
  name: "Picture",
  data() {
    return {
      pictures: pictures
    };
  }
};
</script>

<style scope>
.item img {
  grid-column: 1/-1;
  grid-row: 1/-1;
}

.item-overlay {
  background: #0064ff33;
  grid-column: 1/-1;
  grid-row: 1/-1;
  position: relative;
  display: grid;
  justify-items: center;
  align-items: center;
  transition: 0.5s;
  transform: translateY(100%);
}
.item-overlay button {
  background: none;
  border: 2px solid white;
  color: white;
  text-transform: uppercase;
  background: rgba(0, 0, 0, 0.7);
  padding: 5px;
  justify-self: center;
  align-self: end;
}
.item:hover .item-overlay {
  transform: translateY(0);
}
</style>
