<template>
  <transition name="fade">
  <div class="result">
    <img class="back" src="../../assets/images/back.png" @click="pushBack" alt="back">
    <div class="result__inner" v-bind:class="{ sidebarActive: sidebarActive }">
      <div v-for="(r, index) in results" :key="r.id" :class="`place${index+1}`">
        <i>{{ index + 1 }}</i>
        <img :src="r.img" alt="img">
        <div class="result__info">
          <p class="name">{{ r.name }}</p>
          <p class="">
            <span>{{ r.score }}</span>
            points
          </p>
        </div>
      </div>
    </div>
  </div>
  </transition>
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
    },
    pushBack() {
      this.$router.push({name: 'versus'});
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
    },
    sidebarActive() {
      return this.$store.state.user.sidebar;
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
    img.back
      width: 42px
      filter: brightness(0) invert(1)
      margin-top: 40px
      margin-left: $sidebar-width + 40px
      @media only screen and (max-width: 420px)
        margin-left: 20px

    .result__inner
      @include absolutecenter()
      background: $primary-dark
      height: 70%
      display: flex
      flex-direction: column
      justify-content: center
      margin-left: $sidebar-width / 2
      padding: 40px $base-margin * 2
      border-radius: 5px
      margin-top: 40px
      &.sidebarActive
        margin-left: $base-margin
        width: 100%
        margin: 60px
      @media only screen and (max-width: 420px)
        height: 100%
        margin: auto
      > div
        display: flex
        &.place1
          i
            font-size: 65px
            color: #FFD700
            margin: 10px
            @media only screen and (max-width: 420px)
              margin: 20px
              font-size: 50px
          img
            width: 100px
            height: 100px
            @media only screen and (max-width: 420px)
              width: 75px
              height: 75px
          > div p
            font-size: 2.0em
            @media only screen and (max-width: 420px)
              font-size: 1.5em
        &.place2
          margin-left: 20px
          i
            font-size: 45px
            color: #C0C0C0
            margin: 10px
            @media only screen and (max-width: 420px)
              margin: 20px
              font-size: 40px
          img
            width: 80px
            height: 80px
          > div p
            font-size: 1.5em
            @media only screen and (max-width: 420px)
              font-size: 1.2em
        &.place3
          margin-left: 40px
          i
            font-size: 30px
            color: #cd7f32
            margin: 10px
            @media only screen and (max-width: 420px)
              margin: 20px
              font-size: 25px
          img
            width: 60px
            height: 60px
          > div p
            font-size: 1.2em
            @media only screen and (max-width: 420px)
              margin: 20px
              font-size: 0.9rem

        &.place4
          margin-left: 60px
          i
            font-size: 20px
            color: #ffffff
            margin: 10px
            @media only screen and (max-width: 420px)
              margin: 20px
              font-size: 16px
          img
            width: 40px
            height: 40px
          > div p
            font-size: 1em
            @media only screen and (max-width: 420px)
              font-size: 0.8rem
        img
          border-radius: 100px
          margin: 40px 0
        p
          margin: auto
          margin-left: 20px
          font-size: $text-xl
          span
            @include highlight()
            @media only screen and (max-width: 420px)
              font-size: $text-lg / 1.5
          &.name
            font-size: 38px
        > div
          margin: auto
          @media only screen and (max-width: 420px)
            margin: auto 0
</style>
