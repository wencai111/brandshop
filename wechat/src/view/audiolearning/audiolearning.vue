<template>
  <div>
    <Row>
      <i-col span="24" v-for="item in audios" v-bind:key="item.audioID">
        <div class="Musicpictures">
          <img src="@/assets/other/7.png">
        </div>
        <div class="timeline">{{currentPlay(item.currentTime)}}/{{item.duration}}</div>
        <div class="songname">{{name}}</div>
        <audio ref="audio" style="display:none"></audio>
        <div class="progressLenght">
          <div class="progress">
            <div class="loader"></div>
          </div>
          <div class="progressBar"></div>
        </div>
        <!-- <div v-on:click="moveprogress(res)"> -->
        <div class="music play" @click="mymusicplay" v-if="music =='play'">
          <img src="@/assets/other/play.png">
        </div>
        <div class="music pause" @click="mymusicpause" v-if="music =='pause'">
          <img src="@/assets/other/pause.png">
        </div>
        <!-- </div> -->
      </i-col>
    </Row>
  </div>
</template>
<script>
import config from "@/config";
const { mediaUrl } = config;
export default {
  name: "Audiolearning",
  data() {
    return {
      audio: {
        el: null
      },
      play:"",
      pause:"",
      audios: {},
      music: "play",
      name: "汽车"
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
      }
    ];
    for (let item of audios) {
      item.image = mediaUrl + "/" + item.image;
      item.url = mediaUrl + "/" + item.url;
    }
    this.audios = audios;
  },
  mounted: function() {
    debugger;

  },
  //改变播放状态
  methods: {
    mymusicplay() {
      debugger;
      this.music = "pause";
      this.$refs.audio.play();
    },
    mymusicpause() {
      this.music = "play";
 
      this.$refs.audio.pause();
    },
    currentPlay(time) {
      let min = Math.floor(time / 60);
      let sec = Math.floor(time % 60);
      return this.zeroFormater(min) + ":" + this.zeroFormater(sec);
    },
    zeroFormater(num) {
      if (num == 0) {
        return "00";
      } else if (num < 10) {
        return "0" + num;
      } else {
        return num;
      }
    }
  }
  //
  //   mymusicplay() {
  //   this.$refs.musics.play();
  //   this.plays = false;
  //   this.pause = true;
  // },
  // mymusicpause() {
  //   this.pause = false;
  //   this.plays = true;
  //   this.$refs.musics.pause();
  // }
  // }
};
</script>
<style>
.timeline {
  width: 100%;
  height: auto;
  margin-top: 30px;
  text-align-last: right;
  position: absolute;
  margin-right: 30px;
}
.progressLenght .progressBar {
  position: absolute;
  background-color: red;
  width: 20px;
  top: -1%;
  height: 20px;
  margin-left: 50px;
  border-radius: 50%;
}
.songname {
  margin-left: 90px;
  margin-top: 25px;
  position: absolute;
}
.progressLenght {
  width: 100%;
  height: 20px;
  margin-left: 30px;
  margin-top: 50px;
  position: absolute;
}
.progressLenght .progress {
  height: 5px;
  width: 70%;
  margin-left: 50px;
  top: 40%;
  position: relative;
  background-color: darkseagreen;
}
.progress .loader {
  height: 5px;
  width: 100%;
  left: 0%;
  top: 0%;
  position: absolute;
  background-color: dimgrey;
}
.Musicpictures {
  width: 100px;
  height: 100px;
  position: absolute;
}
.Musicpictures img {
  width: 100%;
  height: 100%;
}
.music img {
  left: 50%;
  width: 30px;
  height: auto;
  top: 90px;
  position: absolute;
}
</style>


