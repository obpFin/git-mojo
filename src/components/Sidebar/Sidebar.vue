<template>
  <div class="sidebar">
    <img src="../../assets/images/mojo.png" alt="mojo">
  </div>
</template>

<script>
export default {
  name: "test",
  data() {
    return {};
  }
};
</script>

<style scoped lang="sass">
  @import "../../assets/sass/main"
  img
    width: $sidebar-width
    height: $sidebar-width

  .sidebar
    height: 100%
    position: absolute
    width: $sidebar-width
    background: $primary-light
</style>
