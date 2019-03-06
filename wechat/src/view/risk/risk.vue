<template>
  <div>
    <div class="banner">
      <img src="@/assets/safety-video-banner.jpg">
    </div>
    <div class="safetys" v-for="item in audios" v-bind:key="item.audioID">
      <router-link to="display">
        <div class="riskvideos">
          <img src="@/assets/videos/1.jpg">
          <div class="riskbackground">
            <div class="riskplay">
              <img src="@/assets/other/play.png">
            </div>
          </div>
        </div>
      </router-link>
      <div class="riskfont">
        <p>{{item.subtitle}}</p>
        <nav class="border"></nav>
        <div class="anquan">
          <span>{{item.spack}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import config from "@/config";
const { mediaUrl } = config;
export default {
  name: "Risk",
  code: 0,
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
        subtitle: "第一讲：危险的”的安全带",
        spack:
          "车载安全是针对成年人所设计的汽车约束系统。儿童若直接使用车载安全带，一旦发生事故，将对儿童造成致命伤害。",
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
        audioID: 1,
        title: "听欧颂爷爷讲故事",
        subtitle: "第二讲：“致命”的安全气囊",
        spack:
          "如果我们在车内留心观察，一定不难发现一个“禁止让乘坐安全座椅的儿童坐在有安全气囊的座位”的图标。儿童是否在任何情况下都不可以坐在有安全气囊的座位上？如果可以。什么情况下可以？",
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
        audioID: 1,
        title: "听欧颂爷爷讲故事",
        subtitle: "第三讲：孩子需要专属保护",
        spack:
          "当成年人所依赖的安全以及安全气囊都无法保证孩子安全的时候，我们应该给孩子怎么样的专属保护",
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
        audioID: 1,
        title: "听欧颂爷爷讲故事",
        subtitle: "第四讲：不要将孩子抱在怀里乘车",
        spack:
          "许多家长误以为，将孩子抱在怀里乘车是保护孩子的最佳方式。事实上，家长的怀抱并非永远是孩子最安全的港湾。",
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
        audioID: 1,
        title: "听欧颂爷爷讲故事",
        subtitle: "第五讲：可怕的汽车盲区",
        spack:
          "据调查数据显示，35%的小型汽车意外事故是由汽车盲区直接造成。我们该如何避免孩子免遭汽车盲区的毒手？",
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
        audioID: 1,
        title: "听欧颂爷爷讲故事",
        subtitle: "第六讲：不要在车里放置多余物品",
        spack:
          "在车内放置一些生活物品或者污染物或者携带宠物乘车是一件在大多数人看来再正常不过的事情。但你是否知道，汽车在发生意外事故时，这些看起来微不足道的 生活物品，也有可能给孩子带来致命伤害？",
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
        audioID: 1,
        title: "听欧颂爷爷讲故事",
        subtitle: "第七讲：不要将孩子独自留在车内",
        spack:
          "随着近年来越来越多起事故的曝光，许多家长已经知道，将孩子独自留在车内是十分危险的做法。这样做为何危险？孩子被困车内时又该如何自救？",
        url: "audios/1.mp3",
        image: "audios/1.jpg",
        intro: "0",
        size: 4,
        duration: "01:48",
        sort: 1,
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
.banner img {
  width: 100%;
  height: auto;
}
.safetys {
  height: 350px;
  margin-top: -5px;
  width: 100%;
}
.riskbackground .riskplay img {
  position: absolute;
  width: 30px;
  height: 30px;
}

.safetys .riskvideos {
  position: absolute;
}
.riskplay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% - 28px);
  display: flex;
  align-items: center;
  justify-content: center;
}
.riskvideos img {
  position: relative;
  width: 100%;
  height: auto;
}
.riskbackground {
  top: 0;
  left: 0;
  width: 100%;
  height: 98%;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
}
.riskfont {
  position: absolute;
  width: 100%;
  margin-top: 55%;
  height: auto;
}
.border {
  border: 0.5px solid rgb(112, 111, 111);
  margin-left: 10px;
  margin: 10px;
}
.riskfont p {
  font-size: 14px;
  font-weight: bold;
  margin: 10px;
}
.anquan {
  margin: 10px;
  height: 60px;
  position: relative;
  width: 95%;
}
.anquan span {
  font-size: 6px;
  margin-top: 20px;
  height: 20px;
}
</style>


