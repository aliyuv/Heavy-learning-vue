import Vue from "vue";
import Vuex from 'vuex'
import mutations from "./mutations";
import getters from "./getters"
import moduleA from "./modules/moduleA"
//安装插件
Vue.use(Vuex)

const state = {
  count: 1000,
  yingxiong: [{
    id: 0, name: '琪亚娜', age: 16
  }, {
    id: 1, name: '卢锡安', age: 20
  }, {
    id: 2, name: '卡尔玛', age: 30
  }, {
    id: 3, name: '男刀', age: 22
  }], info: {
    name: 'jams', age: 25, sex: '男'
  }
}
//创建实例对象2
const store = new Vuex.Store({
  state,
  mutations,
  getters,
  modules: {
    a: moduleA
  }
})

export default store
