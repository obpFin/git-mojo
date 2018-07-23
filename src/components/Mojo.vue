<template>
<div class="main">
  <div class="header">
  </div>
  <div class="content">
    <div class="inner">
      <Sidebar />
      <User @onSetUserName="onSetUserName" v-bind:name="userName"></User>
    </div>
  </div>
</div>
</template>

<script>
import Sidebar from "./Sidebar/Sidebar.vue";
import User from "./User/User.vue";
const sourceUrl = "https://api.github.com";
export default {
  name: "Mojo",
  components: {
    Sidebar,
    User
  },
  data: function() {
    return {
      userName: ""
    };
  },
  methods: {
    onSetUserName(name) {
      this.userName = name;
    },
    getUserData(userName) {
      if (typeof userName === "string") {
        fetch(`${sourceUrl}/userName`)
          .then(stream => stream.json())
          .then(data => {
            console.log(data);
          })
          .catch(error => console.log(error));
      }
    }
  }
};
</script>

<style scoped lang="sass">
  @import "../assets/sass/mixins/mixins"
  @import "../assets/sass/main"

  .main
    //@include inner-shadow
    height: 100vh
    margin: 120px
    background: $primary-lighter
    .header

      .header__text
    .content
      background: $primary-light

</style>
