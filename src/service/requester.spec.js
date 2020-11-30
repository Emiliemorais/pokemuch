import axios from 'axios';
import requester from './requester';

describe('service/requester', () => {
  let axiosInstance;
  let requesterInstance;

  beforeAll(() => {
    requesterInstance = {};

    axios.create = jest.fn(() => requesterInstance);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('when is the first call', () => {
    beforeEach(() => {
      axiosInstance = requester();
    });

    it('calls axios create', () => {
      expect(axios.create).toBeCalled();
    });

    it('returns axios instance', () => {
      expect(axiosInstance).toEqual(requesterInstance);
    });
  });

  describe('when is second call', () => {
    beforeAll(() => {
      axiosInstance = requester();
    });

    it('not calls axios create', () => {
      expect(axios.create).not.toBeCalled();
    });

    it('returns axios instance', () => {
      expect(axiosInstance).toEqual(requesterInstance);
    });
  });
});
