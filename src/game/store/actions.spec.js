import MockAdapter from 'axios-mock-adapter';
import PokeAPI from '../../service/pokeapi';
import notify from '../../service/notify';
import actions from './actions';
import types from './types';

jest.mock('../../service/notify');

describe('game/store/actions', () => {
  let commit;
  let endpoint;
  let response;
  let api;
  let mock;

  beforeEach(() => {
    commit = jest.fn();
    api = new PokeAPI();
    mock = new MockAdapter(api.requester);

    response = [{ name: 'Generation I' }, { name: 'Generation II' }];
  });

  describe('when gets generations list', () => {
    beforeEach(async () => {
      mock.onGet('/generation', {}).reply(200, response);

      await actions.getGenerations({ commit });
    });

    it('commits response data', () => {
      expect(commit).toBeCalledWith(types.SET_GENERATIONS, response);
    });
  });

  describe('when not gets generations list', () => {
    beforeEach(async () => {
      mock.onGet('/generation', {}).reply(500);

      await actions.getGenerations({ commit });
    });

    it('notify error', () => {
      expect(notify.error).toBeCalledWith('Ocorreu um erro ao listar as gerações, por favor tente novamente');
    });
  });
});
