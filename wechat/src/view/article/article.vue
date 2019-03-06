<template>
  <div>
    <div class="articde">
      <img src="@/assets/safety-article-banner.jpg">
    </div>
    <div
      class="articlebackground"
      v-bind:style="{backgroundImage:'url('+require('../../assets/other/safety-audio-bk.jpg')+')'}"
    >
      <Row>
        <i-col span="12" v-for="item in article" v-bind:key="item.audioID">
          <div class="safetyarticde">
            <div class="articles">
              <img :src="item.image">
              <div class="articlefont">
                <p>{{item.title}}</p>
                <span>{{item.subtitle}}</span>
              </div>
            </div>
          </div>
        </i-col>
      </Row>
    </div>
  </div>
</template>
<script>
import config from "@/config";
const { mediaUrl } = config;
export default {
  name: "Article",
  data() {
    return {
      article: []
    };
  },
  created: function() {
    var data = [
      {
        audioID: 1,
        content: "2018-7-25TOO:26:38+08:00",
        createtime: "",
        updatetime: "2018-10-10T17:34+08:00",
        sort: "1",
        title: "安全气囊对孩子的危害",
        subtitle: "本该护人的安全气囊，何以反倒成了“杀人凶器”？",
        url: "",
        image: "articles/1.jpg"
      },
      {
        audioID: 2,
        content: "",
        createtime: "2018-07-25TOO:48:04+08:00",
        updatetime: "2018-7-52T17:34+08:00",
        sort: "2",
        title: "儿童安全锁的作用",
        subtitle: "打开它，给孩子多一份安全",
        url: "",
        image: "articles/2.jpg"
      },
      {
        audioID: 3,
        content: "",
        createtime: "2018-07-25TOO:48:04+08:00",
        updatetime: "2018-10-10T17:34:58+08:00",
        sort: "3",
        title: "危险的汽车盲区",
        subtitle: "为什么屡屡有孩子丧生于盲区之手？",
        url: "",
        image: "articles/3.jpg"
      },
      {
        audioID: 4,
        content: "2018-7-25TOO:26:38+08:00",
        createtime: "",
        updatetime: "2018-07-25TOO48:04+08:00",
        sort: "4",
        title: "勿将孩子独留车上",
        subtitle:
          "带上孩子并没有你想象的那么麻烦，不带孩子可能会留下永远的遗憾。",
        url: "",
        image: "articles/4.jpg"
      }
    ];
    for (let item of data) {
      item.image = mediaUrl + "/" + item.image;
      item.url = mediaUrl + "/" + item.url;
      item.updatetime = "00:00";
    }
    this.article = data;
  }
};
</script>
<style>
.articde {
  width: 100%;
  height: auto;
}
.articde img {
  width: 100%;
}
.articlebackground {
  position: relative;
  margin-top: -5px;
  height: 750px;
  width: 100%;
}
.safetyarticde {
  width: 100%;
  height: 180px;
  margin-top: 20px;
  position: relative;
}
.safetyarticde .articles {
  position: relative;
  width: 100%;
  height: auto;
}
.safetyarticde .articles img {
  margin-left: 10px;
  width: 80%;
  height: 100%;
}
.safetyarticde .articles .articlefont {
  width: 80%;
  height: auto;
  margin-left: 10px;
}
.safetyarticde .articles .articlefont p {
  font-weight: bold;
  font-size: 12px;
}
.safetyarticde .articles .articlefont span {
  width: 80%;
  height: auto;
  overflow: hidden;
}
</style>
