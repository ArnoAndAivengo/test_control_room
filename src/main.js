import Vue from 'vue'
import App from './App.vue'
import router from './router/router';
import ElementUI from 'element-ui';
import 'element-ui/packages/theme-chalk/src/index.scss';

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
