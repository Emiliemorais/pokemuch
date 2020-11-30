import requester from './requester';

export default class API {
  constructor(url) {
    this.url = url;
    this.requester = requester();
  }

  get(resource, params = {}) {
    return this.requester.get(resource, params);
  }
}
