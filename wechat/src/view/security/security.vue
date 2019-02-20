<template>
  <div>
    <div>
      <img src="@/assets/safety-audio-banner.jpg">
    </div>
    <div
      class="background"
      v-bind:style="{backgroundImage:'url('+require('../../assets/other/safety-audio-bk.jpg')+')'}"
    >
      <div class="audios">
        <div class="audio">
          <img src="@/assets/audios/1.jpg">
          <p>“危险”的安全带</p>
        </div>
        <div class="audio">
          <img src="@/assets/audios/2.jpg">
          <p>“致命”的安全气囊</p>
        </div>
        <div class="audio1s">
          <div class="audio1">
            <img src="@/assets/audios/3.jpg">
            <p>不可以将头、手伸出窗外</p>
          </div>
          <div class="audio1">
            <img src="@/assets/audios/5.jpg">
            <p>隐蔽的儿童安全锁</p>
          </div>
        </div>
        <div class="audio2s">
          <div class="audio2">
            <img src="@/assets/audios/6.jpg">
            <p>飞行的重物</p>
          </div>
          <div class="audio2">
            <img src="@/assets/audios/7.jpg">
            <p>不能将孩子抱在怀里乘车</p>
          </div>
        </div>
        <div class="audio3s">
          <div class="audio3">
            <img src="@/assets/audios/8.jpg">
            <p>可怕的汽车盲区</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Security",
  data() {
    return {};
  }
};
</script>

<style>
.background {
  margin-top: -5px;
  height: 900px;
}
.audios {
  width: 500px;
  height: 200px;
  margin-left: 4%;
}
.audios img {
  width: 160px;
  margin-left: 4%;
}
.audio p {
  float: left;
  margin-left: -150px;
  margin-top: 190px;
}
.audio img {
  float: left;
  margin-top: 20px;
}
.audio1s {
  width: 500px;
  height: 200px;
  float: left;
}
/* .audio1{
 width: 500px;
  height: 200px;
    } */
.audio1 img {
  float: left;
  margin-top: 20px;
}
.audio1 p {
  float: left;
  margin-left: -150px;
  margin-top: 190px;
}
.audio2s {
  width: 500px;
  height: 200px;
  float: left;
}
.audio2 img {
  float: left;
  margin-top: 20px;
}
.audio2 p {
  float: left;
  margin-left: -150px;
  margin-top: 190px;
}
.audio3s {
  width: 500px;
  height: 200px;
  float: left;
}
.audio3 img {
  float: left;
  margin-top: 20px;
}
.audio3 p {
  float: left;
  margin-left: -150px;
  margin-top: 190px;
}
</style>

