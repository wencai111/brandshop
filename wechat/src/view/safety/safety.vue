<template>
  <div class="home">
    <div
      class="safety1"
      v-bind:style="{backgroundImage:'url('+require('../../assets/safety-index-banner.jpg')+')'}"
    ></div>
    <div class="safety">
      <div
        class="background"
        v-bind:style="{backgroundImage:'url('+require('../../assets/safety-index-bk.jpg')+')'}"
      >
        <div class="safetys">
          <div class="play">
            <img src="@/assets/other/play.png">
          </div>
          <div class="color"></div>
          <img class="videos" src="@/assets/videos/1.jpg">
        </div>
        <div class="audios">
          <div class="plays">
            <img src="@/assets/other/play.png">
          </div>
          <div class="black"></div>
          <img class="danger" src="@/assets/audios/1.jpg">
          <p>“危险”的安全带</p>
        </div>
        <div class="audios">
          <div class="plays">
            <img src="@/assets/other/play.png">
          </div>
          <div class="black"></div>
          <img class="danger" src="@/assets/audios/2.jpg">
          <p>“致命”的安全气囊</p>
        </div>
        <div class="audios1">
          <img src="@/assets/articles/1.jpg">
          <p>安全气囊对孩子的危害</p>
          <span>本该护人安全的安全气囊，何以反倒成了“杀人凶器”？</span>
        </div>
        <div class="audios1">
          <img src="@/assets/articles/2.jpg">
          <p>儿童安全锁的作用</p>
          <span>打开它，给孩子多一份安全</span>
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
  height: 100;
  position: relative;
}
.safety1 {
  background-size: cover;
  width: 100%;
  height: 193px;
  position: relative;
}
.danger {
  width: 150px;
  height: 150px;
}
.audios {
  float: left;
  margin-top: 35%;
  margin-left: 6%;
}
.audios1 {
  margin-top: 95%;
}
.audios1 img {
  width: 150px;
  margin-top: 10px;
  margin: 5%;
  float: left;
}
.audios1 p {
  float: left;
  font-weight: bold;
  margin-left: -170px;
  margin-top: 130px;
}
.audios1 span {
  float: left;
  display: flex;
  margin-left: -170px;
  margin-top: 150px;
  width: 160px;
  height: 40px;
}
.black {
  position: absolute;
  display: block;
  width: 150px;
  height: 150px;
  background-color: rgba(0, 0, 0, 0.4);
}
.plays {
  width: 100%;
  height: 100%;
}
.plays img {
  position: absolute;
  margin-left: 13%;
  margin-top: 13%;
  width: 40px;
  height: 40px;
  display: block;
}
.safety {
  margin-top: -5px;
  width: 100%;
  height: 100px;
}
.background {
  background-size: cover;
  width: 100%;
  height: 800px;
  position: relative;
}
.safetys {
  margin-top: -5px;
  width: 100%;
}
.videos {
  width: 72%;
  height: 70%;
  margin-top: 25%;
  margin-left: 22%;
}
.color {
  position: absolute;
  display: block;
  width: 72%;
  height: 19%;
  margin-top: 25%;
  margin-left: 22%;
  background-color: rgba(0, 0, 0, 0.4);
}
.play img {
  position: absolute;
  margin-left: 55%;
  margin-top: 40%;
  width: 40px;
  height: 40px;
  display: block;
}
</style>

