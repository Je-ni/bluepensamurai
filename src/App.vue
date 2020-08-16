<template>
  <div id="app" class="px-6 py-6 md:px-20 min-height-screen">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300&family=Recursive:wght@300;400&display=swap");

@font-face {
  font-family: "comicsans";
  src: url("./assets/Comic Sans MS.otf") format("opentype");
}

#app {
  font-family: "comicsans", Recursive, Avenir, Helvetica, Arial, sans;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #cc2727;
  background: rgb(26, 28, 68);
  font-size: 16px;
  font-weight: 300;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #cc2727;
  /* color: #2c3e50; */
}

#nav a.router-link-exact-active {
  color: #2c3e50;
}
</style>
