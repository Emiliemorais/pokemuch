<template>
  <div id="app">
    <img class="logo" alt="pokemon-logo" src="./assets/logo.png">

    <div class="container">
      <GameGenerationList />
    </div>
  </div>
</template>

<script>
import GameGenerationList from './game/components/List.vue'

export default {
  name: 'App',
  components: {
    GameGenerationList
  }
}
</script>

<style lang="scss">
  @import 'assets/main';
</style>
