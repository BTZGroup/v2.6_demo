const study = {
  namespaced: true,
  state: {
    // 定义一个name，以供全局使用
    name: '张三',
    // 定义一个number，以供全局使用
    number: 0,
    // 定义一个list，以供全局使用
    list: [
      { id: 1, name: '111' },
      { id: 2, name: '222' },
      { id: 3, name: '333' },
    ],
  },

  /*
  OK，当你看到这里，你已经成功的把Getter用起来了，你也能明白在什么时候应该用到getters，你可以通过计算属性访问（缓存），也可以通过方法访问（不缓存），你甚至可以在getters的方法里面再调用getters方法，当然你也实现了像state那样，使用mapGetters解构到计算属性中，这样你就可以很方便的使用getters啦！
😎 读取值的操作我们有 “原生读（state）” 和 “修饰读（getters）”，接下来就要介绍怎么修改值了！
  */
  getters: {
    getMessage(state) {
      return `Hello ${state.name}`
    }
  },
  mutations: { // 同步操作
    setNumber(state) {
      state.number = 5
    },
    setNumberValue(state, number) {
      state.number = number
    },
    setNumberIsWhat(state, payload) {
      state.number = payload.number;
    },
  },
  actions: {
    // 增加actions属性
    setNum(content, payload) {
      // 增加setNum方法，默认第一个参数是content，其值是复制的一份store
      return new Promise(resolve => {
        // 我们模拟一个异步操作，1秒后修改number为888
        setTimeout(() => {
          content.commit('setNumberIsWhat', { number: payload.number });
          resolve();
        }, 1000);
      });
    }
  },
}

export default study