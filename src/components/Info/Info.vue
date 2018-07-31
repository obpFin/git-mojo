<template>
  <transition name="fade">
  <div class="info">
    <h1>Git Mojo</h1>
    <ul>
      <hr class="vertical">
      <li class="text">By <a href="https://github.com/obpFin/git-mojo" target="_blank">Oskari Peltonen </a>2018</li>
      <li class="text">Made with <a href="https://vuejs.org"><img src="../../assets/logo.png" alt="Vue"></a></li>
      <li class="text">Made in <a href="https://www.instagram.com/p/BlptbDQgtXq/?taken-by=obp_fi" target="_blank"><img src="../../assets/images/camera-retro.png" alt=""></a></li>
    </ul>
  </div>
  </transition>
</template>

<script>
export default {
  name: "Info",
  data: function() {
    return {};
  }
};
</script>

<style scoped lang="sass">
  @import "../../assets/sass/main"
  @import "../../assets/sass/mixins/mixins"
  .info
    @include absolutecenter()
    text-align: center
    h1, li
      margin: 40px 0
    ul
      > li
        a
          color: $primary-red
          text-decoration: none
        img
          width: 40px
          height: auto
          transform: translateY(15px)

</style>
