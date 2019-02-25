<template>
  <div>
    <div>
      <img src="@/assets/safety-article-banner.jpg">
    </div>
    <div
      class="background"
      v-bind:style="{backgroundImage:'url('+require('../../assets/other/safety-audio-bk.jpg')+')'}"
    >
      <div>
        <div class="articles" v-for="item in article" v-bind:key="item.audioID">
          <img :src="item.image">
          <!-- <img src="@/assets/articles/1.jpg"> -->
          <p>{{item.title}}}</p>
          <span>{{item.subtitle}}}</span>
        </div>
        <div class="articles">
          <img src="@/assets/articles/2.jpg">
          <p>儿童安全锁的作用</p>
          <span>打开它，给孩子多一份安全</span>
        </div>
      </div>
      <div class="article">
        <div class="articles1">
          <img src="@/assets/articles/3.jpg">
          <p>危险的汽车盲区</p>
          <span>为什么屡屡有孩子丧生于盲区之手？</span>
        </div>
        <div class="articles1">
          <img src="@/assets/articles/4.jpg">
          <p>勿将孩子独留车上</p>
          <span>带上孩子并没有你想象的那么麻烦，不带孩子可能会留下永远的遗憾。</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
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
        image: "@/assets/articles/1.jpg"
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
        image: ""
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
        image: ""
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
        image: ""
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
.background {
  height: 600px;
  margin-top: -5px;
}

.articles img {
  width: 150px;
  margin: 5%;
  float: left;
}

.articles1 img {
  width: 150px;
  margin-top: 10px;
  margin: 5%;
  float: left;
}
.articles p {
  float: left;
  font-weight: bold;
  margin-left: -170px;
  margin-top: 130px;
}
.articles span {
  float: left;
  display: flex;
  margin-left: -170px;
  margin-top: 150px;
  width: 160px;
  height: 40px;
}
.articles1 p {
  float: left;
  font-weight: bold;
  margin-left: -170px;
  margin-top: 140px;
}
.articles1 span {
  float: left;
  margin-left: -170px;
  margin-top: 160px;
  width: 160px;
  height: 40px;
}
</style>
