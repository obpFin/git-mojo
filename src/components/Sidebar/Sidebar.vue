<template>
  <div class="sidebar">
    <a id="mojo" href="/"><img src="../../assets/images/mojo.png" alt="mojo"></a>
    <a v-if="loggedIn" class="link" href="/"><img v-tooltip.top-center="msg" src="../../assets/images/home.png" alt="home"></a>
  </div>
</template>

<script>
export default {
  name: "test",
  data() {
    return {};
  },
  props: ["loggedIn"]
};
</script>

<style scoped lang="sass">
  @import "../../assets/sass/main"

  .sidebar
    height: 90vh
    position: absolute
    width: $sidebar-width
    max-height: $app-max-height
    background: $primary-light
    display: flex
    flex-direction: column
    @media only screen and (max-width: 420px)
      width: $sidebar-width-small
      height: 100vh
    #mojo
      img
        width: $sidebar-width
        height: $sidebar-width
        @media only screen and (max-width: 420px)
          width: $sidebar-width-small
          height: $sidebar-width-small
    .link
      margin: 40px auto
      img
        width: $sidebar-width / 2.5
        height: $sidebar-width / 2.5
        @media only screen and (max-width: 420px)
          width: $sidebar-width-small / 2.5
          height: $sidebar-width-small / 2.5


</style>
