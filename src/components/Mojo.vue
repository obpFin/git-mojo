<template>
  <div class="wrapper">
    <div class="content">
      <div class="inner">
        <TopBar v-if="isLoggedIn"/>
        <Sidebar v-if="isLoggedIn"/>
        <router-view>
          <User key="user"/>
        </router-view>
        <transition name="fade">
          <div class="user__load" v-if="fetchingUser" key="load">
            <Spinner size="big" line-fg-color="#ff7043"/>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar/Sidebar.vue';
import TopBar from './Topbar/Topbar.vue'
import User from './User/User.vue';
import UserInput from './User/UserInput.vue';
import Spinner from 'vue-simple-spinner';

export default {
  components: {
    Sidebar,
    TopBar,
    User,
    UserInput,
    Spinner
  },
  computed: {
    fetchingUser() {
      return this.$store.state.user.fetchUser;
    },
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    }
  }
};
</script>

<style scoped lang="sass">
  @import "../assets/sass/mixins/mixins"
  @import "../assets/sass/main"

  .wrapper
    @include absolutecenter()
    height: 90vh
    width: 100%
    background: $primary-lighter
    max-width: $app-max-width
    max-height: $app-max-height
    min-width: 320px
    overflow: auto

    @media only screen and (max-width: 420px)
      position: static
      margin: 0
      height: 100vh
      transform: none
      max-width: 100%
      max-height: 100%

    .content
      height: 100%
      .inner
        height: 100%
        .user__load
          @include absolutecenter()

</style>
