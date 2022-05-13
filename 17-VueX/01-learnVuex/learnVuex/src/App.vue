<template>
  <div id="app">
    <h2>我是app组件</h2>
    <p>{{ $store.state.count }}</p>
    <button @click="add">+1</button>
    <button @click="sub">-1</button>
    <hellowVuex></hellowVuex>
    {{ $store.getters.more20yx }}
    {{ $store.getters.more20yxlength }}
    <h1>{{ $store.getters.more20fn(22) }}</h1>
    <button @click="commit20(20)">提交数据20</button>
    <button @click="addyx">添加英雄</button>
  </div>
</template>

<script>
import hellowVuex from "./components/hellowVuex";

export default {
  name: 'App',
  data() {
    return {
      count: 0
    }
  },
  components: {
    hellowVuex
  },
  methods: {
    add() {
      this.$store.commit('increment');
    },
    sub() {
      this.$store.commit('decrment');
    },
    commit20(counter) {
      // this.$store.commit('incrementcounter', counter);
      this.$store.commit({
        type:'incrementcounter',
        counter
      })
    },
    addyx() {
      const yasuo = {id: 20, name: '亚索', age: 35}
      this.$store.commit('addyingxiong', yasuo)
    }
  }
}
</script>

<style>

</style>
