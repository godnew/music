/**
* Created by godnew on 2017/7/17.
*/

<template>
    <div>
      <header>{{title}}</header>
      <tabs :list="['流行','歌单','排行榜','热门歌手']"></tabs>
    </div>
</template>

<script>
    import Tabs from "@/components/tabs"
    export default {
      components:{Tabs},
      data(){
          return {
              title:'云音乐'
          }
      }
    }
</script>

<style scoped lang="less">
header{
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ff7777;
  color: #fff;
}
</style>
