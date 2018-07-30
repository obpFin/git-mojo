<template>
  <div class="sidebar">
    <router-link to="/mojo">
      <a id="mojo"><img src="../../assets/images/mojo.png" alt="mojo"></a>
    </router-link>
    <router-link v-if="loggedIn" to="/user" class="link" src="../../assets/images/home.png" alt="home">
      <img src="../../assets/images/home.png" alt="home">
    </router-link>
    <router-link to="/info" class="link">
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
      margin: 20px auto
      img
        width: $sidebar-width / 2.5
        height: $sidebar-width / 2.5
        @media only screen and (max-width: 420px)
          width: $sidebar-width-small / 2.5
          height: $sidebar-width-small / 2.5


</style>
