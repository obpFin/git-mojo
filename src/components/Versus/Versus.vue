<template>
  <transition name="fade">
    <div class="versus">
      <div class="versus__user">
        <User :userImg="user.avatar_url" :userName="user.login"/>
      </div>
      <div class="versus__opponents">
        <div v-if="opponents">
          <div v-for="o in opponents" :key="o.id">
            <Opponent :data="o"/>
          </div>
        </div>
      </div>
      <div class="versus__setting">
        <div class="input">
          <input v-model="opponentName" class="text-area center" type="text"/>
          <button @click="addOpponent" class="btn box small">Add</button>
          <button id="cta" :disabled="!opponentName" class="btn red">GO</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import User from "./User.vue";
import Opponent from "./Opponent.vue";

export default {
  name: "versus",
  components: {
    User,
    Opponent
  },
  data: function() {
    return {
      opponentName: ""
    };
  },
  methods: {
    addOpponent: function() {
      this.$store.dispatch("getOpponent", this.opponentName);
      this.showOpponentInput = false;
    }
  },
  computed: {
    user() {
      return this.$store.state.user.data;
    },
    opponents() {
      console.log("Opponents: ", this.$store.state.opponent.opponents);
      return this.$store.state.opponent.opponents;
    }
  }
};
</script>

<style scoped lang="sass">
  @import "../../assets/sass/main"
  @import "../../assets/sass/mixins/mixins"
  .versus
    height: 100%
    margin-left: $sidebar-width
    background: $primary-lighter
    padding: 0 $base-margin * 2

    > div
      height: (100% / 3)
      display: flex
      flex-direction: column
      border-bottom: 1px $primary-light solid


    .versus__user
      justify-content: center
      align-items: center
    .versus__setting
      justify-content: center
      .input
        display: flex
        input.center
          margin: auto 0 auto auto
      #cta
        margin: auto
      
    

</style>
