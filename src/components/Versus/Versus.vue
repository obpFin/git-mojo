<template>
  <transition name="fade">
    <div class="versus">
      <User :userImg="user.avatar_url" :userName="user.login"/>
      <hr class="vertical"/>
      <button class="btn">Add Opponent</button>
      <p>Work In Progress</p>
    </div>
  </transition>
</template>

<script>
import User from "./User.vue";
export default {
  name: "versus",
  components: {
    User
  },
  computed: {
    user() {
      return this.$store.state.user.data;
    }
  }
};
</script>

<style scoped lang="sass">
  @import "../../assets/sass/main"
  @import "../../assets/sass/mixins/mixins"
  .versus
    display: flex
    margin-left: $sidebar-width
    background: $primary-lighter
    padding: $base-margin * 2
    @media only screen and (max-width: 420px)
      margin-left: $sidebar-width-small
      display: flex
      flex-direction: column
      align-items: center
      padding: 40px
    hr
      height: 50vh
      margin: 0 80px
      @media only screen and (max-width: 420px)
        display: none
    button.btn
      margin: auto 0

</style>
