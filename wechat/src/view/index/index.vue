<template>
  <div>
    <router-link to="">
      <div class="indexanswer">
        <img src="@/photo/index/index-safety-survey.jpg">
      </div>
    </router-link>
    <router-link to="safety">
      <div class="indexclassroom">
        <img src="@/photo/index/index-safety-class.jpg">
      </div>
    </router-link>
    <router-link to="">
      <div class="packet">
        <img src="@/photo/index/service.gif">
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "Index",
  data() {
    return {};
  }
};
</script>
<style>
.indexclassroom {
  margin-top: -5px;
  width: 100%;
  height: 100%;
}
.packet {
  width: 100%;
  height: 50%;
}
.packet img {
     width: 30%;
    height: 100px;

    position: absolute;
    left: 70%;
       margin-top: -30%;
}
</style>

