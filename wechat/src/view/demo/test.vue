<template>
  <div>
    <AudioPlayer
      v-for="item in audios"
      v-bind:key="item.audioID"
      class="audioplayer"
      v-on:click="demoHandle"
      duartion="item.duration"
      id="item.audioID"
      intro="item.subtitle"
      percent="item.percent"
      playtime="item.playtime"
      posterPath="item.image"
      statusImagePath="item.statusImage"
    ></AudioPlayer>
  </div>
</template>

<script>
import config from "@/config";
const { mediaUrl } = config;
import AudioPlayer from "@/components/audio-player/audio-player.vue";
export default {
  name: "Test",
  data() {
    return {
      audios: [
      {
        audioID: 1,
        content: "2018-7-25TOO:26:38+08:00",
        createtime: "",
        updatetime: "2018-10-10T17:34+08:00",
        sort: "1",
        title: "第一讲 ：“危险”的安全带",
        subtitle:
          "车载安全带是针对成年人所涉及到汽车约束系统。儿童若直接使用车载安全带,一但发生事故，将对儿童造成致命伤害。",
        url: "",
        image: "articles/1.jpg",
        playtime:"00:00",
        percent:"0",
        statusImage:""
      },
      {
        audioID: 2,
        content: "2018-7-25TOO:26:38+08:00",
        createtime: "",
        updatetime: "2018-10-10T17:34+08:00",
        sort: "1",
        title: "第一讲 ：“危险”的安全带",
        subtitle:
          "车载安全带是针对成年人所涉及到汽车约束系统。儿童若直接使用车载安全带,一但发生事故，将对儿童造成致命伤害。",
         url: "",
        image: "articles/2.jpg",
        playtime:"00:00",
        percent:"0",
        statusImage:""
      }
    ]
    };
  },
  components: {
    AudioPlayer
  },
  created: function() {
  },
  methods:{
    demoHandle:function(){
      debugger;
    }
  }
};
</script>

<style>
.audioplayer {
  width: 320rpx;
  height: 355rpx;
  display: flex;
  flex-direction: column;
  margin-top: 20rpx;
  margin-bottom: 20rpx;
}
</style>

