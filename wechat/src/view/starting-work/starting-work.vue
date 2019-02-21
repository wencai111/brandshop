<template>
  <div>
    <div class="background">
      <img src="@/assets/answer/safety-survey-background.jpg">
    </div>
    <div class="title-question">
      <img src="@/assets/other/title-question.png">
    </div>
    <div class="question">
      <img src="@/assets/other/question.png">
      <input type="text">
    </div>
    <div class="answer-a">
      <img src="@/assets/other/answer-a.png">
    </div>
    <div class="answer-b">
      <img src="@/assets/other/answer-b.png">
    </div>
    <div class="answer-c">
      <img src="@/assets/other/answer-c.png">
    </div>
    <div class="amswer-photo">
      <img src="@/assets/other/1.png">
    </div>
  </div>
</template>
<script>
export default {
  name: "work",
  data() {
    return {};
  }
};
</script>
<style>
.background img {
  position: fixed;
  width: 100%;
  height: 100%;
}
.title-question img{
  width: 45%;
  position: absolute;
  margin-top:40%;
  margin-left: 30%;
}
.question img {
  width: 80%;
  position: absolute;
  margin-top: 60%;
  margin-left: 10%;
}
.answer-a img {
  position: absolute;
  margin-top: 80%;
  width: 70%;
  margin-left: 15%;
}
.answer-b img {
  position: absolute;
  margin-top: 100%;
  width: 70%;
  margin-left: 15%;
}
.answer-c img {
  position: absolute;
  margin-top: 120%;
  width: 70%;
  margin-left: 15%;
}
.amswer-photo img{
  position: absolute;
  width: 100%;
  bottom: -40px;
  left: 0;
  margin-left: 20px;
}
</style>