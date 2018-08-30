<template>
  <div class="result">
    <div v-for="(r, index) in results" :key="r.id" class="">
      <i>{{ index + 1 }}</i>
      <img :src="r.img" alt="img">
      <p>{{ r.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {

    }
  },
  methods: {
    calculateResults(users) {
      return users.sort((a, b) => b.score - a.score)
        .map(user => ({
          name: user.login,
          img: user.avatar_url,
          score: user.score
        }))
    }
  },
  computed: {
    opponents() {
      return this.$route.params.opponents
    },
    user() {
      return this.$route.params.user
    },
    results() {
      const users = [this.user, ...this.opponents]
      return this.calculateResults(users)
    }
  },
  created() {
  }
}
</script>

<style scoped lang="sass">
  @import "../../assets/sass/main"
  @import "../../assets/sass/mixins/mixins"

  .result
    @include absolutecenter()
    display: flex
    flex-direction: column
    justify-content: center
    height: 100%
    margin-left: $sidebar-width / 2
    background: $primary-lighter
    padding: 0 $base-margin * 2
    @media only screen and (max-width: 420px)
      margin-left: $sidebar-width-small
      padding: 0 20px
    > div
      display: flex
      i
        font-size: 60px
        color: #FFD700
        margin: 10px
      img
        width: 100px
        height: 100px
        border-radius: 100px
        margin: 40px 0
      p
        margin: auto 20px


</style>
