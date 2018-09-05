<template>
  <div class="user">
    <transition name="fade">
      <div v-if="userName" class="user__info" key="info">
        <UserInfo/>
      </div>
      <div v-else class="user__name" key="input">
        <UserInput/>
      </div>
    </transition>
  </div>
</template>

<script>
import UserInput from './UserInput.vue';
import UserInfo from './UserInfo.vue';

export default {
  name: 'user',
  props: [],
  components: {
    UserInput,
    UserInfo
  },
  data: function() {
    return {};
  },
  methods: {},
  computed: {
    userName() {
      return this.$store.state.user.data.login;
    }
  }
};
</script>

<style scoped lang="sass">
  @import "../../assets/sass/main"
  @import "../../assets/sass/mixins/mixins"

  .user
    background: $primary-lighter
    .user__name
      @include absolutecenter()
      @media only screen and (min-width: 1025px)
        left: 50%
      @media only screen and (max-width: 420px)
        transform: translate(-50%, -50%)
</style>
