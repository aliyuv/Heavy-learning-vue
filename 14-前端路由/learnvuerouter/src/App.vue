<template>
  <div id="app">
    <router-link to="/home" tag="button">home</router-link>
    <router-link to="/about" tag="button">about</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.active{
  color: red;
}
</style>
