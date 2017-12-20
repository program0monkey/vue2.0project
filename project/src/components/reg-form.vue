<template>
  <div class="logo-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input type="text" v-model="usernameModel" placeholder="请输入用户名">
        </div>
        <span class="error">{{userErrors.errorText}}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input">
          <input type="password" v-model="passwordModel" placeholder="请输入密码">
        </div>
        <span class="error">{{passErrors.errorText}}</span>
      </div>
      <div>
        <button class="g-form-btn" @click="onlogin">注册</button>
      </div>
      <span v-if="ishow" class="errmsg">填写信息不正确</span>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        usernameModel:'',
        passwordModel:'',
        ishow:false
      }
    },
    computed:{
      passErrors(){
        let errorText,status
        if(!/^\w{1,6}$/g.test(this.passwordModel)){
          status=false
          errorText='超过6位'
        }else{
          status=true
          errorText=''
        }
        if(!this.passFlag){
          errorText=''
          this.passFlag=true
        }
        return{
          status,
          errorText
        }
      },
      userErrors(){
        let errorText,status
        if(!/@/g.test(this.usernameModel)){
          status=false
          errorText='不包含@'
        }else{
          status=true
          errorText=''
        }
        if(!this.userFlag){
          errorText=''
          this.userFlag=true
        }
        return{
          status,
          errorText
        }
      }
    }
    ,
    methods:{
      onlogin(){
        if(!this.userErrors.status || !this.passErrors.status){
          this.ishow=true
        }else{
          this.ishow=false
          this.$emit('on-login')
          /*this.$http.post('api/login')
           .then((data)=>{
           this.$emit('on-login',data)
           }),(error)=>{
           console.log(error)
           }*/
        }
      }
    }
  }
</script>
<style>

</style>
