import GameGeneration from '../game/components/generations/Main.vue';
import GameGenerationList from '../game/components/generations/List.vue';
import GameGenerationShow from '../game/components/generations/Show.vue';

export default [
  {
    name: 'Generation',
    component: GameGeneration,
    path: '/generations',
    children: [
      {
        name: 'GenerationList',
        path: '/',
        component: GameGenerationList,
      },
      {
        name: 'GenerationView',
        path: ':id',
        component: GameGenerationShow,
      },
    ]
  },
];
