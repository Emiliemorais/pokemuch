import PokeAPI from '../../service/pokeapi';
import types from './types';

const actions = {};

const api = new PokeAPI();

actions.getGenerations = async ({ commit }) => {
  const { data } = await api.getGenerations();

  commit(types.SET_GENERATIONS, data);
};

export default actions;
