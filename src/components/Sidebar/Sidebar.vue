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
  $width: 100px
  img
    width: $width
    height: $width

  .sidebar
    height: 100%
    position: absolute
    width: $width
    background: $primary-light
</style>
