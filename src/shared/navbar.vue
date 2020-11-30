<template>
   <b-navbar :fixed-top="true" :shadow="true">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img class="logo" alt="pokemon-logo" src="../assets/logo.png">
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item tag="router-link" to="/generations">
        Gerações de games
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>
