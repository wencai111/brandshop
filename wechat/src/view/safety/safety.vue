<template>
  <div class="home">
    <div>
      <img src="@/resource/image/lecture/safety-index-banner.jpg">
    </div>
    <span class="video">安全视频</span>
    <div class="more">点击更多</div>
    <nav class="border"></nav>
    <div></div>
    <span class="video">安全音频</span>
    <div class="more">点击更多</div>
    <nav class="border"></nav>
    <div>
      <img src>
      <span>"致命"的安全带</span>
    </div>
    <div>
      <img src>
      
      <span>"致命"的安全带</span>
    </div>
    <span class="video">安全文章</span>
    <div class="more">点击更多</div>
    <nav class="border"></nav>
    <div class="srs">
      <div class="srs1">
        <img src="@/assets/other/2.png">
        <div class="text1">
          <span class="srs-text">安全气囊对孩子的危害</span>
          <br>
          <span class="srs-text2">本该护人安全的安全气囊，何以反倒成了“杀人凶器”？</span>
        </div>
      </div>
      <div class="safe">
        <img src="@/assets/other/2.png">
        <div class="text2">
          <span class="srs-text">儿童安全锁的作用</span>
          <br>
          <span class="srs-text2">打开它给孩子多一分安全。</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Safety",
  data() {
    return {};
  }
};
</script>
<style>
.home {
  width: 100%;
}
.video {
  font-size: 15px;
  color: rgb(63, 63, 212);
  font-weight: bold;
}
.more {
  font-size: 8px;
  float: right;
  margin-right: 5px;
}
.border {
  border: 0.5px solid rgb(150, 150, 151);
  width: 100%;
}
.srs {
  width: 400px;
  margin: 10px;
  overflow: hidden;
}
.srs1 img {
  float: left;
  width: 70%;
  height: 100px;
  overflow: hidden;
}
.safe {
  margin-left: 10%;
  width: 400px;
  margin: 10px;
  /* overflow:hidden; */
}
.safe img {
  float: right;
  width: 70%;
  height: 100px;
  margin-top: -100px;
  margin-right: -80px;
  overflow: hidden;
}
.text1 {
  width: 160px;
  height: 80px;
}
.text2 {
  width: 150px;
  height: 80px;
  margin-left: 50%;
}
.srs-text {
  font-weight: bold;
  font-size: 14px;
}
.srs-text2 {
  font-size: 6px;
  color: rgb(90, 89, 87);
}
</style>

