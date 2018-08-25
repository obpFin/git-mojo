<template>
  <div>
    <transition name="fade">
      <h1 class="welcome-text" v-if="!isWelcomed">Welcome {{ user.name || user.login }}</h1>
    </transition>
    <transition name="fade">
    <div v-if="showInfo" class="user-info" v-bind:class="{ active: this.active }">
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
      <div class="history">
        <div v-if="user.avatar_url" class="history__image">
          <img v-bind:src="user.avatar_url" class="" alt="avatar">
          <h2 v-if="user.name" class="light">{{ user.name }}</h2>
          <hr class="horizontal"/>
        </div>
        <div class="history__info">
          <p class="light" v-if="user.years">
            You have <span class="highlight">{{ user.years.length }}</span> years of contribution history
          </p>
          <p class="light" v-if="user.contributions">
            You have <span class="highlight">{{ user.contributions.length }}</span> contributions total
          </p>
          <p class="light" v-if="user.followers > 0">
            You have <span class="highlight">{{ user.public_repos }}</span> public repositories with <span class="highlight">{{ user.followers }}</span> followers
          </p>
          <p class="light" v-else>
            You have <span class="highlight">{{ user.public_repos }}</span> public repositories
          </p>
          <p class="light" v-if="user.favoriteLanguage && user.favoriteLanguage != 'null'">
            Your favorite language is <span class="highlight">{{ user.favoriteLanguage }}</span>
          </p>
          <p class="light" v-if="user.score">
            Your Mojo Score is <span class="highlight">{{ user.score }}</span>
          </p>
        </div>
      </div>
      <div class="commits">
        <h2>Public contribution history</h2>
        <ul>
          <li v-for="year in years" :key="year.year">
            {{ year.year }} <span>{{ year.total }}</span>
          </li>
        </ul>
      </div>
    </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'user-info',
  data() {
    return {
      showInfo: false,
      isActive: false
    };
  },
  props: [],
  methods: {
    allowBlog(maxChars) {
      if (this.user.blog) {
        return this.user.blog.length <= maxChars;
      }
    },
    toggleNav() {
      this.$store.dispatch('toggleNav');
    }
  },
  computed: {
    user() {
      return this.$store.state.user.data;
    },
    fetchingUser() {
      return this.$store.state.user.fetchUser;
    },
    isWelcomed() {
      return this.$store.state.user.isWelcomed;
    },
    years() {
      return this.$store.state.user.data.years;
    },
    orgs() {
      return this.$store.state.user.data.orgs;
    },
    active() {
      return this.$store.state.user.sidebar;
    }
  },
  mounted: function() {
    if (this.user.name || this.user.login) {
      // show info immediately after initial login
      if (this.isWelcomed) {
        this.showInfo = true;
      }
      // else show welcome text for 3 secs
      setTimeout(() => {
        if (!this.isWelcomed) {
          this.$store.dispatch('welcomeUser', true);
        }
        this.showInfo = true;
      }, 2000);
    }
  }
};
</script>

<style scoped lang="sass">
  @import "../../assets/sass/main"
  @import "../../assets/sass/mixins/mixins"

  .welcome-text
    @include absolutecenter()
    text-transform: uppercase
  .user-info
    transform: translateX(0)
    transition: transform .6s ease
    @media only screen and (min-width: 420px)
      margin-left: $sidebar-width
    &.active
      transform: translateX($sidebar-width-small)
    .top
      display: flex
      align-items: center
      border-bottom: 1px $primary-light solid
      width: 100%
      height: 80px
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
          @media only screen and (max-width: 420px)
            width: min-content
            font-size: 10px
        hr
          margin-left: 40px
          @media only screen and (max-width: 420px)
            margin-left: 20px
    .history
      padding: $base-margin 0
      display: flex
      border-bottom: 1px $primary-light solid
      @media only screen and (max-width: 420px)
        flex-direction: column
      .history__image
        display: inline-block
        padding: 40px
        @media only screen and (max-width: 420px)
          display: flex
          flex-direction: column
          align-items: center
          padding: 30px

        img
          width: 150px
          height: 150px
          border-radius: 100px
          @media only screen and (max-width: 420px)
            width: 100px
            height: 100px
        h2
          text-align: center
          margin-top: 10px
        hr
          margin: auto
      .history__info
        margin-left: 120px
        display: flex
        flex-direction: column
        justify-content: center
        hr
          margin: 20px 0
        @media only screen and (max-width: 420px)
          margin-left: 20px
        p > span
          color: $primary-red
          font-weight: bold
          font-size: $text-lg
          text-shadow: 1px 0 2px black
    .commits
      h2
        padding: 40px
      ul
        padding-left: 40px
        > li
          display: inline-block
          zoom: 1
          padding: 0 20px
          width: 40px
          span
            transform: translateY(5px)
            display: inline-block
            color: $primary-red
            font-weight: bold
            font-size: $text-lg
            text-shadow: 1px 0 5px black
            @media only screen and (max-width: 420px)
              transform: none
              padding-bottom: 10px
              width: 20px
</style>
