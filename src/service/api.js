import axios from 'axios';

export default class API {
  constructor(baseURL) {
    this.baseURL = baseURL;
    this.http = axios.create({ baseURL: baseURL })
  }

  get(resource, params) {
    return this.http.get(resource, params);
  }
}
