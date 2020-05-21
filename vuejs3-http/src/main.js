import Vue from 'vue'
import App from './App.vue';
// import VueResource from 'vue-resource';
import axios from 'axios';

Vue.config.productionTip = false
// Vue.use(VueResource);
Vue.prototype.$http = axios

new Vue({
  render: h => h(App),
}).$mount('#app')
