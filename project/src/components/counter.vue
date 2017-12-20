<template>
  <div class="counter-component">
      <div class="counter-btn" @click="minus"> - </div>
      <div class="counter-show">
        <input type="text" v-model="number" @keyup="fixNumber">
      </div>
      <div class="counter-btn" @click="add"> + </div>
  </div>
</template>
<script>
  export default{
      watch:{
          number(){
              this.$emit('on-change',this.number)
          }
      },
      props:{
          max:{
              type:Number,
              default:20
          },
          min:{
              type:Number,
              default:1
          }
      },
      methods:{
          fixNumber(){
              let fix
              if(typeof this.number==='string'){
                  fix=Number(this.number.replace(/\D/g),'')
              }
              else{
                  fix=this.number
              }
              if(fix>this.max||fix<this.min){
                  fix=this.min
              }
              this.number=fix
          },
          minus(){
              if(this.number<=this.min){
                  return
              }
              this.number --
          },
          add(){
            if(this.number>=this.max){
                  return
              }
              this.number++
          }
      },
      data(){
          return{
              number:this.min
          }
      }
  }
</script>
<style scoped>
  .counter-component{
    display: flex;
    flex-direction: row;
  }
  .counter-btn{
    border-radius: 2px;
    width: 20px;
    height: 22px;
    text-align: center;
    line-height: 20px;
    background-color: #C3C3C3;
  }
  .counter-show input{
    display: block;
    width: 60px;
    border: 1px solid gray;
    border-radius: 2px;
    padding: 0;
    height: 20px;
    line-height: 20px;
    background-color: white;
  }
</style>
