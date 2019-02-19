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
      <img src="">
      <span>"致命"的安全带</span>
    </div>
    <div>
      <img src="">

      <span>"致命"的安全带</span>
    </div>
    <span class="video">安全文章</span>
    <div class="more">点击更多</div>
    <nav class="border"></nav>
    <div>
      <img src="@/assets/goods/2.png">
      <span>安全气囊对孩子的危害</span>
      <span>本该护人安全的安全气囊，何以反倒成了“杀人凶器”？</span>
    </div>
    <div>
      <img src="@/assets/goods/3.png">
    </div>
  </div>
</template>
<script>
export default {
    name:"Safety",
    data(){
       return{

       }
    }
}
</script>
<style>
.home{
  width: 100%;
}
.video{
    font-size: 15px;
    color: rgb(63, 63, 212);
    font-weight:bold;
}
.more{
    font-size: 8px;
    float: right;
    margin-right: 5px;
}
.border{
    border: 0.5px solid rgb(150, 150, 151);
    width: 100%;
}
</style>

