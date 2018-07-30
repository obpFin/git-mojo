<template>
  <div class="user">
    <transition name="fade">
      <div class="user__load" v-if="fetchingUser" key="load">
        <Spinner size="big" line-fg-color="#ff7043"/>
      </div>
      <div v-if="userData" class="user__info" key="info">
        <UserInfo/>
      </div>
      <div v-else-if="fetchingUser == false" class="user__name" key="input">
        <!-- <UserInput v-bind:userName="userName" v-bind:userNotFound="userNotFound"/> -->
      </div>
    </transition>  
  </div>
</template>

<script>
import Spinner from "vue-simple-spinner";
import UserInput from "./UserInput.vue";
import UserInfo from "./UserInfo.vue";

export default {
  name: "user",
  props: ["user"],
  components: {
    UserInput,
    UserInfo,
    Spinner
  },
  data: function() {
    return {};
  },
  methods: {},
  computed: {
    userData() {
      return this.$store.state.user.data;
    },
    fetchingUser() {
      return this.$store.state.user.fetchUser;
    }
  }
};
</script>

<style scoped lang="sass">
  @import "../../assets/sass/main"
  @import "../../assets/sass/mixins/mixins"

  .user
    background: $primary-lighter
    .user__name, .user__load
      @include absolutecenter()
      // @media only screen and (max-width: 420px)
      //   position: static
      //   transform: none!important
      //   width: auto

    .user__name
      @media only screen and (min-width: 1025px)
        left: 40%
      @media only screen and (max-width: 420px)
        transform: translate(-40%, -50%)
        



</style>
