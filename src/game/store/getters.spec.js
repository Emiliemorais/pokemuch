import getters from './getters';

describe('game/store/getters', () => {
  const state = {
    generations: [{ name: 'Generation I' }, { name: 'Generation II' }],
  };

  describe('generations', () => {
    it('returns state generations', () => {
      expect(getters.generations(state)).toEqual(state.generations);
    });
  });
});
