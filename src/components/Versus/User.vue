<template>
  <div class="user">
    <img v-bind:src="userImg" alt="user-img" class="user__img">
    <p class="user__name">{{ userName }}</p>
  </div>
</template>

<script>
export default {
  name: "versus-user",
  props: ["userImg", "userName"]
};
</script>

<style scoped lang="sass">
  @import "../../assets/sass/main"
  @import "../../assets/sass/mixins/mixins"
  .user
    display: inline-block
    padding-top: $base-margin
    .user__img
      width: 100px
      height: auto
      border-radius: 100px
    .user__name
      text-align: center

</style>
