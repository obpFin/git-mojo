<template>
  <transition name="fade">
    <div class="versus">
      <div class="versus__user">
        <User :data="user"/>
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
          <div class="input__add">
            <input :disabled="maxOpponents" :class="{ disabled: maxOpponents}" v-model="opponentName" v-on:keyup.enter="addOpponent" class="text-area center" type="text" placeholder="username"/>
            <button :disabled="maxOpponents" @click="addOpponent" class="btn box small" :class="{ disabled: maxOpponents}">Add</button>
          </div>
          <button id="cta" :disabled="!opponents" class="btn red">GO</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import User from './User.vue';
import Opponent from './Opponent.vue';

export default {
  name: 'versus',
  components: {
    User,
    Opponent
  },
  data: function() {
    return {
      opponentName: '',
      maxOpponents: false
    };
  },
  methods: {
    addOpponent: function() {
      this.$store.dispatch('getOpponent', this.opponentName);
      this.opponentName = ''
    }
  },
  computed: {
    user() {
      return this.$store.state.user.data;
    },
    opponents() {
      console.log('Opponents: ', this.$store.state.opponent.opponents);
      return this.$store.state.opponent.opponents;
    }
  },
  watch: {
    opponents: function(newVal) {
      if (newVal.length >= 3) {
        this.maxOpponents = true;
      } else {
        this.maxOpponents = false;
      }
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
    @media only screen and (max-width: 420px)
      margin-left: $sidebar-width-small
      padding: 0 20px

    > div
      height: (100% / 3)
      display: flex
      flex-direction: column
      border-bottom: 1px $primary-light solid
    .versus__user
      justify-content: center
      align-items: center
      height: 30%
      @media only screen and (max-width: 420px)
        height: 20%

    .versus__opponents
      height: 40%
      justify-content: center
      @media only screen and (max-width: 420px)
        height: 50%

    .versus__setting
      height: 30%
      justify-content: center
      .input
        display: flex
        justify-content: center
        .input__add
          display: flex
        @media only screen and (max-width: 420px)
          flex-direction: column
          .input__add > *
            display: inline
          div.input__add
            width: 200px
            margin: 0 auto
            margin-bottom: 40px
            input
              width: 55%
              padding: 0
              padding-left: 5px
            button
              width: 40%

        input.center
          margin: auto 0 auto auto
      #cta
        margin: auto
</style>
