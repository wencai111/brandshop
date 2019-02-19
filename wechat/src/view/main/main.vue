<template>
  <div class="wrapper" id="app" v-bind:style="{ overflow: 'hidden', height: frameHeight }">
    <div class="CoursePurchaseMainPage">
      <div v-bind:class="'stickyBar ' + (isStick ? 'active' : '')">
        <span v-on:click="goPage(1)">课程介绍</span>
        <span v-on:click="goPage(2)">课程列表</span>
      </div>
      <section class="HeroBanner">
        <div class="bg"></div>
        <div class="container">
          <div class="Title">
            <!-- <h3>第一期：谈论天气</h3> -->
            <h3>Talko English Australia
              <br>Melbourne
            </h3>
            <h2>叨叨英语墨尔本</h2>
            <div class="flex">
              <span class="btn border">199元购买</span>
              <!-- <span class="btn">进入试听课程</span> -->
            </div>
          </div>
          <div class="ScrollDown">
            <img src="@/assets/icon/scrollDwon.png">
            <p>向下滑动了解课程详情</p>
          </div>
        </div>
      </section>
      <div v-bind:class="'tabsCtrl ' + (currentPage == 2 ? 'secondPage' : '')">
        <div>
          <section class="scheduleBlock">
            <div class="container">
              <h2>本期课程安排</h2>
              <div class="flexCheck">
                <img src="@/assets/icon/icon-check-mark.png">
                <p>遵循听说读写四项技能习得路径, 强调高频短时且科学有序的训练</p>
              </div>
              <div class="flexCheck">
                <img src="@/assets/icon/icon-check-mark.png">
                <p>利用多感官输入法构建长期记忆, 培养语言模式识别和语块处理技能</p>
              </div>
              <p>
                遵循听说读写四项技能习得路径, 强调高频短时且科学有序的训练,
                利用多感官输入法构建长期记忆, 培养语言模式识别和语块处理技能
              </p>
              <div class="flexCheck">
                <img src="@/assets/icon/icon-check-mark.png">
                <p>利用多感官输入法构建长期记忆, 培养语言模式识别和语块处理技能</p>
              </div>
            </div>
          </section>
          <section class="CustomizeBlock">
            <div class="banner bgCover"></div>
            <div class="container">
              <h2>精准定位用户水平，量身定制</h2>
              <p>
                强调高频短时且科学有序的训练, 利用多感官输入法构建长期记忆,
                培养语言模式识别
              </p>
              <div class="grid">
                <article>
                  <img src="@/assets/upload/main/customize1.png">
                  <p>视频课程</p>
                </article>
                <article>
                  <img src="@/assets/upload/main/customize2.png">
                  <p>巩固练习</p>
                </article>
                <article>
                  <img src="@/assets/upload/main/customize3.png">
                  <p>老师讲解</p>
                </article>
              </div>
            </div>
          </section>
          <section class="videoBlock">
            <div class="container">
              <h2>本期预告</h2>
              <img src="@/assets/upload/main/giphy.gif">
              <p>
                强调高频短时且科学有序的训练, 利用多感官输入法构建长期记忆,
                培养语言模式识别
              </p>
            </div>
          </section>
          <section class="spoilerBlock">
            <div class="container">
              <h2>课程剧透</h2>
            </div>
            <div class="previewPage">
              <FlipCard>
                <li>
                  <article class="card">
                    <div
                      class="topBanner"
                      v-bind:style="{backgroundImage:'url('+require('@/assets/upload/preview/1.png')+')'}"
                    ></div>
                    <div class="content">
                      <h2>解决日常生活小需求，就去ABC Stores</h2>
                      <p>
                        强调高频短时且科学有序的训练,
                        利用多感官输入法构建长期记忆, 培养语言模式识别
                      </p>
                    </div>
                  </article>
                </li>
                <li>
                  <article class="card">
                    <div
                      class="topBanner"
                      v-bind:style="{backgroundImage:'url('+require('@/assets/upload/preview/2.png')+')'}"
                    ></div>
                    <div class="content">
                      <div class="padding">
                        <ul>
                          <li>n. 电车轨道；煤车</li>
                          <li>vt. 用煤车运载</li>
                          <li>vi. 乘电车</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                </li>
                <li>
                  <article class="card">
                    <div
                      class="topBanner"
                      v-bind:style="{backgroundImage:'url('+require('@/assets/upload/preview/3.png')+')'}"
                    ></div>
                    <div class="content withBtn">
                      <div class="padding">
                        <h4>我应该在哪站下车？</h4>
                        <p class="light">
                          本句可拆分成3块：What exit/do I get off/on?“get
                          off”表示“下车”。重点在第三块，这里的on并不是跟前面的get
                          off组合一起，而是修饰exit，表示“在”。把on放句末是老外的一种习惯性表达。
                        </p>
                      </div>
                    </div>
                  </article>
                </li>
              </FlipCard>
            </div>
          </section>
          <section class="introduceBlock">
            <div class="container">
              <h2>主播介绍: Chrisellelim</h2>
              <div
                class="photoframe bgCover"
                v-bind:style="{backgroundImage:'url('+require('@/assets/upload/member/teacher.jpg')+')'}"
              ></div>
              <p>
                强调高频短时且科学有序的训练, 利用多感官输入法构建长期记忆,
                培养语言模式识别
              </p>
            </div>
          </section>
          <section class="commentBlock">
            <div class="container">
              <h2>用户评价</h2>
              <div class="gridBox">
                <div>
                  <div
                    class="portrait"
                    v-bind:style="{backgroundImage:'url('+require('@/assets/upload/member/teacher.jpg')+')'}"
                  ></div>
                  <div class="star">
                    <img src="@/assets/icon/star.png">
                    <img src="@/assets/icon/star.png">
                    <img src="@/assets/icon/star.png">
                    <img src="@/assets/icon/star.png">
                    <img src="@/assets/icon/star.png">
                  </div>
                </div>
                <div>
                  <h4>比培训机构实惠还更有效的良心课程</h4>
                  <p>都知道英语好对职业发展的重要性，但下班后都累成狗，实在没精力学英语啊？我觉得Talko最棒的一点就是每天只需学习半小时。算了一下，每天学费还不到半张面膜的钱，很划算。</p>
                </div>
              </div>
              <a href="#" class="more">阅读更多评价
                <i class="icon-right"></i>
              </a>
            </div>
          </section>
          <section class="sportBlock">
            <img src="@/assets/upload/main/sport.jpg">
            <div class="container">
              <h2>常见问题回答</h2>
              <h3>什么样的英语水平可以报名呢？</h3>
              <p>建议大学英语四级以上或者同等水平同学报名。但日常交流部分水平，去试听课听听听看吧</p>
              <h3>结课后视频还可以继续观看吗？</h3>
              <p>可以！只要在课程期间内完成学习即可获赠永久观看权</p>
            </div>
          </section>
          <section v-bind:class="'bottonBlock ' + (isStick ? 'active' : '')">
            <div class="container">
              <div class="flex">
                <span class="btn colored">199元购买</span>
                <!-- <span class="btn">进入试听课程</span> -->
              </div>
            </div>
          </section>
        </div>
        <div>
          <section class="courseList" ref="courseList">
            <div class="container">
              <h2>选择一个你喜欢的课程吧</h2>
              <article>
                <div>
                  <div
                    class="bgCover"
                    v-bind:style="{backgroundImage:'url('+require('../../assets/upload/main/course1.jpg')+')'}"
                  ></div>
                  <div class="title">
                    <h3>飞跃澳洲</h3>
                  </div>
                </div>
              </article>
              <article>
                <div>
                  <div
                    class="bgCover"
                    v-bind:style="{backgroundImage:'url('+require('../../assets/upload/main/course2.jpg')+')'}"
                  ></div>
                  <div class="title">
                    <h3>飞跃新西兰</h3>
                  </div>
                </div>
              </article>
              <article>
                <div>
                  <div
                    class="bgCover"
                    v-bind:style="{backgroundImage:'url('+require('../../assets/upload/main/course1.jpg')+')'}"
                  ></div>
                  <div class="title">
                    <h3>飞跃澳洲</h3>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FlipCard from "@/components/flip-card";
import "./main.css";
export default {
  name: "Main",
  components: {
    FlipCard
  },
  data() {
    return {
      isStick: false,
      currentPage: 1,
      secondPageLimited: 0,
      frameHeight: "auto"
    };
  },
  updated() {
    window.onscroll = this.onScroll;
    window.a = this.$refs.courseList;
    this.secondPageLimited =
      this.$refs.courseList.offsetTop + this.$refs.courseList.clientHeight + 40;
  },
  methods: {
    onScroll(event) {
      this.isStick = window.scrollY >= window.innerHeight;
    },
    goPage(num) {
      this.currentPage = num;
      window.scrollTo(0, window.innerHeight);
      if (num == 2) {
        this.frameHeight = this.secondPageLimited + "px";
      } else {
        this.frameHeight = "auto";
      }
    }
  }
};
</script>

<style>
</style>
