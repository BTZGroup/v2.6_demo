export default {
  namespaced: true,
  state: {
    number: 478,
  },
  mutations: {
    setNumberIsWhat(state, payload) {
      state.number = payload.number;
    },
  },
  getters: {},
  actions: {},
}
