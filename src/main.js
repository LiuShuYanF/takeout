// 入口js
import Vue from 'vue';
import ElementUI from 'element-ui';
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router/router.js';

Vue.config.productionTip = false

Vue.prototype.axios = axios


// new Vue({
//   render: h => h(App),
// }).$mount('#app')


Vue.use(ElementUI);
new Vue({
  el: '#app',
  render: h => h(App),
  router,
})