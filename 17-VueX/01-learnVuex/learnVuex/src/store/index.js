import Vue from "vue";
import Vuex from 'vuex'

//安装插件
Vue.use(Vuex)

//创建实例对象
const store = new Vuex.Store({
  state: {
    count: 1000
  },
  mutations: {
    increment(state) {
      state.count += 1
    },
    decrment(state) {
      state.count -= 1
    }
  }
})

export default store
