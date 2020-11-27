<template>
  <list :items="generations">
    <template v-slot:item="{ item }">
      <p> {{ item.name }} </p>
    </template>
  </list>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';
import List from '../../shared/list';

export default {
  name: 'GameGenerationList',
  components: {
    List,
  },
  data() {
    return {
      listColumns: [
        { field: 'name', label: 'Nome' },
      ],
    };
  },
  mounted() {
    this.getGenerations();
  },
  methods: {
    ...mapActions({
      'getGenerations': 'game/getGenerations',
    }),
  },
  computed: {
    ...mapGetters({
      'generationsList': 'game/generations',
    }),
    generations() {
      return this.generationsList.results;
    },
  },
};

</script>
