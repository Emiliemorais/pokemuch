import Vue from 'vue';

const notify = {};

notify.error = (text) => Vue.notify({ type: 'error', text });

export default notify;
