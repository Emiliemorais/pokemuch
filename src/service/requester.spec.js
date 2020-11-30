import axios from 'axios';
import requester from './requester';

describe('service/requester', () => {
  let axiosInstance;
  let requesterInstance;

  beforeAll(() => {
    requesterInstance = { baseURL: 'https://pokeapi.co/api/v2' };

    axios.create = jest.fn(() => requesterInstance);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('when is the first call', () => {
    beforeEach(() => {
      axiosInstance = requester();
    });

    it('calls axios create with poke api url', () => {
      expect(axios.create).toBeCalledWith(requesterInstance);
    });

    it('returns axios instance', () => {
      expect(axiosInstance.baseURL).toEqual(requesterInstance.baseURL);
    });
  });

  describe('when is second call', () => {
    beforeAll(() => {
      axiosInstance = requester();
    });

    it('not calls axios create with base url', () => {
      expect(axios.create).not.toBeCalledWith(requesterInstance);
    });

    it('returns axios instance', () => {
      expect(axiosInstance.baseURL).toEqual(requesterInstance.baseURL);
    });
  });
});
