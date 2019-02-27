<template>
  <div>
       <h1>关于我们</h1>
    <p id="message">{{message}}</p>
    <button type="button" v-on:click="goContact">客户</button>


    
  </div>
</template>

<script>
export default {
    name:"about",
    data(){
        return {
         message:"吾心橙科技有限公司是一家科技公司" 
        }
    },
    methods:{
      goContact:function(){
        alert("是否打开腾讯客服！");
      }
    }
}
</script>

<style>
#message{
    color:red;
}
</style>