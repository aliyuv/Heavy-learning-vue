<template>
  <div id="app">
    <h2>我是App组件</h2>
    <button @click="homeclick">首页</button>
    <button @click="aboutclick">关于</button>
    <!--    <router-link :to="`/user/`+`${userId}`">我的</router-link>-->
    <!--    <router-link :to="{path:'/profile',query:{name:'aliyu',sex: '男',height:1.80}}">用户配置信息</router-link>-->
    <!--    <router-link to="/home" tag="button">home</router-link>-->
    <!--    <router-link to="/about" tag="button">about</router-link>-->
    <button @click="userClick">用户user</button>
    <button @click="profileClick">用户档案信息</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 1
    }
  },
  methods: {
    homeclick() {
      // this.$router.push('/aaa').catch(error => error)
      this.$router.replace('/home').catch(error => error)
    },
    aboutclick() {
      this.$router.push('/about').catch(error => error)
    },
    userClick() {
      this.$router.push('/user/' + this.userId).catch(error => error);
    },
    profileClick() {
      this.$router.push({
        path: '/profile',
        query: {
          name: 'aliyu',
          sex: '男',
          height: 1.88
        }
      }).catch(error => error)
    }
  }
}
</script>

<style>
.active {
  color: red;
}
</style>
