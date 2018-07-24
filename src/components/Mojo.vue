<template>
<div class="main">
  <div class="header">
  </div>
  <div class="content">
    <div class="inner">
      <Sidebar />
      <User @setUser="setUser" v-bind:user="user"></User>
    </div>
  </div>
</div>
</template>

<script>
import Sidebar from "./Sidebar/Sidebar.vue";
import User from "./User/User.vue";

export default {
  name: "Mojo",
  components: {
    Sidebar,
    User
  },
  data: function() {
    return {
      user: {}
    };
  },
  methods: {
    setUser(user = {}) {
      console.log("Mojo -- setUser", user);
      this.user = user;
    }
  }
};
</script>

<style scoped lang="sass">
  @import "../assets/sass/mixins/mixins"
  @import "../assets/sass/main"

  .main
    //@include inner-shadow
    height: 100vh
    margin: 120px
    background: $primary-lighter
    .header

      .header__text
    .content
      background: $primary-light

</style>
