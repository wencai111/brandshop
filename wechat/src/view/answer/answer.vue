<template>
  <div>
    <div>
      <div class="answerbackground">
        <img src="@/assets/answer/safety-survey-background.jpg">
      </div>
      <div v-if="MyAnswer =='home'" class="topic">
        <img src="@/assets/other/rule-content.png">
      </div>
      <div class="rule" v-if="MyAnswer =='home'">
        <img src="@/assets/other/title-rule.png">
      </div>
      <div class="answers" @click="answer" v-if="MyAnswer =='home'">
        <img src="@/assets/answer/btnstart.png">
      </div>
      <div class="amswer-photo" v-if="MyAnswer =='home'">
        <img src="@/assets/other/icon-minions.png">
      </div>
    </div>
    <!--第二部分-->
    <div class v-if="MyAnswer =='answer'">
      <div class="rule">
        <img src="@/assets/other/title-question.png">
      </div>
      <div>
        <ul>
          <li>
            <div
              class="question"
              v-bind:style="{backgroundImage:'url('+require('../../assets/other/question.png')+')'}"
            >
              <span class="question1">{{question.title}}</span>
            </div>
          </li>
          <li>
            <div
              @click="answer1"
              class="answerA answersum"
              v-bind:style="{backgroundImage:'url('+require('../../assets/other/answer-a.png')+')'}"
            >
              <span class="answeras">{{question.answerA}}</span>
            </div>
          </li>
          <li>
            <div
              @click="answer1"
              class="answerB answersum"
              v-bind:style="{backgroundImage:'url('+require('../../assets/other/answer-b.png')+')'}"
            >
              <span class="answeras">{{question.answerB}}</span>
            </div>
          </li>
          <li>
            <div
              @click="answer1"
              class="answerC answersum"
              v-bind:style="{backgroundImage:'url('+require('../../assets/other/answer-c.png')+')'}"
            >
              <span class="answeras">{{question.answerC}}</span>
              <div class="amswer-photo">
                <img :src="question.image">
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 第三部分 -->
    <div class="Popout" v-if="show">
      <div class="bckgroundstyle"></div>
      <div
        class="wrong"
        v-bind:style="{backgroundImage:'url('+require('../../photo/goods/safety-comfrim-backgorund.png')+')'}"
      >
        <ul>
          <li>
            <p class="response">{{question.resultText}}</p>
          </li>
          <li>
            <p class="myanswers">答案:{{question.result}}</p>
          </li>
          <li>
            <div class="tip">
              <span>{{question.tip}}</span>
            </div>
          </li>
        </ul>
        <div class="Continue" @click="wrong">
          <img src="@/assets/other/btncontinue.png">
        </div>
      </div>
    </div>
    <!-- 第四部分 -->
    <div class v-if="MyAnswer =='share'">
      <div class="rule">
        <img src="@/assets/other/title-result.png">
      </div>
      <ul>
        <li class="good">
          <img src="@/assets/other/good.png">
        </li>
      </ul>
      <div class="share">
        <img src="@/assets/other/share.png">
      </div>
    </div>
  </div>
