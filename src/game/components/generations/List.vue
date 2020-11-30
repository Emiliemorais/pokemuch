<template>
  <div>
    <h1 class="subtitle is-4">
      Gerações de Games
      <span class="total">{{ total }} </span>
    </h1>
    <list :items="generations">
      <template v-slot:item="{ item }">
        <div class="content">
          <p> {{ item.name }} </p>
        </div>
        <nav class="level is-mobile">
          <div class="level-right">
            <router-link :to="{ name: 'GenerationView', params: { id: getGenerationId(item.url) } }" class="level-item">
              <b-icon pack="fas" icon="eye" size="is-small" />
            </router-link>
          </div>
        </nav>
      </template>
    </list>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';
import List from '../../../shared/list';

export default {
  name: 'GameGenerationList',
  components: {
    List,
  },
  mounted() {
    this.getGenerations();
  },
  methods: {
    ...mapActions({
      'getGenerations': 'game/getGenerations',
    }),
    getGenerationId(url) {
      const idRegex = /generation\/(?<id>\d*)/;
      return url.match(idRegex).groups.id;
    },
  },
  computed: {
    ...mapGetters({
      'generationsList': 'game/generations',
    }),
    generations() {
      return this.generationsList.results;
    },
    total() {
      return this.generationsList.count;
    },
  },
};

</script>
