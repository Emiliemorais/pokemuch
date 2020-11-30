import API from './api';

export default class PokeAPI extends API {
  constructor() {
    super('https://pokeapi.co/api/v2');

    this.config = { baseURL: this.url };
  }

  getGenerations() {
    return this.get('/generation', this.config);
  }

  getGeneration(id) {
    return this.get(`/generation/${id}`, this.config);
  }
}
