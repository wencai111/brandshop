<template>
  <div class="personal">
    <div class="top">
      <div class="title">
        <h3>小黄人儿童安全座椅</h3>
      </div>
      <div class="img2" v-bind:style="{backgroundImage:'url('+require('../../assets/upload/main/course2.jpg')+')'}"  ></div>
      <span class="name">{{name}}</span>
    </div>
    <div>
      <div class="myindent">
        <h3 class="indent">我的订单</h3>
        <router-link to="order">
         <img src="@/photo/goods/unpaid.png">
        </router-link>
        <a href>
        <img src="@/photo/goods/unshipped.png">
        </a>
        <a href>
        <img src="@/photo/goods/unreceipt.png">
        </a>
        <a href>
      <img src="@/photo/goods/refunding.png">
        </a>
        <a href>
         <img src="@/photo/goods/completed.png">
        </a>
      </div>
    </div>

    <div class="diz">
      <a href>
        <i class="icon-ticket"></i>
        <span class="phone">地址管理</span>
        <img src="@/photo/goods/goon.png">
      </a>
    </div>
    <div class="diz">
      <a href>
        <i class="icon-ticket"></i>
        <span>联系客服</span>
         <img src="@/photo/goods/goon.png">
      </a>
    </div>
    <div class="diz">
      <a href>
        <i class="icon-ticket"></i>
        <span class="phone">电话&emsp;&emsp;</span>
         <img src="@/photo/goods/goon.png">
      </a>
    </div>
    <!-- 底部 -->
    <div class="dibu">
      <a href>
        <i class="icon-ticket"></i>
        <span>首页</span>
        <nav class="border2"></nav>
      </a>
      <a href>
        <i class="icon-ticket"></i>
        <span>产品</span>
        <nav class="border2"></nav>
      </a>
      <a href>
        <i class="icon-ticket"></i>
        <span>我的</span>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name:"Personal",
  data(){
    return{
      name:"名字",
    }
  }
};
</script>
<style>
* {
  padding: 0px;
  margin: 0px;
}
.myindent img{
  width: 40px;
  height: 40px;
}
.personal {
  overflow: hidden;
  height: 100%;
  width: 100%;
  position: relative;
  background-color: whitesmoke;
}
.top {
  height: 180px;
  background-color: gold;
}
.title {
  font-size: 14px;
  color: white;
  position: fixed;
  margin-top: 30px;
  margin-left: 20px;
} 
.img2 {
  position: fixed;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  /* border: 2px solid black; */
  margin-top: 90px;
  margin-left: 10px;
    background-size: cover;
}
.name {
  position: fixed;
  margin-top: 110px;
  margin-left: 90px;
}
/* 订单部分 */
.myindent {
  height: 110px;
  display: flex;
  align-items: center;
  background-color: white;
      margin-top: -5px;
  overflow: hidden;
}
.indent {
  position: absolute;
  display: flex;
  font-size: 14px;
  width: 150px;
  margin-top: -25px;
  margin-left: 20px;
}
.myindent a {
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: center;
  width: 40%;
  margin-top: 40px;
}

.diz {
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: white;
  margin-top: 10px;
  overflow: hidden;
}
.diz a {
  margin-left: 10px;
  color: #000;
  display: flex;
  height: 100%;
  align-items: center;
  width: 100%;
}
.diz img{
  display: flex;
 margin-left: 30%;
}
.dibu {
  height: 40px;
  display: flex;
  align-items: center;
  background-color: white;
  margin-top: 60%;
}
.dibu a {
  width: 100%;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.border2 {
  position: absolute;
  height: 30px;
  border: 0.5px solid black;
  margin-left: 15%;
  margin-top: 20px;
}
</style>


