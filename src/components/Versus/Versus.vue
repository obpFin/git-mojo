<template>
  <transition name="fade">
    <div class="versus">
      <User :userImg="user.avatar_url" :userName="user.login"/>
      <hr class="vertical"/>
      <button v-if="!showOpponentInput" @click="enableInput" class="btn">Add Opponent</button>
      <input v-else class="text-area" type="text"/>
      <p>Work In Progress</p>
      <button disabled="disabled" @click="addOpponent" class="btn red">GO</button>
    </div>
  </transition>
</template>

<script>
import User from "./User.vue";
export default {
  name: "versus",
  components: {
    User
  },
  data: function() {
    return {
      showOpponentInput: false
    };
  },
  methods: {
    enableInput: function() {
      this.showOpponentInput = true;
    },
    addOpponent: function() {
      this.$store.dispatch("getOpponent", this.userName);
    }
  },
  computed: {
    user() {
      return this.$store.state.user.data;
    }
  }
};
</script>

<style scoped lang="sass">
  @import "../../assets/sass/main"
  @import "../../assets/sass/mixins/mixins"
  .versus
    display: flex
    margin-left: $sidebar-width
    background: $primary-lighter
    padding: $base-margin * 2
    @media only screen and (max-width: 420px)
      margin-left: $sidebar-width-small
      display: flex
      flex-direction: column
      align-items: center
      padding: 40px
    > button, input
      margin: auto 0

    hr
      height: 50vh
      margin: 0 80px
      @media only screen and (max-width: 420px)
        display: none
    input

</style>
