import API from './api';

export default class PokeAPI extends API {
  constructor() {
    super('https://pokeapi.co/api/v2');
  }

  getGenerations() {
    return this.get('/generation');
  }
}
