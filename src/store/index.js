import Vue from 'vue'
import Vuex from 'vuex'
// 解决vuex数据刷新消失
// import createVuexAlong from 'vuex-along'
Vue.use(Vuex)

import user from "./modules/user"
import study from "./modules/study"
import conf from "./modules/conf"
export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    study,
    conf
  },
  // 解决vuex数据刷新消失
  // plugins: [createVuexAlong]

})