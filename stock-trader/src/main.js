import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import { routes } from './routes';
import store from './store/store';
import axios from 'axios';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.prototype.$http = axios;

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});

const router = new VueRouter({
  routes,
  mode: 'history',
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
