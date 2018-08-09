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
    margin: auto 0
    @media only screen and (max-width: 420px)
      padding-top: 0

    .user__img
      width: 120px
      height: auto
      border-radius: 100px
      @media only screen and (max-width: 420px)
        width: 80px

    .user__name
      text-align: center

</style>
