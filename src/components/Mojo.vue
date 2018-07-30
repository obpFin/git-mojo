<template>
<div class="wrapper">
  <div class="content">
    <div class="inner">
      <Sidebar :loggedIn="loggedIn"/>
      <!-- <router-view></router-view> -->
      <transition name="fade">
        <div class="user__load" v-if="fetchingUser" key="load">
          <Spinner size="big" line-fg-color="#ff7043"/>
        </div>
        <User v-else-if="loggedIn" key="user"/>
        <UserInput v-else key="user-input"/>
      </transition>
    </div>
  </div>
</div>
</template>

<script>
import Sidebar from "./Sidebar/Sidebar.vue";
import User from "./User/User.vue";
import UserInput from "./User/UserInput.vue";
import Spinner from "vue-simple-spinner";

export default {
  name: "Mojo",
  created() {
    document.title = "Mojo";
  },
  components: {
    Sidebar,
    User,
    UserInput,
    Spinner
  },
  data: function() {
    return {
      user: {}
    };
  },
  methods: {},
  computed: {
    fetchingUser() {
      return this.$store.state.user.fetchUser;
    },
    loggedIn() {
      if (this.$store.state.user) {
        return this.$store.state.user.data.login;
      }
    }
  }
};
</script>

<style scoped lang="sass">
  @import "../assets/sass/mixins/mixins"
  @import "../assets/sass/main"

  .wrapper
    @include absolutecenter()
    width: 1280px
    height: 90vh
    background: $primary-lighter
    max-width: $app-max-width
    max-height: $app-max-height
    min-width: 320px

    @media only screen and (max-width: 420px)
      position: static
      margin: 0
      height: 100vh
      transform: none
      max-width: 100%
      max-height: 100%

    .content
      background: $primary-light
      .inner
        .user__load
          @include absolutecenter()

</style>
