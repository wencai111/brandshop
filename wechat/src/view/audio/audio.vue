<template>
  <div>
    <div>
      <img src="@/assets/safety-audio-banner.jpg">
    </div>
    <div class="background"
      v-bind:style="{backgroundImage:'url('+require('../../assets/other/safety-audio-bk.jpg')+')'}"
    >
     <Row type="flex" justify="start" class="code-row-bg">
        <i-col span="12" v-for="item in audios" v-bind:key="item.audioID">
          <div class="rowyemianplay">
            <img  src="@/assets/icon/play.png">
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
import config from '@/config'
const {mediaUrl } = config
import Wxcrow from "@/components/wxc-row/wxc-row.vue";
export default {
  name: "RowYemian",
  data() {
    return {
      audios: []
    };
  },
  components: {
    Wxcrow
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
      item.image =mediaUrl + "/" + item.image;
      item.url = mediaUrl + "/" + item.url;
      item.playtime = "00:00";
      item.percent = 0;
      item.statusImage =  ""
    }
    this.audios = data;
  }
};
</script>

<style>
.background {
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

