import PokeAPI from '../../service/pokeapi';
import types from './types';
import notify from '../../service/notify';

const actions = {};

const api = new PokeAPI();

actions.getGenerations = async ({ commit }) => {
  try{
    const { data } = await api.getGenerations();

    commit(types.SET_GENERATIONS, data);
  } catch {
    notify.error('Ocorreu um erro ao listar as gerações, por favor tente novamente');
  }
};

actions.getGeneration = async ({ commit }, id) => {
  try{
    const { data } = await api.getGeneration(id);

    commit(types.SET_ACTIVE, data);
  } catch {
    notify.error('Ocorreu um erro ao buscar a geração, por favor tente novamente');
  }
};

export default actions;
