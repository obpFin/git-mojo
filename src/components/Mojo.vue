<template>
<div class="wrapper">
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
  created() {
    document.title = "Mojo";
  },
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

  .wrapper
    height: 90vh
    margin: 120px
    background: $primary-lighter
    max-width: 1280px
    min-width: 320px

    @media only screen and (max-width: 420px)
      margin: 0
    .content
      background: $primary-light

</style>
