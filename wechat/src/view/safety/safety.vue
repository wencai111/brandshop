<template>
  <div class="home">
    <div>
      <img src="@/assets/1goodsku/1.jpg">
    </div>
    <span class="video">安全视频</span>
    <div class="more">点击更多</div>
    <nav class="border"></nav>
    <div></div>
    <span class="video">安全音频</span>
    <div class="more">点击更多</div>
    <nav class="border"></nav>
    <div>
      <img src>
      <span>"致命"的安全带</span>
    </div>
    <div>
      <img src>
      
      <span>"致命"的安全带</span>
    </div>
    <span class="video">安全文章</span>
    <div class="more">点击更多</div>
    <nav class="border"></nav>
    <div class="srs">
    <div class="srs1">
      <img src="@/assets/1goodsku/1.jpg">
      <div class="text1">
      <span class="srs-text">安全气囊对孩子的危害</span><br/>
      <span class="srs-text2">本该护人安全的安全气囊，何以反倒成了“杀人凶器”？</span>
    </div>
    </div>
    <div class="safe">
      <img src="@/assets/1goodsku/1.jpg">
      <div class="text2">
      <span class="safe-text">儿童安全锁的作用</span><br/>
      <span class="safe-text1">打开它给孩子多一分安全。</span>
      </div>
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
.video {
  font-size: 15px;
  color: rgb(63, 63, 212);
  font-weight: bold;
}
.more {
  font-size: 8px;
  float: right;
  margin-right: 5px;
}
.border {
  border: 0.5px solid rgb(150, 150, 151);
  width: 100%;
}
.srs{
  /* width: 100%;
  height: 100px; */
  margin: 10px;
}
.srs1 img{
 float: left;
 width: 40%;
 height: 100px;
}
.safe img{
  float: right;
  width: 40%;
  height: 100px;
}
.text1{
     /* float: left; */
   width: 130px;
   height: 80px;
   /* margin-left: 100px */
}
.srs-text{
  /* float: left;
  margin-top: 140px;
  margin-left: -40%; */
}
.srs-text2{
  /* float: left;
  margin-top: 160px;
  margin-left: -40%;
  width: 160px; */
}
.safe-text{

}
.safe-text1{
}
.text2{
   /* float: right; */
   width: 150px;
   height: 80px;
   margin-left: 100px
}
</style>

