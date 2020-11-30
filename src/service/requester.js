import axios from 'axios';

let requester;

export default () => {
  if (requester) {
    return requester;
  }

  requester = axios.create({ baseURL: 'https://pokeapi.co/api/v2' });

  return requester;
};
