import Vue from "vue";
import Vuex from 'vuex'

//安装插件
Vue.use(Vuex)

//创建实例对象
const store = new Vuex.Store({
  state: {
    count: 1000,
    yingxiong: [
      {
        id: 0, name: '琪亚娜', age: 16
      },
      {
        id: 1, name: '卢锡安', age: 20
      },
      {
        id: 2, name: '卡尔玛', age: 30
      },
      {
        id: 3, name: '男刀', age: 22
      }
    ]
  },
  mutations: {
    increment(state) {
      state.count += 1
    },
    decrment(state) {
      state.count -= 1
    }
  },
  getters: {
    more20yx(state) {
      return state.yingxiong.filter(s => {
        return s.age > 20
      });
    },
    more20yxlength(state, getters) {
      return getters.more20yx.length
    },
    more20fn(state) {
      return (age) => {
        return state.yingxiong.filter(s => s.age === 22);
      }
    }
  }
})

export default store
