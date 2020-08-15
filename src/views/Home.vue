<template>
  <div class="home">
    <Picture />
  </div>
</template>

<script>
// @ is an alias to /src
import Picture from "@/components/Picture.vue";

export default {
  name: "Home",
  components: {
    Picture
  }
};
</script>

<style scoped></style>
