import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

export const eventBus = new Vue({
  methods: {
    changeName(name){
      this.$emit('newNameUpdated',name);
    },
    changeAge(age){
      this.$emit('newAgeUpdated',age);
    }
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')


