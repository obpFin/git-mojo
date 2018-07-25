<template>
    <div>
      <transition name="fade">
        <h1 class="welcome-text" v-if="showWelcome">Welcome {{ user.name || user.login }}</h1>
      </transition>
      <div v-if="showInfo" class="user-info">
        <div class="top">
          <div v-if="user.avatar_url" class="item">
            <img v-bind:src="user.avatar_url" class="top__image" alt="avatar">
            <hr class="vertical"/>
          </div>
          <div class="item">
            <p class="top__name light">{{ user.name || user.login }}</p>
            <hr class="vertical"/>
          </div>
          <div v-if="user.company" class="item">
            <p class="top__company">{{ user.company }}</p>
            <hr class="vertical"/>
          </div>
          <div v-if="user.blog && this.allowBlog(25)" class="item">
            <p class="top__company">{{ user.blog }}</p>
            <hr class="vertical"/>
          </div>
          <div v-if="user.location" class="item">
            <p class="top__company item">{{ user.location }}</p>
          </div>
        </div>
      </div>
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
      }, 3000);
      this.showInfo = true;
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
      .item
        display: flex
        align-items: center

        .top__image
          width: 100px
          margin: 20px 0 20px 20px
          height: 100px
          border-radius: 100px
          @media only screen and (max-width: 420px)
            width: 50px
            padding: 10px
            height: 50px

        hr.vertical
          width: 0px
          height: 40px
          margin: 0 20px
          border-color: $primary-red
          @media only screen and (max-width: 420px)
            margin: 0 5px
      .top__name

</style>
