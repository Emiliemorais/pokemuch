import API from './api';

export default class PokeAPI extends API {
  getGenerations() {
    return this.get('/generation');
  }
}
