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
import { getUserData, getUserContribs } from "../../api/api";

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
      this.userName = userName;
      const userData = await getUserData(this.userName);
      const userContribs = await getUserContribs(this.userName);
      Promise.all([userData, userContribs])
        .then(data => {
          this.userData = { ...this.userData, ...data[0] };
          this.userData.contribs = { ...data[1] };
          this.$emit("setUser", this.userData);
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
