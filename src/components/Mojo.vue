<template>
<div class="main">
  <div class="header">
  </div>
  <div class="content">
    <div class="inner">
      <h2>Team: Montel</h2>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Mojo",
  data: function() {
    return {};
  }
};
</script>

<style scoped lang="sass">
  @import "../assets/sass/mixins/mixins"
  @import "../assets/sass/main"
  .main
    @include inner-shadow
    height: 100vh
    margin: 120px
    background: $primary-lighter
    .header

      .header__text
    .content
      background: $primary-light

</style>
