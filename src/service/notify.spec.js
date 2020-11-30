import Vue from 'vue';
import notify from './notify';

describe('service/notify', () => {
  describe('error', () => {
    beforeEach(() => {
      Vue.notify = jest.fn();
      notify.error('Ocorreu um erro');
    });

    it('expect to call notify plugin on vue', () => {
      expect(Vue.notify).toBeCalledWith({ type: 'error', text: 'Ocorreu um erro' });
    });
  });
});
