<template>
  <div class="opponents">
    <div v-if="opponents" class="opponents__data">
      <p>Data</p>
    </div>
    <div v-else>
      <input type="text">
    </div>
  </div>
</template>

<script>
export default {
  name: "versus-opponent",
  props: ["data"]
};
</script>

<style scoped lang="sass">
  @import "../../assets/sass/main"
  @import "../../assets/sass/mixins/mixins"

  .opponent

</style>
