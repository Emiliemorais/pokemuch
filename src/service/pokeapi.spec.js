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
      expect(api.requester.get).toHaveBeenCalledWith('/generation', { baseURL: 'https://pokeapi.co/api/v2' });
    });
  });

  describe('getGeneration', () => {
    beforeEach(() => {
      api.requester.get = jest.fn();

      api.getGeneration(1);
    });

    it('call requester get', () => {
      expect(api.requester.get).toHaveBeenCalledWith('/generation/1', { baseURL: 'https://pokeapi.co/api/v2' });
    });
  });
});
