import Vue from "vue";
import Vuex from 'vuex'

//安装插件
Vue.use(Vuex)

const moduleA = {
  state:()=>({
    name: '厄加特'
  }),
  mutations:{
    updateName(state,payload){
      console.log(payload);
      state.name = payload
    }
  },
  getters:{
    computedNameProp(){
      return this.$store.state.name.length
    }
  },
  actions:{
    updatNameAction(context){
      context.commit('updateName')
    }
  }
}
//创建实例对象2
const store = new Vuex.Store({
  state: {
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
  },
  mutations: {
    increment(state) {
      state.count += 1
    }, decrment(state) {
      state.count -= 1
    }, incrementcounter(state, payload) {
      state.count += payload.counter
    }, addyingxiong(state, yingxiong) {
      state.yingxiong.push(yingxiong)
    }, addprop(state) {
      Vue.set(state.info, 'address', '西雅图')
    }
  },
  getters: {
    more20yx(state) {
      return state.yingxiong.filter(s => {
        return s.age > 20
      });
    }, more20yxlength(state, getters) {
      return getters.more20yx.length
    }, more20fn(state) {
      return (age) => {
        return state.yingxiong.filter(s => s.age === 22);
      }
    }
  },
  modules:{
    a:moduleA
  }
})

export default store
