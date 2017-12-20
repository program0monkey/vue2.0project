<template>
<div class="index-wrap">
  <div class="index-left">
    <div class="index-left-block">
      <h2>全部产品</h2>
      <template v-for="product in productList" class="allproduct">
        <p>{{product.title}}</p>
        <ul>
          <li v-for="item in product.list">
            <a :href="item.url">{{item.name}}</a>
          </li>
        </ul>
        <div v-if="!product.last" class="hr"></div>
      </template>
      <div class="jianju"></div>
      <h2>冒险模式</h2>
      <template v-for="product in productList" class="itproduct">
        <p>{{product.title}}</p>
        <ul>
          <li v-for="item in product.list">
            <a :href="item.url">{{item.name}}</a>
            <span v-if="item.hot" class="hot">hot</span>
          </li>
        </ul>
        <div v-if="!product.last" class="hr"></div>
      </template>
    </div>
  </div>
  <div class="index-right">
    <slider-show :slides="slides"></slider-show>
    <div class="index-right-list">
      <div class="index-right-item" v-for="(item,index) in newlist" :class="{'line-last' :index%2 !=0}">
        <div class="inner-left" :class="'index-img-'+ item.id"></div>
        <div class="index-right-item-inner">
          <h2>{{item.title}}</h2>
          <p>{{item.description}}</p>
          <div>
            <button class="buybtn">
              <a href="">立即购买</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
  import sliderShow from '../components/slideshow.vue'
  export default{
      components:{
          sliderShow
      },
      /*created:function () {
        this.$http.get('api/getNewsList')
          .then((res)=>{
            this.newList=res.data
          }),(err)=>{
            console.log(err)
        }
      },*/
      data(){
          return{
            invTime:2000,
              slides:[
                {
                    title:'龙争虎斗加基森',
                    src:require('../assets/1.jpg'),
                    href:'detail/tongji'
                },
                {
                  title:'麦迪文之夜',
                  src:require('../assets/2.jpg'),
                  href:'detail/yuce'
                },
                {
                  title:'冰封王座',
                  src:require('../assets/3.jpg'),
                  href:'detail/fenxi'
                },
                {
                  title:'狗头人的宝藏',
                  src:require('../assets/4.jpg'),
                  href:'detail/guanggao'
                },
              ],
              newlist:[
                {
                    title:'龙争虎斗加基森',
                    description:'这是我们的产品',
                    id:'car',
                    saleout:false
                },
                {
                  title:'龙争虎斗加基森',
                  description:'这是我们的产品',
                  id:'cat',
                  saleout:false
                },
                {
                  title:'龙争虎斗加基森',
                  description:'这是我们的产品',
                  id:'dog',
                  saleout:false
                },
                {
                  title:'冰封王座',
                  description:'这是我们的产品',
                  id:'bird',
                  saleout:false
                },
              ],
            productList:{
                pc:{
                    title:'卡包产品',
                    list:[
                      {
                        name:'龙争虎斗加基森',
                        hot:true,
                        url:'http://warcraft.com'
                      },
                      {
                        name:'龙争虎斗加基森',
                        url:'http://warcraft.com'
                      },
                      {
                        name:'麦迪文之夜',
                        url:'http://warcraft.com'
                      },
                      {
                        name:'冰封王座',
                        url:'http://warcraft.com'
                      }
                    ]
                },
                app:{
                    title:'拓展包',
                    last:true,
                  list:[
                    {
                      name:'龙争虎斗加基森',
                      hot:true,
                      url:'http://warcraft.com'
                    },
                    {
                      name:'探索安格洛',
                      url:'http://warcraft.com'
                    },
                    {
                      name:'麦迪文之夜',
                      url:'http://warcraft.com'
                    },
                    {
                      name:'冰封王座',
                      url:'http://warcraft.com'
                    }
                  ]
                }
            }

          }
      }
  }
</script>
<style scoped>
  .jianju{
    height: 15px;
    background-color: #f3f3f3;
  }
  .index-img-cat{
    background: url("../assets/6.jpg") no-repeat;
  }
  .index-img-bird{
    background: url("../assets/7.jpg") no-repeat;
  }
  .index-img-dog{
    background: url("../assets/5.jpg") no-repeat;
  }
  .index-img-car{
    background: url("../assets/8.jpg") no-repeat;
  }
  .index-right{
    flex: 0 0 200px;
    width: 900px;
    margin-top: 10px;
    margin-left: 10px;
  }
  .index-right-list{
    display: flex;
    flex-flow: wrap;
    width: 900px;
  }
  .index-right-item{
    background-color: white;
    /*float: left;*/
    width: 400px;
    box-shadow: 0 0 1px #ddd;
    padding: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
  }
  .line-last{
    margin-right: 0;
  }
  .index-right-item-inner{
    float: left;
    min-height: 125px;
  }
  .index-right-item-inner h2{
    padding: 10px;
    font-size: 20px;
  }
  .index-right-item-inner p{
    padding: 10px;
    font-size: 16px;
  }
  .index-right-item-inner button{
    display: block;
    margin-left: 10px;
    width: 100px;
    height: 30px;
    line-height: 30px;
  }
  .index-right-item-inner a{
    text-decoration: none;
    color: white;
  }
  .inner-left{
    float: left;
    min-height: 125px;
    width: 120px;
  }
  .hot{
    background-color: #FF520C;
    color: white;
  }
  .hr{
    flex: 1;
    height: 2px;
    background-color: lightgray;
  }
  .index-wrap{
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
  }
  .index-left{
    flex: 1;
    background-color: white;
    width: 200px;
    margin: 24px 10px 10px 10px;
  }
  .index-left h2{
    padding-left: 10px;
    height: 30px;
    line-height: 30px;
    color:white;
    font-size: 18px;
    background-color: #4fc08d;
  }
  .index-left p{
    height: 30px;
    line-height: 30px;
    color:black;
    font-size: 16px;
  }
  .index-left li{
    padding: 5px 10px;
  }
  .index-left li a{
    color: black;
    text-decoration: none;
  }
  .buybtn{
    background-color: #4fc08d;
  }
</style>
