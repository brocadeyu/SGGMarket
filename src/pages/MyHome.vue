<template>
  <div>
    <TypeNav/>
    <ListContainer/>
    <TodayRec/>
    <ShopRank/>
    <MayLikes/>
    <MyFloor/>
    <MyFloor/>
    <MyBrand/>
  </div>
</template>

<script>
import ListContainer from './ListContainer.vue'
import TodayRec from './TodayRec.vue'
import ShopRank from './ShopRank.vue'
import MayLikes from './MayLikes.vue'
import MyFloor from './MyFloor.vue'
import MyBrand from './MyBrand.vue'
export default {
  name: "MyHome",
  components:{
    ListContainer,TodayRec,ShopRank,MayLikes,MyFloor,MyBrand
  }
};
</script>

<style scoped lang="less">
</style>