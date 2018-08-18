<template>
  <div class="opponent">
    <div v-show="data.loading" class="opponent__info--loading">
      <Spinner/>
    </div>
    <div v-if="data.login" class="opponent__info">
      <img v-bind:src="data.avatar_url" alt="opponent-img">
      <p>{{ data.login }}</p>
    </div>
    <div v-show="data.notFound" class="opponent__info--not-found">
      <p>Opponent not found</p>
    </div>
  </div>
</template>

<script>
import Spinner from "vue-simple-spinner";

export default {
  name: "versus-opponent",
  props: ["data"],
  components: {
    Spinner
  },
  computed: {
    notFound() {
      return this.data.notFound;
    }
  },
  watch: {
    data: function(newVal, oldVal) { // watch it
      console.log('Data', newVal);
    }
  },
  mounted() {
    console.log('Data', this.data);
  }
};
</script>

<style scoped lang="sass">
  @import "../../assets/sass/main"
  @import "../../assets/sass/mixins/mixins"

  .opponent
    .opponent__info
      display: flex
      img
        width: 75px
        height: 75px
        border-radius: 100px
        margin: 10px 0
    .opponent__info--loading
      display: flex
      padding: 20px
</style>
