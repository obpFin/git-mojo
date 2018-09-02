<template>
  <div v-if="isWelcomed" class="top-bar" v-bind:class="{ sidebarActive: sidebarActive }">
    <div class="top">
      <div class="top__item" @click="toggleNav" style="margin-left: 10px">
        <img class="hamburger" src="../../assets/images/hamburger.svg" alt="hamburger">
        <hr class="vertical"/>
      </div>
      <div class="top__item">
        <p>{{ user.login }}</p>
        <hr class="vertical"/>
      </div>
      <div v-if="user.company" class="top__item">
        <p>{{ user.company }}</p>
        <hr class="vertical"/>
      </div>
      <div v-if="user.location" class="top__item">
        <p>{{ user.location }}</p>
        <hr class="vertical"/>
      </div>
      <div v-if="user.blog && this.allowBlog(50)" class="top__item blog">
        <p>{{ user.blog }}</p>
        <hr class="vertical"/>
      </div>
      <div v-if="user.orgs" class="top__item orgs">
        <img class="top__item--img" v-bind:src="org.avatar_url" v-for="org in orgs" :key="org.id" v-tooltip.top-center="org.login" v-if="orgs"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showInfo: true,
      isActive: false
    };
  },
  computed: {
    user() {
      return this.$store.state.user.data;
    },
    sidebarActive() {
      return this.$store.state.user.sidebar;
    },
    isWelcomed() {
      return this.$store.state.user.isWelcomed;
    },
    orgs() {
      return this.$store.state.user.data.orgs;
    }
  },
  methods: {
    toggleNav() {
      this.$store.dispatch('toggleNav');
    },
    allowBlog(maxChars) {
      if (this.user.blog) {
        return this.user.blog.length <= maxChars;
      }
    }
  }
}
</script>

<style scoped lang="sass">
  @import "../../assets/sass/main"
  @import "../../assets/sass/mixins/mixins"

  .top-bar
    position: relative
    z-index: 9999
    background: $primary-light
    transform: translateX(0)
    transition: transform .6s ease
    @media only screen and (min-width: 420px)
      margin-left: $sidebar-width
    &.sidebarActive
      transform: translateX($sidebar-width-small)
    .top
      display: flex
      align-items: center
      width: 100%
      height: 70px
      .top__item
        display: flex
        align-items: center
        margin-left: 40px
        @media only screen and (max-width: 420px)
          margin-left: 20px
        &.blog
          @media only screen and (max-width: 420px)
            display: none
        &.orgs
          @media only screen and (max-width: 420px)
            flex-direction: column
            justify-content: space-around
            height: 50px
        .top__item--img
          width: 40px
          height: auto
          margin-right: 40px
          @media only screen and (max-width: 420px)
            margin: 0
            width: 20px
        .hamburger
          width: 35px
          @media only screen and (min-width: 420px)
            display: none

        p
          color: white
          @media only screen and (max-width: 420px)
            width: min-content
            font-size: 10px
        hr
          margin-left: 40px
          @media only screen and (max-width: 420px)
            margin-left: 20px
</style>
