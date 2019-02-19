<template>
  <div>
    <div
      class="topimg"
      v-bind:style="{backgroundImage:'url('+require('../../assets/upload/main/course2.jpg')+')'}"
    ></div>
    <div class="background">
      <div class="style">
        <ul>
          <li class="top">
            <div
              class="video"
              v-bind:style="{backgroundImage:'url('+require('../../assets/upload/main/course2.jpg')+')'}"
            ></div>
            <span>“致命”的安全带</span>
          </li>
          <li class="top">
            <div
              class="video"
              v-bind:style="{backgroundImage:'url('+require('../../assets/upload/main/course2.jpg')+')'}"
            ></div>
            <span>“致命”的安全气囊</span>
          </li>
          <li class="center">
            <div
              class="video"
              v-bind:style="{backgroundImage:'url('+require('../../assets/upload/main/course2.jpg')+')'}"
            ></div>
            <span>不可以将头、手伸出窗外</span>
          </li>
          <li class="center">
            <div
              class="video"
              v-bind:style="{backgroundImage:'url('+require('../../assets/upload/main/course2.jpg')+')'}"
            ></div>
            <span>不要将孩子独自留在车内</span>
          </li>
          <li class="buttom">
            <div
              class="video"
              v-bind:style="{backgroundImage:'url('+require('../../assets/upload/main/course2.jpg')+')'}"
            ></div>
            <span>隐藏的儿童安全锁</span>
          </li>
          <li class="buttom">
            <div
              class="video"
              v-bind:style="{backgroundImage:'url('+require('../../assets/upload/main/course2.jpg')+')'}"
            ></div>
            <span>飞行的重物</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:"Security",
  data(){
    return{

    }
  }
};
</script>

<style>
.topimg {
  height: 150px;
  display: block;
  background-size: cover;
   overflow: hidden;
}
.background {
  display: block;
  background-color: yellow;
  height: 100%;
  display: flex;
    overflow: hidden;
}
.video {
  display: block;
  width: 130px;
  height: 130px;
    overflow: hidden;
}
.top {
  display: block;
  /* display: flex; */
  margin-top: 45px;
  margin-left: 10%;
  float: left;
    overflow: hidden;
  font-size: 10px;
}
/* .top span {
} */
/* .style {
  float: left;
} */
.center {
  margin-top: 45px;
  margin-left: 10%;
 float: left;
  overflow: hidden;
  font-size: 10px;
}
.buttom {
   /* display: flex; */
  margin-top: 50px;
  margin-left: 10%;
 float: left;
  font-size: 10px;
  overflow: hidden;
    /* justify-content: space-between; */
}
</style>

