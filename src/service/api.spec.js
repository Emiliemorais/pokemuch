import API from './api';

describe('service/api', () => {
  let api;

  beforeEach(() => {
    api = new API();
  });

  it('has a requester instance', () => {
    expect(api.requester).toBeDefined();
  });

  describe('get', () => {
    beforeEach(() => {
      api.requester.get = jest.fn();

      api.get('/generation');
    });

    it('call requester get', () => {
      expect(api.requester.get).toHaveBeenCalledWith('/generation', {});
    });
  });
});
