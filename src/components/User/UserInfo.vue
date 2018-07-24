<template>
    <div>
      <transition name="fade">
        <h1 v-if="showWelcome">Welcome {{ user.name || user.login }}</h1>
      </transition>
    </div>
</template>

<script>
export default {
  name: "user-info",
  data() {
    return {
      showWelcome: false
    };
  },
  props: ["user"],
  mounted() {
    if (this.user.name || this.user.login) {
      this.showWelcome = true;
      setTimeout(() => {
        this.showWelcome = false;
      }, 3000);
    }
  }
};
</script>

<style>
</style>
