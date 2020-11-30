<template>
  <div id="app">
    <navbar />
    <div class="container">
      <router-view />
    </div>
    <notifications position="bottom right" />
  </div>
</template>

<script>
import Navbar from './shared/navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar,
  },
};

</script>

<style lang="scss">
  @import 'assets/scss/main';
</style>
