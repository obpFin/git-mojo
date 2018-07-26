<template>
  <div>
    <transition name="fade">
      <h1 class="welcome-text" v-if="showWelcome">Welcome {{ user.name || user.login }}</h1>
    </transition>
    <transition name="fade">
    <div v-if="showInfo" class="user-info">
      <div class="top">
        <div class="item" style="margin-left: 20px">
          <p class="top__name">{{ user.login }}</p>
          <hr class="vertical"/>
        </div>
        <div v-if="user.company" class="item">
          <p class="top__company">{{ user.company }}</p>
          <hr class="vertical"/>
        </div>
        <div v-if="user.blog && this.allowBlog(50)" class="item top__blog">
          <p>{{ user.blog }}</p>
          <hr class="vertical"/>
        </div>
        <div v-if="user.location" class="item">
          <p class="top__company item">{{ user.location }}</p>
        </div>
      </div>
      <div class="score">
        <div v-if="user.avatar_url" class="score__image">
          <img v-bind:src="user.avatar_url" class="" alt="avatar">
          <h2 v-if="user.name" class="light">{{ user.name }}</h2>
        </div>
        <div class="score__info">
          <p class="light text-lg" v-if="user.contribs.years">
            You have <span class="highlight">{{ user.contribs.years.length }}</span> years of contribution history
          </p>
          <p class="light text-lg" v-if="user.contribs.years">
            You have <span class="highlight">{{ user.contribs.contributions.length }}</span> commits to public repositories
          </p>
        </div>
      </div>
    </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "user-info",
  data() {
    return {
      showWelcome: false,
      showInfo: false
    };
  },
  props: ["user"],
  methods: {
    allowBlog(maxChars) {
      if (this.user.blog) {
        return this.user.blog.length <= maxChars;
      }
    }
  },
  mounted() {
    if (this.user.name || this.user.login) {
      this.showWelcome = true;
      setTimeout(() => {
        this.showWelcome = false;
        this.showInfo = true;
      }, 3000);
    }
  }
};
</script>

<style scoped lang="sass">
  @import "../../assets/sass/main"
  @import "../../assets/sass/mixins/mixins"
  
  .welcome-text
    @include absolutecenter()
  .user-info
    margin-left: $sidebar-width
    @media only screen and (max-width: 420px)
      margin-left: $sidebar-width-small
    .top
      display: flex
      align-items: center
      border-bottom: 1px $primary-light solid
      width: 100%
      height: 80px
      .item
        display: flex
        align-items: center
        &.top__blog
          @media only screen and (max-width: 420px)
            display: none
        hr.vertical
          width: 0px
          height: 40px
          margin: 0 20px
          border-color: $primary-red
          @media only screen and (max-width: 420px)
            margin: 0 5px
    .score
      padding: $base-margin 0
      display: flex
      border-bottom: 1px $primary-light solid
      @media only screen and (max-width: 420px)
        flex-direction: column
      .score__image
        display: inline-block
        padding: 20px
        @media only screen and (max-width: 420px)
          display: flex
          flex-direction: column
          align-items: center
          padding: 45px

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
      .score__info
        margin-left: 120px
        display: flex
        flex-direction: column
        justify-content: center

        @media only screen and (max-width: 420px)
          margin-left: 20px
          

        p > span
          color: $primary-red

</style>
