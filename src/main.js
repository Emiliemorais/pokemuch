import Vue from 'vue';

import App from './App.vue';
import store from './store';
import buefy from './plugins/buefy';
import notify from './plugins/notify';

import router from './router';

new Vue({
  store,
  buefy,
  notify,
  router,
  render: h => h(App),
}).$mount('#app');
