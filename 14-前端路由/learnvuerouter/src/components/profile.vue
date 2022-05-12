<template>
<div>
  用户配置信息
  {{$route.query.name}}
  {{$route.query.sex}}
  {{$route.query.height}}
</div>
</template>

<script>
export default {
  name: "profile"
}
</script>

<style scoped>

</style>
