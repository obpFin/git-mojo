<template>
  <div>
    <h1>Welcome</h1>
    <p>Please input your <span><img id="gh-logo" src="../../assets/images/github.png" alt="github-account"></span></p>
    <div class="user__input">
      <input class="text-area" v-model="userName" placeholder="username">
      <button class="btn" @click="emitUserNameToParent">Set</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "user-input",
  data: function() {
    return {
      userName: ""
    };
  },
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

  #gh-logo
    transform: translateY(20px)

  .user__input
    text-align: center
    margin-top: $base-margin
    button
      margin: auto
      margin-top: $base-margin
</style>
