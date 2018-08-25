<template>
  <div class="opponent">
    <div v-show="data.loading" class="opponent__info--loading">
      <Spinner/>
    </div>
    <div v-if="data.login" class="opponent__info">
      <img class="remove" src="../../assets/images/remove.png" alt="remove" @click="removeOpponent">
      <img class="vs" :src="data.avatar_url" alt="opponent-img">
      <p>{{ data.login }}</p>
    </div>
    <div v-show="data.notFound" class="opponent__info--not-found">
      <p>Opponent not found</p>
    </div>
  </div>
</template>

<script>
import Spinner from 'vue-simple-spinner';
import mojoScore from '../../utils/mojoScore';
import { opponentLevel } from '../../utils/utils';

export default {
  name: 'versus-opponent',
  props: ['data'],
  components: {
    Spinner
  },
  methods: {
    removeOpponent: function() {
      this.$store.dispatch('removeOpponent', this.data.id);
    }
  },
  computed: {
    notFound() {
      return this.data.notFound;
    },
    score() {
      return mojoScore(this.data);
    },
    userScore() {
      console.log('ASD', this.$store.state.user.data.score)
      return this.$store.state.user.data.score;
    }
  },
  created() {
    if (this.data.contributions) {
      console.log('opponentScore: ', this.score);
      console.log('userScore: ', this.userScore);
      console.log('dff: ', opponentLevel(this.userScore, this.score));
    }
  },

};
</script>

<style scoped lang="sass">
  @import "../../assets/sass/main"
  @import "../../assets/sass/mixins/mixins"

  .opponent
    .opponent__info
      display: flex
      img.vs
        width: 75px
        height: 75px
        border-radius: 100px
        margin: 10px 0
      img.remove
        height: 10px
        width: 10px
      p
        margin: auto 0
        padding-left: 20px
        text-transform: uppercase
        letter-spacing: 2.5px

    .opponent__info--loading
      display: flex
      padding: 20px
</style>
