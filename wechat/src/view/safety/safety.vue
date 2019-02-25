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
        <div class="audios" v-for="item in audios" v-bind:key="item.audioID">
          <div class="plays">
            <img src="@/assets/other/play.png">
          </div>
          <div class="black"></div>
          <img class="danger" :src="item.image">
          <p>{{item.subtitle}}</p>
        </div>
        <div class="audios1" v-for="item in audios1" v-bind:key="item.audioID1">
          <p>{{item.subtitle}}</p>
          <span>{{item.span}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import config from '@/config'
const {mediaUrl } = config
import Wxcrow from "@/components/wxc-row/wxc-row.vue";
export default {
  name: "Safety",
  data() {
    return {
       audios:[],
        audios1:[],
    };
  },
   created: function() {
    var data = [
      {
        audioID: 1,
        title: "听欧颂爷爷讲故事",
        subtitle: "危险的”的安全带",
        url: "audios/1.mp3",
        image: "audios/1.jpg",
        intro: "0",
        size: 4,
        duration: "01:48",
        sort: 1,
        createtime: "2018-07-25T00:24:13+08:00",
        updatetime: "2018-10-10T17:37:02+08:00"
      },
      {
        audioID: 2,
        title: "听欧颂爷爷讲故事",
        subtitle: "“致命”的安全气囊",
        url: "audios/2.mp3",
        image: "audios/2.jpg",
        intro: "0",
        size: 5,
        duration: "02:02",
        sort: 2,
        createtime: "2018-07-25T00:24:13+08:00",
        updatetime: "2018-10-10T17:37:02+08:00"
      },
          {audioID1: 1,
        title: "听欧颂爷爷讲故事",
        subtitle: "安全气囊对孩子的危害",
        span:"本该护人安全的安全气囊，何以反倒成了“杀人凶器”？",
        image: "articles/1.jpg",
        intro: "0",
        size: 4,
        duration: "01:48",
        sort: 1,
        createtime: "2018-07-25T00:24:13+08:00",
        updatetime: "2018-10-10T17:37:02+08:00"
      },
      {
    audioID1: 1,
        title: "听欧颂爷爷讲故事",
        subtitle: "儿童安全锁的作用",
        span:"本该护人安全的安全气囊，何以反倒成了“杀人凶器”？",
        image: "articles/2.jpg",
        intro: "0",
        size: 30,
        duration: "01:48",
        sort: 1,
        createtime: "2018-07-25T00:24:13+08:00",
        updatetime: "2018-10-10T17:37:02+08:00"
      }
    ];
      for (let item of data) {
      item.image =mediaUrl + "/" + item.image;
      item.url = mediaUrl + "/" + item.url;
      item.playtime = "00:00";
      item.percent = 0;
      item.statusImage =  ""
    }
    this.audios = data;
}
}
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
  width: 110px;
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
  margin-left: 18%;
  margin-top: 18%;
  width: 20px;
  /* height: 20px; */
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
  margin-left: 56%;
  margin-top: 43%;
  width: 20px;
  display: block;
}
</style>

