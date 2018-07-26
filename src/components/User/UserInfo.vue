<template>
  <div>
    <transition name="fade">
      <h1 class="welcome-text" v-if="showWelcome">Welcome {{ user.name || user.login }}</h1>
    </transition>
    <transition name="fade">
    <div v-if="showInfo" class="user-info">
      <div class="user-info__top">
        <div class="item" style="margin-left: 20px">
          <p class="top__name light">{{ user.name || user.login }}</p>
          <hr class="vertical"/>
        </div>
        <div v-if="user.company" class="item">
          <p class="top__company">{{ user.company }}</p>
          <hr class="vertical"/>
        </div>
        <div v-if="user.blog && this.allowBlog(50)" class="item">
          <p class="top__company">{{ user.blog }}</p>
          <hr class="vertical"/>
        </div>
        <div v-if="user.location" class="item">
          <p class="top__company item">{{ user.location }}</p>
        </div>
      </div>
      <div class="user-info__mojo">
        <div v-if="user.avatar_url" class="user-image">
          <img v-bind:src="user.avatar_url" class="" alt="avatar">
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
    .user-info__top
      display: flex
      align-items: center
      border-bottom: 1px $primary-light solid
      width: 100%
      height: 80px
      .item
        display: flex
        align-items: center
        hr.vertical
          width: 0px
          height: 40px
          margin: 0 20px
          border-color: $primary-red
          @media only screen and (max-width: 420px)
            margin: 0 5px
    .user-info__mojo
      padding: $base-margin
      .user-image
        img
          width: 150px
          margin: 20px 0 20px 20px
          height: 150px
          border-radius: 100px
          @media only screen and (max-width: 420px)
            width: 50px
            padding: 10px
            height: 50px

</style>
