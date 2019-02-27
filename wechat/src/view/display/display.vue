<template>
    <div >
        <div>
            <img src="@/assets/safety-video-banner.jpg">
        </div>
        <div class="video" v-for="item in audios" v-bind:key="item.audioID">
           <img :src="item.image">
        </div>
        <div class="character" v-for="item in audios" v-bind:key="item.audioID">
            <p>{{item.title}}</p>
            <nav class="border"></nav>
            <span>{{item.subtitle}}</span>
        </div>
    </div>
</template>
<script>
   import config from "@/config";
const { mediaUrl } = config;
export default {
  name:"display",
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
        content: "2018-7-25TOO:26:38+08:00",
        createtime: "",
        updatetime: "2018-10-10T17:34+08:00",
        sort: "1",
        title: "第一讲 ：“危险”的安全带",
        subtitle: "车载安全带是针对成年人所涉及到汽车约束系统。儿童若直接使用车载安全带,一但发生事故，将对儿童造成致命伤害。",
        url: "",
        image: "articles/1.jpg"
      },
    ]
       for (let item of data) {
      item.image = mediaUrl + "/" + item.image;
      item.url = mediaUrl + "/" + item.url;
      item.playtime = "00:00";
      item.percent = 0;
      item.statusImage = "";
    }
    this.audios = data;
   }
}
</script>
<style>
.video{
    margin-top: -5px;
    width: 100%;
    height: 200px;
    overflow:hidden;
}
.border{
    border: 0.5px solid rgb(114, 114, 113);
}
.character p{
    font-weight: bold;
    margin: 5px;
    font-size: 16px;
}
.character span{
 font-size: 10px;
}
</style>


