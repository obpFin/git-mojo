<template>
  <div>
    <h1>Welcome</h1>
    <p>Please input your username</p>
    <div class="user__input">
      <input v-model="userName" placeholder="username">
      <button @click="emitUserNameToParent">Set</button>
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

  .user__input
    text-align: center
    margin-top: $base-margin
</style>
