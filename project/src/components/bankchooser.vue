<template>
  <div class="bank-chooser">
    <ul class="bank-chooser-ul">
      <li v-for="item in banks" :class="">{{item.label}}</li>
    </ul>
  </div>
</template>
<script>
  export default{
      data(){
          return{
              banks:[
                {
                    id:201,
                    label:'中信银行',
                    name:'zhongxin'
                },
                {
                  id:202,
                  label:'广发银行',
                  name:'guangfa'
                },
                {
                  id:203,
                  label:'招商银行',
                  name:'zhaoshang'
                },
              ]
          }
      }
  }
</script>
<style>
  .bank-chooser-ul{
    width: 100%;
    height: 100px;
  }
  .bank-chooser-ul li{
    display:inline-block;
    width: 100px;
    height:40px;
    text-align: center;
    line-height: 40px;
    margin-right: 10px;
    background-color: #e3e3e3;
  }
</style>
