<template>
  <div class="audios">
    <div class="safety-audio-banner">
      <img src="https://cdn.osann-china.com/images/safety-audio-banner.jpg">
    </div>
    <div class="audioView">
      <Row :gutter="16">
        <i-col span="12" v-for="item in audios" v-bind:key="item.audioID">
          <div class="audioContianer">
            <div class="audioplayer">
              <img :src="item.image" class="posterimage">
              <div class="palycontrols">
                <div class="playBtnBlock">
                  <img src="@/assets/icon/play.png">
                </div>
                <div class="contrlBar">
                  <span>00:00</span>
                  <div class="timeBar">
                    <div class="progress"></div>
                  </div>
                  <span>-05:08</span>
                </div>
              </div>
            </div>
            <div class="txtIntro">
              {{item.subtitle}}
            </div>
          </div>
        </i-col>
      </Row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Audios",
  data() {
    return {
      audios: [],
      safetyAudioBanner:
        "https://cdn.osann-china.com" + "/images/safety-audio-banner.jpg"
    };
  },
  created: function() {
    var audios = [
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
    audios.forEach(function(a) {
      a.image = "https://cdn.osann-china.com" + "/" + a.image;
      a.url = "https://cdn.osann-china.com" + "/" + a.url;
      a.playtime = "00:00";
      a.percent = 0;
      a.statusImage = "../../images/play.png";
    });
    this.audios = audios;
  }
};
</script>

<style>
.audios {
  background: #f9e7ad;
  position: relative;
  overflow-y: auto;
  background-color: #f9e7ad;
  min-height: 100vh;
  max-width: 600px;
  margin: auto;
}

.safety-audio-banner {
  width: 100%;
  height: auto;
  position: relative;
}

.safety-audio-banner img {
  width: 100%;
  height: auto;
}

.audioView {
  position: relative;
  margin: auto;
}

.audioContianer{
  position: relative;
  margin: auto;
}

.audioContianer .audioplayer {
  background-color: #f9e7ad;
  position: relative;
  margin: 0.5rem;
}

.audioContianer .audioplayer .posterimage {
  width: 100%;
  height: auto;
  position: relative;
}

.audioContianer .audioplayer .palycontrols {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}

.audioContianer .audioplayer .palycontrols .playBtnBlock {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% - 28px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.audioContianer .audioplayer .palycontrols .playBtnBlock > img {
  transform: translateX(0) translateZ(0px) scale(1);
  opacity: 1;
  margin-top: 20px;
  width: 30px;
  transition: 0.3s;
}

.audioContianer .audioplayer .palycontrols .contrlBar {
  position: absolute;
  bottom: 0;
  display: flex;
  width: calc(100% - 8px);
  left: 0;
  align-items: center;
  justify-content: space-between;
  padding: 0px 4px;
}

.audioContianer .audioplayer .palycontrols .contrlBar > span {
  color: #fff;
  font-size: 0.7rem;
}
 
.audioContianer .audioplayer .palycontrols .contrlBar .timeBar {
  width: calc(100% - 20px);
  height: 3px;
  background-color: #ffffff6e;
  margin: 0px 2px;
  position: relative;
  border-radius: 5px;
}

.audioContianer .audioplayer .palycontrols .contrlBar .timeBar .progress {
  position: absolute;
  width: 0%;
  top: 0;
  height: 100%;
  background-color: #60a9f0;
}

.audioContianer .txtIntro{
  position: relative;
  color:#817E75;
  margin: 0.5rem;
  margin-top:0px;
}
</style>


