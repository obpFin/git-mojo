<template>
  <div class="sidebar">
    <router-link to="/" id="mojo">
      <a><img src="../../assets/images/mojo.png" alt="mojo"></a>
    </router-link>
    <router-link v-if="isLoggedIn" to="/user" class="link">
      <img src="../../assets/images/home.png" alt="home">
    </router-link>
    <router-link v-if="isLoggedIn" to="/user" class="link">
      <img class="vs" src="../../assets/images/vs.png" alt="home">
    </router-link>
    <router-link v-if="isLoggedIn" to="/info" class="link">
      <img src="../../assets/images/info.png" alt="info">
    </router-link>
  </div>
</template>

<script>
export default {
  name: "test",
  data() {
    return {};
  },
  props: ["isLoggedIn"]
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
      padding-top: 10px
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
        &.vs
          width: $sidebar-width / 1.5
          @media only screen and (max-width: 420px)
            width: $sidebar-width-small / 1.75
            height: $sidebar-width-small / 1.75



</style>
