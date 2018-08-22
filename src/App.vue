<template>
  <div id="app">
    <Mojo/>
  </div>
</template>

<script>
import Mojo from './components/Mojo.vue';

export default {
  name: 'app',
  components: {
    Mojo
  }
};
</script>

<style lang="sass">
.app
  width: 100%
</style>
