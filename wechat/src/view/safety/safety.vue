<template>
  <div class="home">
    <div
      class="safety1"
      v-bind:style="{backgroundImage:'url('+require('../../assets/safety-index-banner.jpg')+')'}"
    ></div>
    <div class="safety">
      <div
        class="safetybackground"
        v-bind:style="{backgroundImage:'url('+require('../../assets/safety-index-bk.jpg')+')'}"
      >
        <div class="safetys">
          <div @click="myvideo" class="Security myvideo"></div>
          <div @click="myaudio" class="Security myaudio"></div>
          <div @click="myarticles" class="Security myarticles"></div>
          <div class="safetyplay">
            <img src="@/assets/other/play.png">
          </div>
          <div class="backgroundcolor"></div>
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
        <div class="audios1" v-for="item in articles" v-bind:key="item.audioID">
          <img class="danger" :src="item.image">
          <p>{{item.title}}</p>
          <span>{{item.subtitle}}</span>
        </div>
      </div>
    </div>
    <div class="buttomcolor"></div>
  </div>
</template>
<script>
import config from "@/config";
const { mediaUrl } = config;
export default {
  name: "Safety",
  data() {
    return {
      audios: [],
      articles: []
    };
  },
  mounted: function() {
    var data = [
      {
        audioID: 1,
        title: "听欧颂爷爷讲故事",
        subtitle: "致命”的安全带",
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
        subtitle: "致命”的安全气囊",
        image: "audios/2.jpg",
        intro: "0",
        size: 30,
        duration: "01:48",
        sort: 2,
        createtime: "2018-07-25T00:24:13+08:00",
        updatetime: "2018-10-10T17:37:02+08:00"
      }
    ];
    var articless = [
      {
        audioID: 1,
        content: "",
        createtime: "2018-07-25-TOO:26:38+08:00",
        sort: "",
        title: "安全气囊对孩子的危害",
        subtitle: "本该护人的安全气囊，何以反倒成了“杀人凶器”？",
        url: "",
         image: "articles/1.jpg",
      },
      {
        audioID: 2,
        content: "",
        title: "儿童安全锁的作用",
        subtitle: "打开它，给孩子多一份安全",
         image: "articles/2.jpg",
        sort: 2,
        createtime: "2018-07-25T00:24:13+08:00"
      }
    ];
       for (let item of articless) {
      item.image = mediaUrl + "/" + item.image;
      item.url = mediaUrl + "/" + item.url;
      item.playtime = "00:00";
      item.percent = 0;
      item.statusImage = "";
    }
    this.articles = articless;

    for (let item of data) {
      item.image = mediaUrl + "/" + item.image;
      item.url = mediaUrl + "/" + item.url;
      item.playtime = "00:00";
      item.percent = 0;
      item.statusImage = "";
    }
    this.audios = data;
  },

  methods: {
    myvideo() {
      this.$router.push("risk");
    },
    myaudio() {
      this.$router.push("myaudio");
    },
    myarticles() {
      this.$router.push("article");
    }
  }
};
</script>
<style>
.home {
  width: 101%;
  height: 100;
  position: relative;
}
.Security {
  height: 30px;
  width: 80px;
  opacity: 0;
  left: 80%;
  position: absolute;
}
.myvideo {
  margin-top: 40px;
}
.myaudio {
  margin-top: 85%;
}
.myarticles {
  margin-top: 155%;
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
  height: 150px;
  margin-top: 30px;
  float: left;
    margin-left: 5%;
}
.audios1 p {
  float: left;
  font-weight: bold;
  margin-left: -150px;
  margin-top: 190px;
}
.audios1 span {
  float: left;
  display: flex;
  margin-left: -150px;
  margin-top: 210px;
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
  display: block;
}
.safety {
  margin-top: -5px;
  width: 100%;
  height: 100px;
}
.safetybackground {
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
.backgroundcolor {
  position: absolute;
  display: block;
  width: 72%;
  height: 19%;
  margin-top: 25%;
  margin-left: 22%;
  background-color: rgba(0, 0, 0, 0.4);
}
.safetyplay img {
  position: absolute;
  margin-left: 56%;
  margin-top: 43%;
  width: 20px;
  display: block;
}
.buttomcolor{
    width: 100%;
    height: 80px;
    margin-top: 180%;
    background-color: rgb(40, 153, 245);
}
</style>

