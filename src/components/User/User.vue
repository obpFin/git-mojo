<template>
  <div class="user">
    <div v-if="user.userName" class="user__info">
      <h1>You are {{ user.userName }}</h1>
    </div>
    <div v-else class="user__name">
      <UserInput @setUserName="onSetUser" v-bind:userName="userName"/>
    </div>
  </div>
</template>

<script>
import UserInput from "./UserInput.vue";

const ghSourceUrl = "https://api.github.com";
const contribsSourceUrl = "https://github-contributions-api.now.sh/v1";

export default {
  props: ["user"],
  components: {
    UserInput
  },
  data: function() {
    return {
      userName: null,
      userData: {
        contribs: {}
      }
    };
  },
  methods: {
    async onSetUser(userName) {
      console.log("User -- onSetUser", userName);
      this.userName = userName;

      const userData = await this.getUserData(this.userName);
      const userContribs = await this.getUserContribs(this.userName);
      Promise.all([userData, userContribs]).then(() => {
        this.$emit("setUser", this.userData);
      });
    },
    getUserData(userName) {
      return new Promise((resolve, reject) => {
        if (typeof userName === "string") {
          fetch(`${ghSourceUrl}/users/${userName}`)
            .then(stream => stream.json())
            .then(data => {
              console.log(data);
              this.userData = { ...this.userData, ...data };
              resolve();
            })
            .catch(error => reject(() => console.log(error)));
        }
      });
    },
    getUserContribs(userName) {
      return new Promise((resolve, reject) => {
        console.log("getUserContribs", userName);
        if (typeof userName === "string") {
          fetch(`${contribsSourceUrl}/${userName}`)
            .then(stream => stream.json())
            .then(data => {
              console.log(data);
              this.userData.contribs = { ...data };
              resolve();
            })
            .catch(error => reject(() => console.log(error)));
        }
      });
    }
  }
};
</script>

<style scoped lang="sass">
  @import "../../assets/sass/main"
  @import "../../assets/sass/mixins/mixins"

  .user
    @include absolutecenter()
    //margin-left: $sidebar-width
    .user__name


</style>
