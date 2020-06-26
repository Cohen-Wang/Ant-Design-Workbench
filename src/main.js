import Vue from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
import router from './router'
import store from './store'

Vue.config.productionTip = false;

// 调用 ant-design框架
Vue.use(Antd);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
