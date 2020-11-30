<template>
  <card :title="'Movimentos'" :total="moves.length" :items="moves" />
</template>

<script>

import { mapGetters } from 'vuex';
import Card from '../../../../shared/card';

export default {
  name: 'GameGenerationShowMoves',
  components: {
    Card,
  },
  computed: {
    ...mapGetters({
      'generation': 'game/active',
    }),
    moves() {
      return this.generation.moves;
    },
  },
};

</script>
