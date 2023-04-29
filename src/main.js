import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 引入mock
// require('../Mock')

import scroll from 'vue-seamless-scroll'

import Bus from '../src/conf/bus';
// import GLOBAL_CUS from "../public/custom/global.config.json"
// var GLOBAL_CUS = require("../public/custom/global.config.json")
Vue.prototype.$bus = Bus 
Vue.prototype.GLOBAL_CUS = GLOBAL_CUS 


require("./conf/hot.js")

Vue.use(ElementUI);
Vue.use(scroll)

Vue.config.productionTip = false

var vm = new Vue({
  router,
  store,
  render: h => h(App),
  mounted() {
    console.log("这是node环境变量=========", process.env)
  }
}).$mount('#app')

export default vm
