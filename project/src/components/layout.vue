<template>
  <div class="layout">
    <div class="app-header">
      <div class="app-header-inner">
        <div class="app-header-innerimg">
          <router-link :to="{path:'/'}">
            <img src="../assets/logo.png" alt="">
          </router-link>
        </div>
        <div class="header-nav">
          <ul class="nav-list">
            <li v-if="!onlog" @click="logdalog">登陆</li>
            <li v-if="onlog">{{this.name}}</li>
            <li class="nav-pile">|</li>
            <li v-if="onlog" @click="quit">退出</li>
            <li v-if="!onlog" @click="regdalog">注册</li>
            <li class="nav-pile">|</li>
            <li @click="aboutdalog">关于</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="app-content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="app-footer">
      <p>@ 2016 abcdefg MT</p>
    </div>
    <dalog @on-emit="logcatchemit" :isShow="logShow">
      <loginform @on-login="haslog"></loginform>
    </dalog>
    <dalog @on-emit="regcatchemit" :isShow="regShow">
      <regform></regform>
    </dalog>
    <dalog @on-emit="aboutcatchemit" :isShow="aboutShow">
      <p>地底深处的宝藏在等着你

        你集结了一个由勇敢的冒险者所组成的小队，去寻找埋藏在地下世界里的宝藏。你们进入矿坑深处，黑影随着闪烁的火光忽隐忽现。就在这个时候，一阵风吹熄了火炬。在这突如其来的黑暗中，你发现前方有一丝微弱的光芒，而且越来越近。耳边传来了一阵异常熟悉的叫声，在这阴森的地下世界中回荡。

        “你不能拿走我的蜡烛！”</p>
    </dalog>
  </div>
</template>
<script>
  import loginform from '../components/login-form.vue'
  import regform  from '../components/reg-form.vue'
  import dalog from '../components/dalog.vue'
  export default{
      components:{
          dalog,
          loginform,
          regform
      },


      data(){
          return{
              name:'',
              msg:'',
              isShow:false,
              logShow:false,
              regShow:false,
              aboutShow:false,
              onlog:false
          }
      },
      methods:{
          quit(){
              this.onlog=false
          },
          haslog(data){
              this.onlog=true
              this.name='张耀匀'
              this.logShow=false
          },
          logcatchemit(){
              this.logShow=false
          },
          regcatchemit(){
            this.regShow=false
          },
          aboutcatchemit(){
            this.aboutShow=false
          },
          logdalog(){
              this.logShow=true
          },
          aboutdalog(){
            this.aboutShow=true
          },
          regdalog(){
            this.regShow=true
          }
      }
  }
</script>
<style>
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  .errmsg{
    padding-left: 100px;
  }
  .layout{
    display: flex;
    flex-direction: column;
  }
  .app-header{
    flex: 1;
  }
  .app-content{
    flex: 1;
    display: flex;
  }
  .app-footer{
    flex: 1;
  }
  .app-header ,.app-footer{
    flex:0 0 20%!important;
  }
  .app-header{
    width: 100%;
    height: 90px;
    line-height: 90px;
    color: #b2b2b2;
    background-color: #363636;
  }
  .app-header-inner{
    flex: 1;
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .app-header-innerimg img{
    width: 50px;
    margin-top: 20px;
  }
  .header-nav{

  }
  .header-nav ul{
    overflow: hidden;
    display: flex;
    flex-direction: row;
  }
  .header-nav li{
    cursor: pointer;

  }
  .nav-pile{
    padding: 0 10px;
  }
  .app-content{
    background-color: #f3f3f3;
  }
  .app-footer{
    width: 100%;
    background-color: lightgray;
    text-align: center;
    height: 50px;
    line-height: 50px;
  }
  .g-form{}
  .g-form-line{
    padding: 10px;
  }
  .g-form-label{
    width: 70px;
    font-size: 16px;
    display: inline-block;
  }
  .g-form-input{
    display: inline-block;
  }
  .g-form-input input{
    height: 30px;
    width: 200px;
    line-height: 30px;
    padding:0 10px;
    border: 1px solid #ccc;
  }
  .g-form-btn{
    width: 70px;
    margin-left: 100px;
  }
  .error{
    color: red;
  }
</style>

