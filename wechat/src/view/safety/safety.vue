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
          <div class="videos">
            <img src="@/assets/videos/1.jpg">
            <div class="backgroundcolor">
              <div class="safetyplay">
                <img src="@/assets/other/play.png">
              </div>
            </div>
          </div>
        </div>
        <div class="safetyaudios" v-for="item in audios" v-bind:key="item.audioID">
          <div class="plays">
            <img src="@/assets/other/play.png">
          </div>
          <div class="black"></div>
          <img class="danger" :src="item.image">
          <p>{{item.subtitle}}</p>
        </div>
        <div class="Articles" v-for="item in articles" v-bind:key="item.audioID">
          <div class="securityarticles">
            <img class="danger" :src="item.image">
            <div class="articlesfont">
              <p>{{item.title}}</p>
              <span>{{item.subtitle}}</span>
            </div>
          </div>
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
        image: "articles/1.jpg"
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
.Articles {
  float: left;
  margin-top: 20%;
  margin-left: 6%;
}
.securityarticles {
  margin-top: 10%;
}
.articlesfont {
  width: 150px;
  height: auto;
}
.home {
  width: 101%;
  height: 100px;
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
.safetyaudios {
  float: left;
  margin-top: 100%;
  margin-left: 6%;
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
.videos img {
  position: relative;
  width: 92%;
  height: auto;
}
.videos {
  position: absolute;
  margin-top: 25%;
  margin-left: 22%;
}
.backgroundcolor {
  top: 0;
  left: 0;
  width: 92%;
  height: 98%;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
}
.safetyplay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% - 28px);
  display: flex;
  align-items: center;
  justify-content: center;
}
.safetyplay img {
  position: absolute;
  width: 30px;
  height: 30px;
}
.buttomcolor {
  width: 100%;
  height: 110px;
  margin-top: 170%;
  background-color: rgb(40, 153, 245);
}
</style>