</template>
<script>
import config from "@/config";
const { mediaUrl } = config;
export default {
  name: "Answer",
  data() {
    return {
      total:1,
      xuhao: 2,
      MyAnswer: "home",
      show: false,
      // MyAnswer: "response",
      question: null
    };
  },
  created: function() {
    var ref = {
      resultText: "回答错误",
      title: "1、一辆小汽车有几块视野盲区？",
      answerA: "四块",
      answerB: "六块",
      answerC: "八块",
      result: "C",
      tip:
        "汽车A柱造成的左右视野盲区，B柱造成左右视野盲区，C柱造成的左右视野盲区,以及车头盲区和车尾盲区。",
      image: "audios/2.jpg"
    };
    this.question = ref;
  },
  methods: {
    answer() {
      this.MyAnswer = "answer";
    },
    wrong() {
      this.MyAnswer = "share";
      
    },
    answer1(ref) {
      this.total=this.total+1;
      var currentSeleted = ref;
      if (ref == this.question.result) {
        //回答正确
      } else {
        //回答错误
      }
      //显示提示结果
      this.show = true;
// this.show = !this.show;
      //发送请求给后台
      var newData = {
        success: true,
        result: ":1",
        data: {
          resultText: "回答错误",
          title: "1、一辆小汽车有几块视野盲区？",
          answerA: "四块",
          answerB: "六块",
          answerC: "八块",
          result: "C",
          tip:
            "汽车A柱造成的左右视野盲区，B柱造成左右视野盲区，C柱造成的左右视野盲区,以及车头盲区和车尾盲区。",
          image: "audios/2.jpg"
        },
        message: "还有新的题目"
      };
      // var newData1 = { success: true, result: 0, message: "已经是最后一题" };
      if (this.total<10) {
        //跳转到分享页面
        this.MyAnswer ="share";
      } else {
        //绑定新的数据；
        return;
      }
    },
    wrong() {
      
    //   this.show = !this.show;
    //   this.question = {
    //     resultText: "回答错误",
    //     title: "1、一辆小汽车有几块视野盲区？" + this.xuhao,
    //     answerA: "四块" + this.xuhao,
    //     answerB: "六块" + this.xuhao,
    //     answerC: "八块" + this.xuhao,
    //     result: "C" + this.xuhao,
    //     tip:
    //       "汽车A柱造成的左右视野盲区，B柱造成左右视野盲区，C柱造成的左右视野盲区,以及车头盲区和车尾盲区。" +
    //       this.xuhao,
    //     image: "audios/2.jpg"
    //   };
    // this.xuhao++;
    }
  }
};
</script>
<style>
.good img {
  position: absolute;
  width: 300px;
  height: 300px;
  margin-left: 10%;
  margin-top: 60%;
}
.rule img {
  width: 100px;
  height: 30px;
  margin-top: 41%;
  margin-left: 37%;
  position: absolute;
}
.tip {
  width: 210px;
  margin-left: 20px;
}
.share {
  position: absolute;
  width: 80%;
  height: 180px;
  margin-top: 150%;
  margin-left: 10%;
}
.bckgroundstyle {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgb(73, 73, 70);
  opacity: 0.6;
}
.Continue img {
  width: 140px;
  height: 30px;
  position: absolute;
  top: 170px;
  margin-left: 20%;
}
.wrong {
  width: 250px;
  height: 250px;
  position: absolute;
  margin-top: 80%;
  background-image: black;
  margin-left: 15%;
}
.response {
  font-size: 24px;
  color: blue;
  text-align: center;
  margin-top: 20px;
}
.myanswers {
  color: red;
  font-size: 20px;
  text-align: center;
}
.question {
  position: absolute;
  width: 300px;
  height: 100px;
  background-repeat: no-repeat;
  background-size: contain;
  top: 30%;
  left: 10%;
  background-position: center center;
}
.answeras {
  width: 220px;
  height: 20px;
  margin-left: 35px;
  top: 20%;
  text-align: center;
  position: absolute;
}
.question1 {
  width: 220px;
  height: 20px;
  margin-left: 35px;
  top: 40%;
  text-align: center;
  position: absolute;
}
.answersum {
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  width: 270px;
  height: 80px;
  left: 14%;
}
.answerA {
  top: 42%;
}
.answerB {
  top: 51%;
}
.answerC {
  top: 60%;
}
.answerbackground img {
  position: fixed;
  width: 100%;
  height: 100%;
}
.topic img {
  width: 90%;
  position: absolute;
  margin-top: 60%;
  margin-left: 5%;
}
.answers img {
  position: absolute;
  margin-top: 100%;
  width: 60%;
  margin-left: 20%;
}
.amswer-photo {
  position: absolute;
  width: 60%;
  bottom: 0;
  left: 0;
  margin: 20px;
}
</style>


