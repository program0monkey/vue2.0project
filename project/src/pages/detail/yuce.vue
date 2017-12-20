<template>
  <div class="tongji-space">
    <div class="tongji-title">
      <h2 >数据预测</h2>
      <div class="tongji-miaoshu">这是我们的统计信息,统计所有卡包出成率</div>
      <div class="tongji-from">
        <div class="tongji-from-li">
          <p>购买数量:</p>
          <counter class="tongji-com" @on-change="onparamChange('shuliang',$event)"></counter>
        </div>
        <div class="tongji-from-li">
          <p>产品类型:</p>
          <selection class="tongji-com" :selection="citylists" @on-change="onparamChange('type',$event)"></selection>
        </div>
        <div class="tongji-from-li">
          <p>产品版本:</p>
          <mutiSelection class="tongji-com" :selection="buylists" @on-change="onparamChange('banben',$event)"></mutiSelection>
        </div>
        <p class="total">总价: <span>{{price}}</span>元 </p>
        <div class="tongji-from-btn" @click="getPrice">确定</div>
      </div>
    </div>

    <div class="productmsg">
      <p class="protitle">产品说明</p>
      <p class="protext">每名玩家从九大职业的代表英雄中选择一名

        玛法里奥·怒风（德鲁伊）、雷克萨（猎人）、吉安娜·普罗德摩尔（法师）、光明使者乌瑟尔（圣骑士）、安度因·乌瑞恩（牧师）、瓦莉拉·桑古纳尔（潜行者）、萨尔（萨满）、古尔丹（术士）以及加尔鲁什·地狱咆哮（战士）。

        每名英雄都有一系列的专属卡牌，还有各职业均可用的非专属卡。每名英雄都有一个花费2点法力水晶的英雄技能，可以在己方回合的任意时刻使用，但一回合只能使用一次。</p>
    </div>
    <dalog :isShow="isShow" @on-emit="closedalog">
      <table class="buy-dialog-table">
        <tr>
          <th>购买数量</th>
          <th>产品类型</th>
          <th>产品版本</th>
          <th>总价</th>
        </tr>
        <tr>
          <td>{{shuliang}}</td>
          <td>{{citylists[type].label}}</td>
          <td><span v-for="item in banben">{{item}}</span></td>
          <td>{{price}}</td>
        </tr>
      </table>
      <bankchooser></bankchooser>
    </dalog>
  </div>
</template>
<script>
  import dalog from '../../components/dalog.vue'
  import selection from '../../components/selection.vue'
  import mutiSelection from '../../components/muti-selection.vue'
  import counter from '../../components/counter.vue'
  import bankchooser from '../../components/bankchooser.vue'
  export default{
    components:{
      selection,
      mutiSelection,
      counter,
      dalog,
      bankchooser
    },
    data(){
      return{
        isShow:false  ,
        price:100,
        shuliang:1,
        type:0,
        banben:[1,1],
        citylists:[
          {
            label:'北北京',
            value:0
          },
          {
            label:'上海',
            value:1
          },
          {
            label:'成都',
            value:2
          },
          {
            label:'广州',
            value:3
          },
        ],
        buylists:[
          {
            label:'专家版',
            price:100
          },
          {
            label:'企业版',
            price:1000
          },
          {
            label:'家庭版',
            price:10
          }
        ]
      }
    },
    methods:{
      closedalog(){
        this.isShow=false
      },
      onparamChange(attr,val){
        this[attr]=val
        console.log(this.shuliang)
        /*console.log(this[attr])*/
        /*console.log(this.shuliang)
         console.log(this.type)

         *//*getPrice()*/
      },
      getPrice(){
        console.log(this.shuliang)
        this.isShow=true
        /*let buyVersionArray=this.banben
         console.log(buyVersionArray)
         let reqParams={
         buyNumber:this.shuliang,
         buyType:this.type,
         version:buyVersionArray.join(',')
         }
         console.log(reqParams)*/
        /*  this.$http.post('/api/getPrice',reqParams)
         .then((res)=>{
         this.price=res.data.price
         })
         .catch((err)=>{
         console.log(err)
         })*/
      }
    },
    mounted(){

      this.shuliang=2,
        this.type=0,
        this.banben=0
      /*this.getprice()*/
    }
  }
</script>
<style scoped>
  .tongji-space{
    display: flex;
    flex-direction: column;
  }
  .tongji-title{
    background-color: white;
  }
  .tongji-title h2{
    padding-left: 10px;
    width: 100%;
    font-size: 22px;
    height: 50px;
    line-height: 50px;
  }
  .tongji-miaoshu{
    padding-left: 10px;
    width: 100%;
    background-color: #C6F1FF;
    color: #c5c5c5;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
  }
  .tongji-from{
    height: 280px;
  }
  .tongji-from-li{
    display: flex;
    flex-direction: row;
  }
  .tongji-from p{
    height: 20px;
    line-height: 20px;
    padding: 20px 20px 10px 20px;
  }
  .tongji-com{
    padding: 20px 20px 10px 0px ;
  }
  .tongji-from-btn{
    text-align: center;
    line-height: 30px;
    color: white;
    margin: 10px 0 10px 20px;
    background-color: #67AD77;
    width: 100px;
    height: 30px;
    border-radius: 8px;
    border-color:  #00DF00;
  }
  .productmsg{
    background-color: white;
    margin-top: 20px;
  }
  .productmsg p{
    padding: 10px 0px 10px 10px;
  }
  .protitle{
    font-size: 20px;
  }
  .protext{
    font-size: 16px;
  }
  .buy-dialog-title{
    font-size: 16px;
    font-weight:bold
  }
  .buy-dialog-btn{
    margin-top: 20px;
  }
  .buy-dialog-table{
    width: 100%;
    margin-bottom: 20px;
  }
  .buy-dialog-table td,.buy-dialog-table th{
    border: 1px solid #e3e3e3;
    text-align: center;
    padding: 5px 0;
  }
  .buy-dialog-table th{
    background-color: #4fc08d;
    color: white;
    border: 1px solid #4fc08d;
  }
</style>
