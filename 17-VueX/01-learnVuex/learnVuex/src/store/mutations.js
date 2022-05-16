import Vue from "vue";

export default {
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
}
