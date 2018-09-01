<template>
  <transition name="fade">
    <div class="versus" v-bind:class="{ sidebarActive: sidebarActive }">
      <div class="versus__user">
        <User :data="user"/>
        <p class="versus__text">Versus</p>
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
            <input :disabled="maxOpponents" :class="{ disabled: maxOpponents}" v-model="opponentName" v-on:keyup.enter="addOpponent" class="text-area center" type="text" placeholder="Github user"/>
            <button :disabled="maxOpponents" @click="addOpponent" class="btn box small" :class="{ disabled: maxOpponents}">Add</button>
          </div>
          <button id="cta" @click="onVersusStart" :disabled="!opponents" class="btn red">GO</button>
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
  data() {
    return {
      opponentName: '',
      maxOpponents: false
    };
  },
  methods: {
    addOpponent() {
      this.$store.dispatch('getOpponent', this.opponentName);
      this.opponentName = ''
    },
    onVersusStart() {
      this.$router.push({name: 'results', params: {user: this.user, opponents: this.opponents}});
    }
  },
  computed: {
    user() {
      return this.$store.state.user.data;
    },
    opponents() {
      console.log('Opponents: ', this.$store.state.opponent.opponents);
      return this.$store.state.opponent.opponents;
    },
    sidebarActive() {
      return this.$store.state.user.sidebar;
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
  },
  created() {
  }
};
</script>

<style scoped lang="sass">
  @import "../../assets/sass/main"
  @import "../../assets/sass/mixins/mixins"
  .versus
    height: 100%
    background: $primary-lighter
    padding: 0 $base-margin * 2
    transform: translateX(0)
    transition: transform .6s ease
    &.sidebarActive
      transform: translateX(20px)
      left: -5%
    @media only screen and (max-width: 420px)
      padding: 0

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
        height: initial
        margin-top: 20px
      .versus__text
        font-size: $text-lg
        color: $primary-red
        text-transform: uppercase

    .versus__opponents
      height: 40%
      justify-content: center
      @media only screen and (max-width: 420px)
        height: 45%
      > div
        display: flex
        justify-content: center
        @media only screen and (max-width: 420px)
          flex-direction: column
    .versus__setting
      height: 30%
      justify-content: center
      @media only screen and (max-width: 420px)
        justify-content: start
        margin-top: 40px
      .input
        display: flex
        justify-content: center
        .input__add
          display: flex
        @media only screen and (max-width: 420px)
          flex-direction: column
          .input__add > *
            display: inline
            border-radius: 0
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
        margin: 0 80px
        @media only screen and (max-width: 420px)
         margin: auto
</style>
