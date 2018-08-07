<template>
  <div v-if="InputPending" class="container">
    <h1>Welcome</h1>
    <p>Please input your 
      <span>
        <img id="gh-logo" v-tooltip.top-center="'Github'" src="../../assets/images/github.png" alt="github-account">
      </span>
    </p>
    <p class="warning" v-if="userNotFound == true">User not found!</p>
    <div class="user__input">
      <input class="text-area" v-focus v-model="userName" v-on:keyup.enter="onGetUser" placeholder="username">
      <button class="btn" @click="onGetUser">Set</button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VTooltip from "v-tooltip";
Vue.use(VTooltip);

export default {
  name: "user-input",
  data: function() {
    return {
      userName: "",
      InputPending: true
    };
  },
  components: {
    VTooltip
  },
  props: [],
  methods: {
    onGetUser() {
      this.InputPending = false;
      this.$store.dispatch("getUser", this.userName);
    }
  },
  computed: {
    userNotFound() {
      return this.$store.state.user.userNotFound;
    }
  },
  watch: {
    userNotFound: function(notFound) {
      if (notFound) {
        this.InputPending = true;
      }
    }
  },
  directives: {
    focus: {
      inserted: function(el) {
        el.focus();
      }
    }
  }
};
</script>

<style scoped lang="sass">
  @import "../../assets/sass/main"
  @import "../../assets/sass/mixins/mixins"

  #gh-logo
    transform: translateY(20px)
  .container
    @include abs-pos()

    background: $primary-light
    padding: $base-margin
    border-radius: 5px
    @media only screen and (max-width: 420px)
      padding: $base-margin / 2
    .user__input
      text-align: center
      margin-top: $base-margin
      button
        margin: auto
        margin-top: $base-margin
</style>
