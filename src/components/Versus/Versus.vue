<template>
  <transition name="fade">
    <div class="versus">
      <h1>VS Mode </h1>
      <User :userImg="user.avatar_url" :userName="user.login"/>
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
    margin-left: $sidebar-width
    background: $primary-lighter
    padding: $base-margin
    @media only screen and (max-width: 420px)
      margin-left: $sidebar-width-small
  

</style>
