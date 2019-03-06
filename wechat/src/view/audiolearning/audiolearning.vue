<template>
  <div>
    <Row>
      <i-col span="24">
        <div class="Musicpictures">
          <img src="@/assets/other/7.png">
        </div>
        <div class="timeline">00:00/{{}}</div>
        <div class="songname">{{name}}</div>
        <div class="progressLenght">
          <div class="progress"></div>
          <div class="progressBar"></div>
        </div>
        <div class="music play" @click="mymusicplay" v-if="music =='play'">
          <img src="@/assets/other/play.png">
        </div>
        <div class="music pause" @click="mymusicpause" v-if="music =='pause'">
          <img src="@/assets/other/pause.png">
        </div>
      </i-col>
    </Row>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      music: "play",
      name: "汽车"
    };
  },
  methods: {
    mymusicplay() {
      this.music = "pause";
    },
    mymusicpause() {
      this.music = "play";
    }
  }
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


