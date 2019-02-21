<template>
  <div class="home">
    <div class="safety1">
      <img src="@/assets/safety-index-banner.jpg">
    </div>
    <div class="safety">
      <div class="background" v-bind:style="{backgroundImage:'url('+require('../../assets/safety-index-bk.jpg')+')'}">
      
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Safety",
  data() {
    return {};
  }
};
</script>
<style>
.home {
  width: 100%;
}
.safety1 img {
  width: 100%;
}
.safety{
 margin-top: -5px;
  width: 100%;
  height: 100px;
}
.background {
  height: 100%;
  width: 100%;
}
</style>

