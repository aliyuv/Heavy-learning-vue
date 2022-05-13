<template>
  <div id="app">
    <h2>我是app组件</h2>
    <p>{{ $store.state.count }}</p>
    <button @click="add">+1</button>
    <button @click="sub">-1</button>
    <hellowVuex></hellowVuex>
    {{$store.getters.more20yx}}
   {{$store.getters.more20yxlength}}
    <h1>{{$store.getters.more20fn(22)}}</h1>
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
    }
  }
}
</script>

<style>

</style>
