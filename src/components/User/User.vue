<template>
  <div class="user">
    <div v-if="fetchUser">
      <Spinner size="big" line-fg-color="#ff7043"/>
    </div>
    <div v-else-if="userData.login" class="user__info">
      <h1>You are {{ user.name || user.login }}</h1>
    </div>
    <div v-else-if="fetchUser == false" class="user__name">
      <UserInput @setUserName="onSetUser" v-bind:userName="userName"/>
    </div>
  </div>
</template>

<script>
import Spinner from "vue-simple-spinner";
import UserInput from "./UserInput.vue";
import { getUserData, getUserContribs } from "../../api/api";

export default {
  props: ["user"],
  components: {
    UserInput,
    Spinner
  },
  data: function() {
    return {
      fetchUser: false,
      userName: null,
      userData: {
        contribs: {}
      }
    };
  },
  methods: {
    async onSetUser(userName) {
      this.fetchUser = true;
      this.userName = userName;
      const userData = await getUserData(this.userName);
      const userContribs = await getUserContribs(this.userName);
      Promise.all([userData, userContribs])
        .then(data => {
          this.userData = { ...this.userData, ...data[0] };
          this.userData.contribs = { ...data[1] };
          this.$emit("setUser", this.userData);
          this.fetchUser = false;
          console.log("User -- onSetUser", this.userData);
        })
        .catch(reason => console.log(reason));
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
