<template>
  <transition name="fade">
    <div class="versus">
      <p>ADSADFsd </p>
    </div>
  </transition>
</template>

<script>
export default {
  name: "versus"
};
</script>

<style scoped lang="sass">
  @import "../../assets/sass/main"
  @import "../../assets/sass/mixins/mixins"
  .versus
    margin-left: $sidebar-width
    @media only screen and (max-width: 420px)
      margin-left: $sidebar-width-small
  

</style>
