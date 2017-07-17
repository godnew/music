/**
* Created by godnew on 2017/7/17.
*/


<template>
    <div>
      <ul>
        <li v-for="(item,index) in list" @click.stop="change(index)" :class="{active:index==nowIndex}">{{item}}</li>
      </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return {
              nowIndex:0
            }
        },
        props:{
            list:{
              type: Array,
              default: [1,2,3],
              required: true
            }
        },
        methods:{
            change(index){
                this.nowIndex=index;
            }
        }
    }
</script>

<style scoped lang="less">
  ul{
    display: flex;
    justify-content: space-between;
    li{
      position: relative;
      height: 50px;
      line-height: 50px;
      font-size: 14px;
      flex: 1;
      text-align: center;
      cursor: pointer;
      color:#999;
    }
    .active{
      color: #ff7777;
      &::after{
        width: 100%;
        height: 2px;
        content: '';
        background: #ff7777;
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
  }
</style>
