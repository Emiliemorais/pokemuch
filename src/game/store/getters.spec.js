import getters from './getters';

describe('game/store/getters', () => {
  const state = {
    generations: [{ name: 'Generation I' }, { name: 'Generation II' }],
    active: { name: 'Generation I' },
  };

  describe('generations', () => {
    it('returns state generations', () => {
      expect(getters.generations(state)).toEqual(state.generations);
    });
  });

  describe('active', () => {
    it('returns state active', () => {
      expect(getters.active(state)).toEqual(state.active);
    });
  });
});
