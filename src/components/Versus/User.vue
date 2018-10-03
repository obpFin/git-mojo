<template>
  <div class="user">
    <div class="user__info">
      <div class="name">
        <p class="name__text">{{ data.login }}</p>
      </div>
      <div class="img">
        <img v-bind:src="data.avatar_url" alt="img" class="user__img">
      </div>
      <div class="score">
        <p class="highlight"><span>score: </span>{{ this.data.score }}</p>
      </div>
    </div>
    <div class="user__score">
    </div>
  </div>
</template>

<script>
export default {
  name: 'versus-user',
  props: ['data']
};
</script>

<style scoped lang="sass">
  @import "../../assets/sass/main"
  @import "../../assets/sass/mixins/mixins"
  .user
    margin: auto 0
    @media only screen and (max-width: 420px)
      padding-top: 0
    .user__info
      display: flex
      .user__img
        width: 120px
        border-radius: 100px
        @media only screen and (max-width: 420px)
          width: 80px
      .name, .score
        margin: auto
        .highlight span
          color: $text-darker
      p
        margin: 0
        margin-left: 20px
        text-align: center
      .name
        text-align: center
        text-transform: uppercase
        margin-right: 20px
    .user__score
      margin: auto
      text-align: center
</style>
