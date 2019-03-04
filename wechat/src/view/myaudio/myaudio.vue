<template>
  <div>
    <div class="safetyaudio">
      <img src="@/assets/safety-audio-banner.jpg">
    </div>
    <div
      class="audiobackground"
      v-bind:style="{backgroundImage:'url('+require('../../assets/other/safety-audio-bk.jpg')+')'}"
    >
      <Row type="flex" justify="start" class="code-row-bg">
        <i-col span="12" v-for="item in audios" v-bind:key="item.audioID">
          <section class="progressBar">
            <div class="progressBac"></div>
            <div class="speed" id="speed"></div>
            <div class="drag" id="drag"></div>
          </section>
          <div id="time">
            <div class="tiemDetail">
              <span class="currentTime" id="currentTime">00:00</span>
              <span class="allTime" id="allTime">00:00</span>
            </div>
          </div>
          <div class="rowyemianplay">
            <img  id="control"  src="@/assets/icon/play.png">
          </div>
          <div class="backgroundcolors"></div>
          <div class="assets">
            <img :src="item.image">
            <p>{{item.subtitle}}</p>
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
  name: "myaudio",
  data() {
    return {
      audios: []
    };
  },
  created: function() {
    var data = [
      {
        audioID: 1,
        title: "听欧颂爷爷讲故事",
        subtitle: "“致命”的安全带",
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
      {
        audioID: 4,
        title: "听欧颂爷爷讲故事",
        subtitle: "不可以将头、手伸出窗外",
        url: "audios/3.mp3",
        image: "audios/3.jpg",
        intro: "0",
        size: 7,
        duration: "02:50",
        sort: 3,
        createtime: "2018-07-25T00:24:13+08:00",
        updatetime: "2018-10-10T17:37:02+08:00"
      },
      {
        audioID: 5,
        title: "听欧颂爷爷讲故事",
        subtitle: "不要将孩子独自留在车内",
        url: "audios/4.mp3",
        image: "audios/4.jpg",
        intro: "0",
        size: 6,
        duration: "02:24",
        sort: 4,
        createtime: "2018-07-25T00:24:13+08:00",
        updatetime: "2018-10-10T17:37:02+08:00"
      },
      {
        audioID: 6,
        title: "听欧颂爷爷讲故事",
        subtitle: "隐藏的儿童安全锁",
        url: "audios/5.mp3",
        image: "audios/5.jpg",
        intro: "0",
        size: 6,
        duration: "02:21",
        sort: 5,
        createtime: "2018-07-25T00:24:13+08:00",
        updatetime: "2018-10-10T17:37:02+08:00"
      },
      {
        audioID: 8,
        title: "听欧颂爷爷讲故事",
        subtitle: "飞行的重物",
        url: "audios/6.mp3",
        image: "audios/6.jpg",
        intro: "0",
        size: 7,
        duration: "02:58",
        sort: 6,
        createtime: "2018-07-25T00:24:13+08:00",
        updatetime: "2018-10-10T17:37:02+08:00"
      },
      {
        audioID: 3,
        title: "听欧颂爷爷讲故事",
        subtitle: "不要将孩子抱在怀里乘车",
        url: "audios/7.mp3",
        image: "audios/7.jpg",
        intro: "0",
        size: 3,
        duration: "01:07",
        sort: 7,
        createtime: "2018-07-25T00:24:13+08:00",
        updatetime: "2018-10-10T17:37:02+08:00"
      },
      {
        audioID: 7,
        title: "听欧颂爷爷讲故事",
        subtitle: "可怕的汽车盲区",
        url: "audios/8.mp3",
        image: "audios/8.jpg",
        intro: "0",
        size: 8,
        duration: "03:21",
        sort: 8,
        createtime: "2018-07-25T00:24:13+08:00",
        updatetime: "2018-10-10T17:37:02+08:00"
      }
    ];
    for (let item of data) {
      item.image = mediaUrl + "/" + item.image;
      item.url = mediaUrl + "/" + item.url;
      item.playtime = "00:00";
      item.percent = 0;
      item.statusImage = "";
    }
    this.audios = data;
  }
};
</script>

<style>
/*进度条样式*/
.code-row-bg{
  overflow: hidden;
}
.progressBar {
  width: 100%;
  height: 10px;
  margin: 30px auto 30px auto;
  position: absolute;
  left: 0;
  bottom: 35px;
  top: 150px;
  margin-left: 10px;
}
.progressBar div {
  position: absolute;
}
.progressBar .progressBac {
  width: 50%;
  height: 3px;
  margin-left: 30px;
  left: 0;
  top: 0;
  background: #e4e4e4;
}
.progressBar .speed {
  width: 100%;
  height: 10px;
  left: -250%;
  background: #f06060;
}
.progressBar .drag {
  width: 5px;
  height: 5px;
  left: 20px;
  top: -5px;
  background: skyblue;
  opacity: 0.8;
  display: none;
  border-radius: 50px;
  -webkit-box-shadow: #fff 0 0 5px;
  box-shadow: #fff 0 0 5px;
}
#time {
    width: 100%;
    height: 20px;
    position: absolute;
    left: 0;
    bottom: 30px;
    color: #888;
    top: 172px;
}
.tiemDetail {
     position: absolute;
    right: 10px;
    width: 100%;
    top: 0;
}
.currentTime{
      float: left;
    margin-left: 30px;
}
.allTime{
  float: right;
    margin-right: 10px;
}
.audiobackground {
  margin-top: -5px;
  height: 900px;
}

.assets {
  width: 150px;
  height: 150px;
  margin-left: 20px;
  margin-top: 40px;
}
.backgroundcolors {
  position: absolute;
  display: block;
  width: 150px;
  height: 150px;
  margin-left: 20px;
  margin-top: 40px;
  background-color: rgba(0, 0, 0, 0.4);
}
.asset {
  width: 150px;
  height: 150px;
  margin-left: 10px;
  margin-top: 40px;
}
.color1 {
  position: absolute;
  display: block;
  width: 150px;
  height: 150px;
  margin-left: 10px;
  margin-top: 40px;
  background-color: rgba(0, 0, 0, 0.4);
}
.rowyemianplay img {
  position: absolute;
  width: 30px;
  height: 30px;
  margin-left: 75px;
  margin-top: 100px;
  display: block;
}
</style>

