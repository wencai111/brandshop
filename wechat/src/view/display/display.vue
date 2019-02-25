<template>
    <div>
        <div>
            <img src="@/assets/safety-video-banner.jpg">
        </div>
        <div class="video">
            <!-- <img :src="itme.image"> -->
        </div>
        <div class="character">
            <p>第一讲 ：“危险”的安全带</p>
            <nav class="border"></nav>
            <span>车载安全带是针对成年人所涉及到汽车约束系统。儿童若直接使用车载安全带,一但发生事故，将对儿童造成致命伤害。</span>
        </div>
    </div>
</template>
<script>
export default {
    name:"display",
    data(){
        return{
            image:"../../assets/safety-video-banner.jpg",
        }
    }
}
</script>
<style>
.video{
    margin-top: -5px;
    width: 100%;
    height: 200px;
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


