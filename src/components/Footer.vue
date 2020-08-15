<template>
  <footer class="text-center py-6">
    <p>&copy; Copyright {{ data }}</p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      data: new Date().getFullYear()
    };
  }
};
</script>

<style scope></style>
