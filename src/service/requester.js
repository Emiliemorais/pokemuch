import axios from 'axios';

let requester;

export default () => {
  if (requester) {
    return requester;
  }

  requester = axios.create();

  return requester;
};
