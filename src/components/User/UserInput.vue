<template>
  <div class="container">
    <h1 v-if="userNotFound == false">Welcome</h1>
    <p 
      v-if="userNotFound == false">Please input your 
      <span>
        <img id="gh-logo" v-tooltip.top-center="msg" src="../../assets/images/github.png" alt="github-account">
      </span>
    </p>
    <p class="warning" v-else>User not found!</p>
    <div class="user__input">
      <input class="text-area" v-model="userName" placeholder="username">
      <button class="btn" @click="emitUserNameToParent">Set</button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VTooltip from 'v-tooltip';
Vue.use(VTooltip);

export default {
  name: "user-input",
  data: function() {
    return {
      userName: "",
      msg: "Github"
    };
  },
  components: {
    VTooltip
  },
  props: ["userNotFound"],
  methods: {
    emitUserNameToParent() {
      console.log("UserInput -- emitUserNameToParent", this.userName);
      this.$emit("setUserName", this.userName);
      this.userName = "";
    }
  }
};
</script>

<style scoped lang="sass">
  @import "../../assets/sass/main"
  @import "../../assets/sass/mixins/mixins"
  @import "../../assets/sass/modules/tooltip.sass"

  #gh-logo
    transform: translateY(20px)
  .container
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
