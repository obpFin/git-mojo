<template>
  <div class="info">
    <p>Info</p>
  </div>
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

</style>
