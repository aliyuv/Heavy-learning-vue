<template>
  <div>
    <h2>home</h2>
    <router-link to="/home/news">新闻</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      path: '/home/news'
    }
  },
  // 这两个函数, 只有该组件被保持了状态使用了keep-alive时, 才是有效的
  activated() {
    this.$router.push(this.path).catch(error => error);
    console.log('activated');
  },
  deactivated() {
    console.log('deactivated');
  },
  beforeRouteLeave (to, from, next) {
    console.log(this.$route.path);
    this.path = this.$route.path;
    next()
  }
}
</script>

<style scoped>

</style>
