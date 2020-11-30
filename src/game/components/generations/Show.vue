<template>
  <div>
    <h1 class="subtitle is-4">
      Geração {{ generation.name }}
    </h1>

    <p class="subtitle is-5">
      Principal Região: {{ generation.main_region.name }}
    </p>

    <pokemon-list />
    <types-list />
    <moves-list />
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';
import PokemonList from './show/PokemonList';
import TypesList from './show/TypesList';
import MovesList from './show/MovesList';

export default {
  name: 'GameGenerationShow',
  components: {
    PokemonList,
    TypesList,
    MovesList,
  },
  mounted() {
    this.getGeneration(this.$route.params.id);
  },
  methods: {
    ...mapActions({
      'getGeneration': 'game/getGeneration',
    }),
  },
  computed: {
    ...mapGetters({
      'generation': 'game/active',
    }),
  },
};

</script>
