export default  {
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
}
