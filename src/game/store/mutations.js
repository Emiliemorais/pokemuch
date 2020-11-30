import types from './types';

export const state = {
  generations: [],
  active: {},
};

export const mutations = {
  [types.SET_GENERATIONS](state, data) {
    state.generations = data;
  },
  [types.SET_ACTIVE](state, data) {
    state.active = data;
  }
};

