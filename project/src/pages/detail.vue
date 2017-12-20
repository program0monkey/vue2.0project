<template>
  <div class="detail">
    <div class="detail-left">
      <div class="detail-left-img">
        <img :src="iconSrc" alt="">
      </div>
      <ul class="detail-left-ul">
        <!--<li class="detail-left-li" v-for="item in dataList" >{{item.name}}</li>-->
        <router-link class="detail-left-li" v-for="(item,index) in dataList" :key="index" :to="{path:item.path}" tag="li" active-class="active">{{item.name}}</router-link>
      </ul>
    </div>
    <div class="detail-right">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>
<script>
  export default{
      computed:{
          iconSrc(){
            return this.mapList[this.$route.path]
          }
      },
    data(){
        return{
            dataList:[
              {
                  name:'数据统计',
                  path:'tongji'
              },
              {
                name:'数据预测',
                path:'yuce'
              },
              {
                name:'流量分析',
                path:'fenxi'
              },
              {
                name:'广告发布',
                path:'guanggao'
              }
            ],
            mapList:{
                '/detail/tongji':require("../assets/5.jpg"),
                '/detail/yuce':require("../assets/6.jpg"),
                '/detail/guanggao':require("../assets/7.jpg"),
                '/detail/fenxi':require("../assets/8.jpg"),
            }
        }
    }
  }
</script>
<style>
  .detail{
    display: flex;
    width: 1200px;
    flex-direction: row;
    margin: 20px auto;
  }
  .detail-left{
    height: 300px;
    flex: 1;
    background-color: white;
  }
  .detail-left-img{
    height: 100px;
    text-align: center;
    padding-top: 20px;
  }
  .detail-left-img img{
    width: 70px;
  }
  .detail-left-ul{
    padding: 10px;
  }
  .detail-left-li{
    height: 30px;
    line-height: 30px;
    padding-left: 30px;
    font-size: 16px;
  }
  .active{
    background-color: #67AD77;
    color: white;
  }

  .detail-right{
    flex: 4;
    margin-left: 10px;
  }
</style>
