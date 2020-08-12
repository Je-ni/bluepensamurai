<template>
  <div class="home">
    <Header />
    <Picture />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Picture from "@/components/Picture.vue";

export default {
  name: "Home",
  components: {
    Header,
    Picture,
    Footer
  }
};
</script>

<style scoped></style>
