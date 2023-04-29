export default {
  namespaced: true,
  state: {
    theme: 'default',
  },
  mutations: {
    settheme(state, payload) {
      state.theme = payload.theme;
    },
  },
  getters: {},
  actions: {},
}
