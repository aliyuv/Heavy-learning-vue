<template>
  <div id="app">
    <TabBar>
      <TabBarItem>
        <img src="./assets/img/tabbar/home.svg" alt="" slot="item-icon">
        <img src="./assets/img/tabbar/home_active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">首页</div>
      </TabBarItem>
      <TabBarItem>
        <img src="./assets/img/tabbar/category.svg" alt="" slot="item-icon">
        <img src="./assets/img/tabbar/category_active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">分类</div>
      </TabBarItem>
      <TabBarItem>
        <img src="./assets/img/tabbar/shopcart.svg" alt="" slot="item-icon">
        <img src="./assets/img/tabbar/shopcart_active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">购物车</div>
      </TabBarItem>
      <TabBarItem>
        <img src="./assets/img/tabbar/profile.svg" alt="" slot="item-icon">
        <img src="./assets/img/tabbar/profile_active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">我的</div>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script>
import TabBar from "./components/tabbar/TabBar";
import TabBarItem from "./components/tabbar/TabBarItem";

export default {
  name: 'App',
  components: {TabBar, TabBarItem}
}
</script>

<style>
@import "assets/css/base.css";
</style>
