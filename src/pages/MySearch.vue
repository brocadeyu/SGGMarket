<template>
  <div>搜索
     {{$route.params.keyword}}
     {{$route.query.k}}
  </div>
</template>

<script>
export default {
  name: "MySearch",
};
</script>

<style scoped lang="less">
</style>