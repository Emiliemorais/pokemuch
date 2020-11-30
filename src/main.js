import Vue from 'vue';
import App from './App.vue';
import store from './store';
import buefy from './plugins/buefy';
import notify from './plugins/notify';

new Vue({
  store,
  buefy,
  notify,
  render: h => h(App),
}).$mount('#app');
