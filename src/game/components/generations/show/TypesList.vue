<template>
  <card :title="'Tipos'" :total="types.length" :items="types" />
</template>

<script>

import { mapGetters } from 'vuex';
import Card from '../../../../shared/card';

export default {
  name: 'GameGenerationShowTypes',
  components: {
    Card,
  },
  computed: {
    ...mapGetters({
      'generation': 'game/active',
    }),
    types() {
      return this.generation.types;
    },
  },
};

</script>
