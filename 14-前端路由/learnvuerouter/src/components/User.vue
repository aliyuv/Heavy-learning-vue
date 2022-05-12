<template>
<div>
  <h2>我是用户</h2>
  {{userId}}
  <h2>{{$route.params.id}}</h2>
</div>
</template>

<script>
export default {
  name: "User",
  computed:{
    userId(){
      return this.$route.params.id;
    }
  }
}
</script>

<style scoped>

</style>
