<template>
  <div class="sidebar">
    <a href="/"><img src="../../assets/images/mojo.png" alt="mojo"></a>
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
    @media only screen and (max-width: 420px)
      width: $sidebar-width-small
      height: $sidebar-width-small

  .sidebar
    height: 90vh
    position: absolute
    width: $sidebar-width
    max-height: $app-max-height
    background: $primary-light
    @media only screen and (max-width: 420px)
      width: $sidebar-width-small
      height: 100vh
</style>
