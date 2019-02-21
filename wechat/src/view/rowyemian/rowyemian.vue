<template>
  <div>
    <div>
      <img src="@/assets/safety-audio-banner.jpg">
    </div>
    <div
      class="background"
      v-bind:style="{backgroundImage:'url('+require('../../assets/other/safety-audio-bk.jpg')+')'}"
    >
      <!-- <WxcRow>
        <i-row>
          <i-col span="12">
            <div class="play">
              <img src="@/assets/other/play.png">
            </div>
            <div class="color"></div>
            <div class="assets">
              <img src="item.image">
              <p>{{item.subtitle}}</p>
            </div>
          </i-col>
        </i-row>
      </WxcRow>-->
    </div>
  </div>
</template> 

<script>
import WxcRow from "@/components/wxc-row";
export default {
  name: "rowyemian",
  data() {
    return {
      audios: []
    };
  },
  components: {
    // WxcRow
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
  margin-left: 10px;
  margin-top: 40px;
}
.color {
  position: absolute;
  display: block;
  width: 150px;
  height: 150px;
  margin-left: 10px;
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
.play img {
  position: absolute;
  width: 30px;
  height: 30px;
  margin-left: 70px;
  margin-top: 100px;
  display: block;
}
</style>

