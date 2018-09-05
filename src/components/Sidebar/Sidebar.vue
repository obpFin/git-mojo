<template>
  <nav class="sidebar" v-bind:class="{ active: this.active }">
    <router-link to="/" id="mojo">
      <a><img src="../../assets/images/mojo.png" alt="mojo"></a>
    </router-link>
    <router-link to="/user" class="link">
      <img src="../../assets/images/home.png" alt="home">
    </router-link>
    <router-link to="/versus" class="link">
      <img class="vs" src="../../assets/images/vs.png" alt="home">
    </router-link>
    <router-link to="/info" class="link">
      <img src="../../assets/images/info.png" alt="info">
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'test',
  data() {
    return {};
  },
  props: ['isLoggedIn'],
  computed: {
    active() {
      return this.$store.state.user.sidebar;
    }
  }
};
</script>

<style scoped lang="sass">
  @import "../../assets/sass/main"

  .sidebar
    height: 100%
    top: 0
    position: fixed
    width: $sidebar-width
    background: $primary-light
    display: flex
    flex-direction: column
    transform: translateX(-100%)
    transition: transform 0.6s ease
    z-index: 9999
    @media only screen and (min-width: 420px)
      transform: translateX(0)
    &.active
      transform: translateX(0)
    @media only screen and (max-width: 420px)
      width: $sidebar-width-small
      height: 100%
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
          width: $sidebar-width-small / 2.0
          height: $sidebar-width-small / 2.0
        &.vs
          width: $sidebar-width / 1.5
          @media only screen and (max-width: 420px)
            width: $sidebar-width-small / 1.4
            height: $sidebar-width-small / 1.4
</style>
