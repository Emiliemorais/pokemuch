import PokeAPI from '../../service/pokeapi';
import types from './types';

const actions = {};

const api = new PokeAPI();

actions.getGenerations = async ({ commit }) => {
  const generations = await api.getGenerations();

  commit(types.SET_GENERATIONS, generations);
};

export default actions;
