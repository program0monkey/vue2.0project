<template>
  <div>
    <div class="dalog-wrap">
      <div class="dalog-cover" v-if="isShow" @click="emits"></div>
      <transition name="drop">
        <div  class="dalog-content" v-if="isShow">
          <div  class="dalog-close" @click="emits">X</div>
          <slot>empty</slot>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
  export default{
      props:{
          isShow:{
              type:Boolean,
              default:false
          }
      },
      methods:{
          emits(){
              this.$emit('on-emit')
          }
      }
      ,
      data(){
          return{

          }
      }
  }
</script>
<style scoped>
  .drop-enter-active{
    transition: all .5s ease-in;
  }
  .drop-leave-active{
    transition: all .2s ease-in;
  }
  .drop-enter{
    transform: translateY(-500px);
  }
  .drop-leave-active{
    transform: translateY(-500px);
  }
  .dalog-wrap{
    position: fixed;
    width: 100%;
    height: 100%;
  }
  .dalog-close{
    position: absolute;
    right: 5px;
    top:5px
  }
  .dalog-cover{
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.3;
    top:0;
    left:0;
    z-index: 5;
  }
  .dalog-content{
    position: fixed;
    width: 50%;
    max-hight:50%;
    overflow: auto;
    left: 50%;
    top:20%;
    line-height: 1.6;
    padding: 2%;
    border: 2px solid #464068;
    margin-left: -25%;
    background-color: white;
    z-index: 10;
  }
</style>
