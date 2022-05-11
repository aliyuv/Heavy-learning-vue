<template>
  <div id="app">
    <h2>我是App组件</h2>
    <button @click="homeclick">首页</button>
    <button @click="aboutclick">关于</button>
<!--    <router-link to="/home" tag="button">home</router-link>-->
<!--    <router-link to="/about" tag="button">about</router-link>-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    homeclick() {
      // this.$router.push('/aaa').catch(error => error)
      this.$router.replace('/home').catch(error => error)
    },
    aboutclick() {
      this.$router.push('/about').catch(error => error)
    }
  }
}
</script>

<style>
.active {
  color: red;
}
</style>
