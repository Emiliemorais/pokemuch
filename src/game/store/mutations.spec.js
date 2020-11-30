import { mutations } from './mutations';

describe('game/store/mutations', () => {
  const state = {
    generations: [],
  };

  describe('SET_GENERATIONS', () => {
    const data = [{ name: 'Generation I' }, { name: 'Generation II' }];
    mutations.SET_GENERATIONS(state, data);

    it('sets generations data on state', () => {
      expect(state.generations).toEqual(data);
    });
  });
});
