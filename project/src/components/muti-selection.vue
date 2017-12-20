<template>
  <div class="selection-component">
    <div class="selection-list">
      <ul>
        <li v-for="(item,index) in selection" @click="toggSelection(item.label)" :class="{active:nowIndex.indexOf(item.label) !== -1}">{{item.label}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default{
    methods:{
      toggSelection(a){
        /*debugger*/
        if(this.nowIndex.indexOf(a) === -1){
            this.nowIndex.push(a)
        }else{
            for(let i=0;i<this.nowIndex.length;i++){
                if(this.nowIndex[i]===a){
                    this.nowIndex.splice(i,1)
                  /*console.log(this.nowIndex)*/
                }
            }
        }
        this.$emit('on-change',this.nowIndex)
      }
    },
    props:{
      selection:{
        type:Array,
        default:[{
          label:'test',
          value:0
        }]
      }
    },
    data(){
      return{
        nowIndex:[]
      }
    }
  }
</script>
<style scoped>
  .selection-component{
    position: relative;
    display: inline-block;
  }
  .selection-list{
    display: inline-block;
    width: 100%;
    background: #fff;
    border-top: 1px solid #e3e3e3;
    border-bottom: 1px solid #e3e3e3;
  }
  .selection-list ul{
    display: flex;
    flex-direction: row;
  }
  .selection-list li+li{
    margin-left: 10px;
  }
  .selection-list li{
    flex: 1;
    padding: 5px 15px 5px 10px;
    border: 1px solid #e3e3e3;
    border-radius: 5px;
    cursor: pointer;
    color: #000;
    background-color: #e3e3e3;
  }
  .selection-list li:hover{
    color: white;
    background: #00A800
  }
  .selection-list li.active{
    color: white;
    background: #00A800
  }
</style>
