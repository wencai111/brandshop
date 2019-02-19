<template>
    <div>
        <div class="background">
            <img src="@/assets/answer/safety-survey-background.jpg">
        </div>
        <div class="topic">
            <img src="@/assets/other/rule-content.png">
        </div>
        <div class="answers">
          <img src="@/assets/answer/btnstart.png">
        </div>
       <router-link to=''>
        <div class="amswer-photo">
            <img src="@/assets/other/icon-minions.png">
        </div>
       </router-link>
    </div>
</template>
<script>
export default {
    name:"answer",
    data(){
        return{

        }
    }
}
</script>
<style>
.background img{
    position: fixed;
    width: 100%;
    height: 100%;
}
.topic img{
    width: 90%;
    position: absolute;
    margin-top: 60%;
    margin-left: 5%;
}
.answers img{
   position: absolute; 
   margin-top: 100%;
   width: 60%;
   margin-left: 20%;
}
.amswer-photo{
   position: absolute; 
   width: 60%;
   bottom:0;
   left:0;
   margin: 20px;
}
</style>


