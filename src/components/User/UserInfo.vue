<template>
  <div class="user" v-bind:class="{ sidebarActive: sidebarActive }">
    <transition name="fade">
      <div class="welcome">
        <h1 class="welcome__text" v-show="!isWelcomed">Welcome {{ user.name || user.login }}</h1>
      </div>
    </transition>
    <transition name="fade">
      <div v-if="isWelcomed" class="container">
      <div class="history">
        <div v-if="user.avatar_url" class="history__image">
          <img v-bind:src="user.avatar_url" class="" alt="avatar">
          <h2 class="light">{{ user.name || user.login }}</h2>
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
        <div>
          <h2>Public contribution history</h2>
          <ul>
            <li v-for="year in years" :key="year.year">
              {{ year.year }} <span>{{ year.total }}</span>
            </li>
          </ul>
        </div>

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
    sidebarActive() {
      return this.$store.state.user.sidebar;
    },
    isMobileView() {
      return this.$store.state.user.mobile;
    }
  },
  created() {
    this.$store.dispatch('setNav', false);
  },
  mounted() {
    if (this.isMobileView) {
      this.$store.dispatch('setNav', false);
    }
    if (this.user.name || this.user.login) {
      // show info immediately after initial login
      if (this.isWelcomed) {
        this.showInfo = true;
      }
      // else show welcome text for 2 secs
      setTimeout(() => {
        if (!this.isWelcomed) {
          this.$store.dispatch('welcomeUser', true);
        }
        this.showInfo = true;
      }, 1500);
    }
  }
};
</script>

<style scoped lang="sass">
  @import "../../assets/sass/main"
  @import "../../assets/sass/mixins/mixins"
  .user
    transform: translateX(0)
    transition: transform .6s ease
    @media only screen and (min-width: 420px)
      margin-left: $sidebar-width
    &.sidebarActive
      transform: translateX($sidebar-width-small)
    .welcome
      position: absolute
      top: 0
      height: 80vh
      width: 65vw
      @media only screen and (max-width: 420px)
        width: 100vw
      .welcome__text
        @include absolutecenter()
        text-transform: uppercase
        @media only screen and (min-width: 420px)
          left: 40%
    .container
    .history
      padding: $base-margin
      display: flex
      border-bottom: 1px $primary-light solid
      @media only screen and (max-width: 420px)
        flex-direction: column
        padding: $base-margin-small
      .history__image
        display: inline-block
        padding: 40px
        @media only screen and (max-width: 420px)
          display: flex
          flex-direction: column
          align-items: center
          padding: 10px

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
          @include highlight()
    .commits
      display: flex
      flex-direction: column
      h2
        padding: 60px
        padding-bottom: 20px
        @media only screen and (max-width: 420px)
          padding: 40px 40px 20px 40px
      ul
        padding-left: 40px
        padding-bottom: 30px
        @media only screen and (max-width: 420px)
          padding-left: $base-margin-small
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
            text-shadow: 1px 0 2px black
            @media only screen and (max-width: 420px)
              transform: none
              padding-bottom: 10px
              width: 20px
</style>
