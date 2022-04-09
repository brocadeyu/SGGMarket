<template>
  <div id="app">
   <MyHeader/>
   <router-view></router-view>
   <MyFooter/>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'
export default {
  name: 'App',
  components: {
    MyHeader,MyFooter
  }
}
</script>

<style scoped>

</style>
