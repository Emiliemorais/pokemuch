<template>
  <card :title="'Pokemóns'" :total="species.length" :items="species" />
</template>

<script>

import { mapGetters } from 'vuex';
import Card from '../../../../shared/card';

export default {
  name: 'GameGenerationShowSpecies',
  components: {
    Card,
  },
  computed: {
    ...mapGetters({
      'generation': 'game/active',
    }),
    species() {
      return this.generation.pokemon_species;
    },
  },
};

</script>
