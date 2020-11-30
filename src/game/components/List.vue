<template>
  <list :items="generations">
    <template v-slot:item="{ item }">
      <div class="content">
        <p> {{ item.name }} </p>
      </div>
      <nav class="level is-mobile">
        <div class="level-right">
          <a class="level-item">
            <b-icon
              pack="fas"
              icon="eye"
              size="is-small" />
          </a>
        </div>
      </nav>
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
