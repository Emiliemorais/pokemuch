import { mutations } from './mutations';

describe('game/store/mutations', () => {
  const state = {
    generations: [],
    active: {},
  };

  describe('SET_GENERATIONS', () => {
    const data = [{ name: 'Generation I' }, { name: 'Generation II' }];
    mutations.SET_GENERATIONS(state, data);

    it('sets generations data on state', () => {
      expect(state.generations).toEqual(data);
    });
  });

  describe('SET_ACTIVE', () => {
    const data = { name: 'Generation I' };
    mutations.SET_ACTIVE(state, data);

    it('sets generation data on state', () => {
      expect(state.active).toEqual(data);
    });
  });
});
