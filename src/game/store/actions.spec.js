import MockAdapter from 'axios-mock-adapter';
import PokeAPI from '../../service/pokeapi';
import notify from '../../service/notify';
import actions from './actions';
import types from './types';

jest.mock('../../service/notify');

describe('game/store/actions', () => {
  let commit;
  let api;
  let mock;

  beforeEach(() => {
    commit = jest.fn();
    api = new PokeAPI();
    mock = new MockAdapter(api.requester);
  });

  describe('getGenerations', () => {
    describe('when gets generations list', () => {
      let response;
  
      beforeEach(async () => {
        response = [{ name: 'Generation I' }, { name: 'Generation II' }];
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

  describe('getGeneration', () => {
    describe('when gets generation', () => {
      let response;
  
      beforeEach(async () => {
        response = { name: 'Generation I' };
        mock.onGet('/generation/1', {}).reply(200, response);
  
        await actions.getGeneration({ commit }, 1);
      });
  
      it('commits response data', () => {
        expect(commit).toBeCalledWith(types.SET_ACTIVE, response);
      });
    });
  
    describe('when not gets generation', () => {
      beforeEach(async () => {
        mock.onGet('/generation/1', {}).reply(500);
  
        await actions.getGeneration({ commit }, 1);
      });
  
      it('notify error', () => {
        expect(notify.error).toBeCalledWith('Ocorreu um erro ao buscar a geração, por favor tente novamente');
      });
    });
  });
});
