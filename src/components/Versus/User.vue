<template>
  <div class="user">
    <div class="user__info">
      <div class="img-wrapper">
        <img v-bind:src="userImg" alt="img" class="user__img">
        <p class="name">{{ userName }}</p>
      </div>
      <p>Score</p>

    </div>
    <div class="user__score">
    </div>
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
    margin: auto 0
    @media only screen and (max-width: 420px)
      padding-top: 0
    .user__info
      display: flex
      .user__img
        width: 120px
        height: 120px
        border-radius: 100px
        @media only screen and (max-width: 420px)
          width: 80px
      p
        margin-left: 20px
      .name
        text-align: center
    .user__score
      margin: auto
      text-align: center


</style>
