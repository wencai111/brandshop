<template>
  <div>
    <span class="video">安全视频</span>
    <div class="more">点击更多</div>
    <nav class="border"></nav>
    <div></div>
    <span class="video">安全音频</span>
    <div class="more">点击更多</div>
    <nav class="border"></nav>
    <div></div>
    <span class="video">安全文章</span>
    <div class="more">点击更多</div>
    <nav class="border"></nav>
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

