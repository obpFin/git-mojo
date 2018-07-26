<template>
  <div>
    <transition name="fade">
      <h1 class="welcome-text" v-if="showWelcome">Welcome {{ user.name || user.login }}</h1>
    </transition>
    <transition name="fade">
    <div v-if="showInfo" class="user-info">
      <div class="top">
        <div class="item">
          <p>{{ user.login }}</p>
          <hr class="vertical"/>
        </div>
        <div v-if="user.company" class="item">
          <p>{{ user.company }}</p>
          <hr class="vertical"/>
        </div>
        <div v-if="user.location" class="item">
          <p>{{ user.location }}</p>
          <hr class="vertical"/>
        </div>
        <div v-if="user.blog && this.allowBlog(50)" class="item blog">
          <p>{{ user.blog }}</p>
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
        margin-left: 40px
        @media only screen and (max-width: 420px)
          margin-left: 20px
        &.blog
          @media only screen and (max-width: 420px)
            display: none
        p
          width: min-content
        hr
          margin-left: 40px
          @media only screen and (max-width: 420px)
            margin-left: 20px
            
    .score
      padding: $base-margin 0
      display: flex
      border-bottom: 1px $primary-light solid
      @media only screen and (max-width: 420px)
        flex-direction: column
      .score__image 
        display: inline-block
        padding: 40px
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
        hr
          margin: 20px 0
        @media only screen and (max-width: 420px)
          margin-left: 20px
        p > span
          color: $primary-red
          font-weight: bold
          font-size: $text-lg
          text-shadow: 1px 0 5px black

</style>
