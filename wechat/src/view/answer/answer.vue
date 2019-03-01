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
      <div v-if="questions.length > 0">
        <ul>
          <li v-for="item in questions" v-bind:key="item.question">
            <div
              class="question"
              v-bind:style="{backgroundImage:'url('+require('../../assets/other/question.png')+')'}"
            >
              <span class="question1">{{item.question}}</span>
            </div>
          </li>
          <li v-for="item in questions" v-bind:key="item.question">
            <div
              @click="answer1"
              class="answerA answersum"
              v-bind:style="{backgroundImage:'url('+require('../../assets/other/answer-a.png')+')'}"
            >
              <span class="answeras">{{item.answerA}}</span>
            </div>
          </li>
          <li v-for="item in questions" v-bind:key="item.question">
            <div
              @click="answer1"
              class="answerB answersum"
              v-bind:style="{backgroundImage:'url('+require('../../assets/other/answer-b.png')+')'}"
            >
              <span class="answeras">{{item.answerB}}</span>
            </div>
          </li>
          <li v-for="item in questions" v-bind:key="item.question">
            <div
              @click="answer1"
              class="answerC answersum"
              v-bind:style="{backgroundImage:'url('+require('../../assets/other/answer-c.png')+')'}"
            >
              <span class="answeras">{{item.answerC}}</span>
              <div class="amswer-photo">
                <img :src="item.image">
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!-- 第三部分 -->
    </div>
    <div v-if="MyAnswer =='response'">
      <div
        class="wrong"
        v-bind:style="{backgroundImage:'url('+require('../../photo/goods/safety-comfrim-backgorund.png')+')'}"
      >
        <p class="response">回答错误</p>
        <p class="myanswers">答案:{{result}}</p>
        <span>{{tip}}</span>
        <div @click="wrong">
          <img src>
        </div>
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
      MyAnswer: "response",
      MyAnswer: "answer",
      MyAnswer: "home",

      questions: [
        {
          question: "1、一辆小汽车有几块视野盲区？",
          answerA: "四块",
          answerB: "六块",
          answerC: "八块",
          result: "C",
          tip:
            "汽车A柱造成的左右视野盲区，B柱造成左右视野盲区，C柱造成的左右视野盲区,以及车头盲区和车尾盲区。",
          image: "audios/2.jpg"
        }
        // {
        //   question: "2、下面关于安全气囊的说法，哪一个是错误的？",
        //   answerA:
        //     "当儿童头部与气囊仪表盘接近时，一旦碰撞造成气囊打开，会对头部形成几百公斤的冲击力。",
        //   answerB:
        //     "当儿童坐在正向安装的安全座椅里时，是不可以被放置在有安全气囊的座位上的。",
        //   answerC:
        //     "当儿童坐在反向安装的安全座椅里时，是不可以被放置在有安全气囊的座位上的。",
        //   result: "B",
        //   tip:
        //     "当儿童坐在反向安装的安全座椅里时，气囊爆炸打开会接触椅背，椅背会对脆弱的头部和颈部造成伤害。",
        //   qimage: "2.png"
        // },
        // {
        //   question: "3、下列关于安全带的说法，哪一个是正确的？",
        //   answerA: "四岁以下的儿童不可以使用车内安全带，四岁以上才可以。",
        //   answerB:
        //     "儿童直接使用车内安全带，有可能在车辆碰撞时勒住儿童颈部和腹部，导致颈骨折断或器官受损。",
        //   answerC:
        //     "如果要给儿童使用车内成人安全带，则必须让儿童坐在有安全气囊的座位上。",
        //   result: "B",
        //   tip:
        //     "只有当儿童满了12岁或者身高高于1米5时，才可以直接使用车内的安全带。",
        //   qimage: "3.png"
        // },
        // {
        //   question: "4、下列关于儿童留在车内的说法，哪一个是正确的？",
        //   answerA: "家长如果只是离开一小会儿，儿童是可以在车里等他们回来的。",
        //   answerB:
        //     "家长离开一小会儿并且把儿童独自留在车内，应该在离开之前确保车门和车窗都已经锁好。",
        //   answerC:
        //     "夏天天气炎热，封闭的车内温度急剧上升，20分钟内就可能超过50℃，这对留在车内的儿童是致命的。",
        //   result: "C",
        //   tip:
        //     "封闭车内温度急剧上升，高温环境会对小朋友的身体器官造成严重伤害，任何时候都不允许将儿童独自留在车内！",
        //   qimage: "4.png"
        // },
        // {
        //   question: "5、下列关于家长抱儿童乘车的说法，哪种是错误的？",
        //   answerA:
        //     "只有刚出生的婴儿才可以由家长抱在怀里乘车。婴儿很小、很轻，即使发生意外，家长也能很好的保护。",
        //   answerB: "任何时候家长都不可以将儿童抱在怀里乘车，尤其是婴儿阶段。",
        //   answerC:
        //     "家长抱儿童乘车，一旦发生交通事故，很有可能会加重儿童受到伤害或导致死亡。",
        //   result: "A",
        //   tip:
        //     "无论儿童处在哪个年龄段，都不可以抱在怀里乘车。汽车发生碰撞事故时，身体产生的冲击力会数倍于身体的重量，家长是无法抱住的！",
        //   qimage: "5.png"
        // },
        // {
        //   question: "6、下列哪种办法，可以最有效地避免儿童误开车门？",
        //   answerA: "让司机打开中控锁。",
        //   answerB: "让司机打开儿童安全锁。",
        //   answerC: "让司机设置行驶自动上锁。",
        //   result: "B",
        //   tip:
        //     "中控锁是可以通过车内解锁键打开的，只有儿童安全锁才能真正避免儿童误开车门。",
        //   qimage: "6.png"
        // },
        // {
        //   question: "7、乘车时不可以将头、手伸出窗外，下列哪种说法是错误的？",
        //   answerA: "只有当车窗带有防夹手功能时，才可以将头、手伸出窗外。",
        //   answerB:
        //     "当儿童将头、手伸出窗外时，很容易与外界车辆发生擦碰，尤其是在车流量较大的地方。",
        //   answerC: "在车流量很小的地方，儿童也不可以将头、手伸出窗外。",
        //   result: "A",
        //   tip:
        //     "任何情况下儿童都不可以将头、手伸出窗外，以免发生擦碰或者异物进入眼睛。",
        //   qimage: "7.png"
        // },
        // {
        //   question: "8、关于车内摆放物品或者携带宠物，下列哪个说法是错误的？",
        //   answerA: "车内不可以放置多余的物品，尤其是比较重或者比较尖锐的物品。",
        //   answerB:
        //     "有宠物一起乘车时，应该给宠物也配备相应的安全装备，例如宠物安全带、宠物防滑垫、隔离网等。",
        //   answerC: "体型较小的宠物可以抱在怀里，不一定要配备宠物安全装备。",
        //   result: "C",
        //   tip:
        //     "无论是宠物还是车内其他物品，都应该配备相应的安全装备，以防发生事故时，这些物品或宠物会以车速冲撞起来，造成二次伤害。",
        //   qimage: "8.png"
        // },
        // {
        //   question: "9、下列关于安全座椅的说法，哪个是正确的？",
        //   answerA:
        //     "3岁以下的小朋友乘车必须使用安全座椅。年纪稍大之后，尤其是3岁以后，就可以不坐安全座椅了。",
        //   answerB:
        //     "安全座椅有常规的大座椅和安全增高垫两种类型。大座椅更贵，但是比增高垫更安全。",
        //   answerC: "汽车发生意外事故时，安全座椅能将儿童的死亡率降低71%。",
        //   result: "C",
        //   tip:
        //     "只有当儿童满了12岁或身高达到1米5时，才可以不再使用安全座椅。3岁以上儿童可以使用安全增高垫。正规的增高垫必须经过ECE或者CCC等权威机构的碰撞测试。",
        //   qimage: "9.png"
        // },
        // {
        //   question: "10、下列关于安全增高垫的说法，哪一个是错误的？",
        //   answerA:
        //     "安全增高垫是一种轻便、易携式的安全座椅，一般适合3-12岁的小朋友使用。",
        //   answerB:
        //     "安全增高垫通过抬高儿童身高，并改变安全带的穿行路线，让身高不足1米5的儿童安全使用安全带。",
        //   answerC: "车里有了安全座椅就不再需要安全增高垫。",
        //   result: "C",
        //   tip:
        //     "即便车里有了安全座椅，家中也需要常备一个安全增高垫，以备儿童在乘坐其他车辆时方便使用，保障乘车安全。",
        //   qimage: "10.png"
        // }
      ]
    };
  },
  methods: {
    myvideo() {
      this.$router.push("risk");
    },
    answer() {
      this.MyAnswer = "answer";
    },
    answer1() {
      this.MyAnswer = "response";
    },
    wrong() {
      this.MyAnswer = "answer";
    }
  }
};
</script>
<style>
.rule img{
  width: 100px;
  height: 30px;
  margin-top: 41%;
  margin-left: 37%;
  position:absolute
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


