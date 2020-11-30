import types from './types';

describe('game/store/mutations', () => {
  it('SET_GENERATIONS', () => {
    expect(types.SET_GENERATIONS).toEqual('SET_GENERATIONS');
  });
  it('SET_ACTIVE', () => {
    expect(types.SET_ACTIVE).toEqual('SET_ACTIVE');
  });
});
