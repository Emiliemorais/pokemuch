import Vue from 'vue';
import App from './App.vue';
import store from './store';
import buefy from './plugins/buefy';

new Vue({
  store,
  buefy,
  render: h => h(App),
}).$mount('#app');
