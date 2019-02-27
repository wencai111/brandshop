<template>
  <div class="palyer">
    <img class="posterimage" src="posterPath">
    <div class="palycontrols">
      <img class="playstatus" src="statusImagePath">
      <span class="txtTime">{{playtime}}</span>
      <span class="txtDuartion">{{duartion}}</span>
    </div>
    <text class="txtIntro">{{intro}}</text>
  </div>
</template>

<script>
export default {
    name:"AudioPlayer",
    data(){
        return {};
    },
     props: {
        posterPath: {
            type: String,
            default: "dfd"
        },
        statusImagePath: {
            type: String,
            default: "../../images/play.png"
        },
        playtime: {
            type: String,
            default: "00.00"
        },
        percent: {
            type: String,
            default: "0"
        },
        duartion: {
            type: String,
            default: "59:59"
        },
        intro: {
            type: String,
            default: "听欧颂爷爷讲故事"
        }
    }
}
</script>

<style>
.palyer {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 320rpx;
  height: 350rpx;
}

.posterimage {
  width: 320rpx;
  height: 320rpx;
  position: absolute;
  left: 0rpx;
  top: 0rpx;
}

.palycontrols {
  width: 320rpx;
  height: 320rpx;
  position: absolute;
  left: 0rpx;
  top: 0rpx;
  background-color: rgba(0, 0, 0, 0.4);
}

.playstatus {
  width: 48rpx;
  height: 48rpx;
  position: absolute;
  left: 136rpx;
  top: 126rpx;
}

.txtTime {
  align-items: center;
  padding-left: 10rpx;
  padding-right: 10rpx;
  font-size: 15rpx;
  color: white;
  position: absolute;
  bottom: 5rpx;
  left: 5rpx;
  width: 50rpx;
  height: 20rpx;
}

.playerProgress {
  width: 200rpx;
  height: 20rpx;
  position: absolute;
  bottom: 6rpx;
  left: 60rpx;
}

.txtDuartion {
  align-items: center;
  padding-left: 10rpx;
  padding-right: 10rpx;
  font-size: 15rpx;
  color: white;
  position: absolute;
  bottom: 5rpx;
  left: 260rpx;
  width: 50rpx;
  height: 20rpx;
}

.txtIntro {
  font-size: 25rpx;
  color: #817e75;
  position: absolute;
  top: 330rpx;
  left: 0rpx;
  width: 300rpx;
  height: 25rpx;
}
</style>





