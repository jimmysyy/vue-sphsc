<template>
  <div>
    <!-- 三级联动全局组件：三级联动已经注册为全局组件，因此不需要引入 -->
    <TypeNav/>
    <ListContainer/>
    <Recommend/>
    <Rank/>
    <Like/>
    <Floor v-for="(floor,index) in floorList" :key="floor.id" :list="floor"/>
    <Brand/>
    
  </div>
</template>

<script>
  import ListContainer from '@/pages/Home/ListContainer'
  import Recommend from '@/pages/Home/Recommend'
  import Rank from '@/pages/Home/Rank'
  import Like from '@/pages/Home/Like'
  import Floor from '@/pages/Home/Floor'
  import Brand from '@/pages/Home/Brand'
  
  //引入
  import {mapState} from 'vuex';

  export default {
    components:{
      ListContainer,
      Recommend,
      Rank,
      Like,
      Floor,
      Brand
    },
    mounted(){
      //派发action,获取floor数据
      this.$store.dispatch("getFloorList");

      // 获取用户信息在首页展示
      // 把之前游客的临时id改成token传给后台，去api里的拦截器里修改
      // this.$store.dispatch("getUserInfo");
    },
    computed:{
      ...mapState({
        floorList:state => state.home.floorList,
      })
    }
  }
</script>

<style>

</style>