import PokeAPI from './pokeapi';

describe('service/pokeapi', () => {
  let api;

  beforeEach(() => {
    api = new PokeAPI();
  });

  it('has a requester instance', () => {
    expect(api.requester).toBeDefined();
  });

  describe('getGenerations', () => {
    beforeEach(() => {
      api.requester.get = jest.fn();

      api.getGenerations();
    });

    it('call requester get', () => {
      expect(api.requester.get).toHaveBeenCalledWith('/generation', {});
    });
  });
});
