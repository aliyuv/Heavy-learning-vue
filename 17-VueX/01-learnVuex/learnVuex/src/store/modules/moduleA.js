export default {
  state: () => ({
    name: '厄加特'
  }),
  mutations: {
    updateName(state, payload) {
      console.log(payload);
      state.name = payload
    }
  },
  getters: {
    computedNameProp(state) {
      return state.name.length
    }
  },
  actions: {
    updatNameAction(context) {
      console.log(context);
      setTimeout(()=>{
        context.commit('updateName','沈兰')
      },1000)
    }
  }
}
