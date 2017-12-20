<template>
  <div class="slide-show" @mouseover="clearInt" @mouseout="runInt">
    <div class="slide-img">
        <a :href="slides[nowIndex].href">
          <img :src="slides[nowIndex].src" alt="">
        </a>
    </div>
    <h2>{{slides[nowIndex].title}}</h2>
    <ul class="slide-pages">
      <li @click="prevIndex">&lt;</li>
      <li v-for="(item,index) in slides" @click="goto(index)">
        <a :class="{on: index===nowIndex}">{{index+1}}</a>
      </li>
      <li @click="nextIndex">&gt;</li>
    </ul>
  </div>
</template>
<script>
  export default{
      props:{
          slides:{
              type:Array,
              default:[]
          }
      },
      methods:{
          goto(index){
            this.nowIndex=index
          },
          nextIndex(){
            if(this.nowIndex === this.slides.length-1){
              this.nowIndex=0
            }else{
              this.nowIndex ++
            }
          }
          ,
          prevIndex(){
              /*console.log(this.nowIndex)
            console.log(this.slides.length)*/
              if(this.nowIndex === 0){
                  this.nowIndex=this.slides.length-1
                  console.log(this.nowIndex)
              }else{
                  this.nowIndex --
              }
          },
          runInt(){
              this.time=setInterval(()=>{
                  this.nowIndex++
                  if(this.nowIndex===this.slides.length){
                      this.nowIndex=0
                  }
              },2000)
          },
          clearInt(){
              clearInterval(this.time)
          }
      },
      data(){
          return{
            msg:'123456',
            nowIndex:0
          }
      },
      computed:{

      }
    ,
    mounted(){
      this.runInt()
    }
  }
</script>
<style scoped>
  .on{
    color: red;
  }
  .slide-show{
    position: relative;
    margin: 15px 15px 15px 0 ;
    width:900px;
    height: 350px;
    overflow: hidden;
  }
  .slide-show h2{
    position: absolute;
    width: 100%;
    color: #fff;
    background: #000;
    opacity: .5;
    bottom: 0;
    height: 30px;
    text-align: left;
    padding-left: 15px;
  }
  .slide-img{
    width: 100%;
  }
  .slide-img img{
    width: 100%;
    position: absolute;
    top:0
  }
  .slide-pages{
    position: absolute;
    bottom:10px;
    right:5px;
    overflow: hidden;
  }
  .slide-pages li{
    float: left;
    color: white;
    padding: 0 5px;
  }
</style>
