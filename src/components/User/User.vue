<template>
  <div class="user">
    <transition name="fade">
      <div class="user__load" v-if="fetchUser" key="load">
        <Spinner size="big" line-fg-color="#ff7043"/>
      </div>
      <div v-else-if="userData.login" class="user__info" key="info">
        <UserInfo :user="userData"/>
      </div>
      <div v-else-if="fetchUser == false" class="user__name" key="input">
        <UserInput @setUserName="onSetUser" v-bind:userName="userName" v-bind:userNotFound="userNotFound"/>
      </div>
    </transition>  
  </div>
</template>

<script>
import Spinner from "vue-simple-spinner";
import UserInput from "./UserInput.vue";
import UserInfo from "./UserInfo.vue";
import { getUserData, getUserContribs } from "../../api/api";

export default {
  props: ["user"],
  components: {
    UserInput,
    UserInfo,
    Spinner
  },
  data: function() {
    return {
      fetchUser: false,
      userNotFound: false,
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
          if (!this.userData.login) {
            this.fetchUser = false;
            this.userNotFound = true;
            return null;
          }
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
    background: $primary-lighter
    .user__name, .user__load
      @include absolutecenter()



</style>
