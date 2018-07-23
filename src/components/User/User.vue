<template>
  <div class="user">
    <div v-if="name" class="user__info">
      <h1>You are {{ name }}</h1>
    </div>
    <div v-else class="user__name">
      <h1>Welcome</h1>
      <p>Please input your username</p>
      <div class="user__input">
        <input v-model="userName" placeholder="username">
        <button @click="setUserName">Set</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name"],
  data: function() {
    return {
      userName: ""
    };
  },
  methods: {
    setUserName() {
      this.$emit("onSetUserName", this.userName);
      this.userName = "";
    }
  }
};
</script>

<style scoped lang="sass">
  @import "../../assets/sass/main"
  @import "../../assets/sass/mixins/mixins"

  .user
    @include absolutecenter()
    //margin-left: $sidebar-width
    .user__name
      .user__input
        text-align: center
        margin-top: $base-margin

</style>
