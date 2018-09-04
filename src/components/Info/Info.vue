<template>
  <transition name="fade">
  <div class="info" v-bind:class="{ sidebarActive: sidebarActive }">
    <hr class="horizontal">
    <h1>GH Mojo</h1>
    <hr class="horizontal">
    <ul>
      <li class="text">By <a href="https://github.com/obpFin" target="_blank">Oskari Peltonen </a>2018</li>
      <li class="text lower">Made with <a href="https://vuejs.org" target="_blank"><img src="../../assets/logo.png" alt="Vue"></a></li>
      <li class="text lower">Repository <a href="https://github.com/obpFin/git-mojo" target="_blank"><img src="../../assets/images/github.png" alt="Vue"></a></li>
      <!-- <li class="text">Made in <a href="https://www.instagram.com/p/BlptbDQgtXq/?taken-by=obp_fi" target="_blank"><img src="../../assets/images/camera-retro.png" alt=""></a></li> -->
    </ul>
  </div>
  </transition>
</template>

<script>
export default {
  name: 'Info',
  data: function() {
    return {};
  },
  computed: {
    sidebarActive() {
      return this.$store.state.user.sidebar;
    },
    isMobileView() {
      return this.$store.state.user.mobile;
    }
  },
  mounted() {
    if (this.isMobileView) {
      this.$store.dispatch('setNav', false);
    }
  }
};
</script>

<style scoped lang="sass">
  @import "../../assets/sass/main"
  @import "../../assets/sass/mixins/mixins"
  .info
    text-align: center
    transform: translateX(0)
    transition: transform .6s ease
    position: relative
    top: 10%
    @media only screen and (min-width: 420px)
      margin-left: $sidebar-width
    &.sidebarActive
      transform: translateX($sidebar-width-small)
      left: -5%
    hr.horizontal
      @include absolutecenter()
      &:nth-of-type(2)
        top: 0
    h1, li
      padding: 40px 0
    ul
      > li
        &.lower
          transform: translateY(40px)

        a
          color: $primary-red
          text-decoration: none
        img
          width: 40px
          height: auto
          transform: translateY(15px)

</style>
