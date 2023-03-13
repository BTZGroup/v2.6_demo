import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
// import 'element-theme-dark';
// import 'element-ui/lib/theme-chalk/index.css';

// import './theme/theme_i18/index.css';
import './theme/dark/index.css';
// import './theme/dark_1/index.css';
import './theme/element-variables.scss';



// import echarts from './utils/echartsUI';
// Vue.prototype.$echarts = echarts



require("./conf/hot.js")

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
