<template>
  <div>
    <div>
      <img src="@/assets/safety-article-banner.jpg">
    </div>
    <div
      class="background"
      v-bind:style="{backgroundImage:'url('+require('../../assets/other/safety-audio-bk.jpg')+')'}"
    >
      <div class="audio">
        <img src="@/assets/audios/1.jpg">
        <p>“危险”的安全带</p>
      </div>
      <div class="audio">
        <img src="@/assets/audios/2.jpg">
        <p>“致命”的安全气囊</p>
      </div>
      <div class="audio1s">
        <div class="audio1">
          <img src="@/assets/audios/3.jpg">
          <p>不可以将头、手伸出窗外</p>
        </div>
        <div class="audio1">
          <img src="@/assets/audios/5.jpg">
          <p>隐蔽的儿童安全锁</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Article",
  data() {
    return {};
  }
};
</script>
<style>
</style>
