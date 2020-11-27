import types from './types';

export const state = {
  generations: [],
};

export const mutations = {
  [types.SET_GENERATIONS](data) {
    state.generations = data;
  }
};

