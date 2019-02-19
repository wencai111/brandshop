<template>
  <div class="wrapper" id="app">
    <div class="memberCentrePage">
      <section
        class="topInfo bgCover" v-bind:style="{backgroundImage:'url('+require('../../assets/member/bg1.jpg')+')'}">
        <div class="portraitBlock">
          <div class="imgBlock bgCover" v-bind:style="styleObject"></div>
          <!-- v-bind:style="{backgroundImage:'url('+require('../../assets/upload/member/User.png')+')'}" ></div> -->
          <!-- <h3>{{nickname}}</h3>
          <p>ID:{{openid}}</p> -->
        </div>
        <div class="flexBlock">
          <a href="/coin-rule.html">
            <i class="gold">{{gold}}</i>
            <span>我的金币</span>
          </a>
          <nav></nav>
          <a href="/share-class.html">
            <i class="icon-ticket"></i>
            <span>我的优惠</span>
          </a>
        </div>
      </section>
      <section class="listBlock">
        <div class="container">
          <ul>
            <router-link tag="li" to="/wechat/CourseUserList">
             <a>
                 <span>当期老师</span>
                <span>
                  <i class="icon-teacher"></i>
                </span>
              </a>
            </router-link>
            <!-- <li>
							<a href="javascript:void(0)">
								<span>每日学习提醒</span>
								<span>
									<div class="clicker">
										<input type="checkbox" id="reminder" checked><label for="reminder"><nav></nav></label>
									</div>
								</span>
							</a>
            </li>-->
            <li>
              <a href="#">
                <span>常见问题</span>
                <span>
                  <i class="icon-question-circle"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { getInfo } from "@/api/my";
import { getToken } from "@/libs/util";
export default {
  name: "My",
  data() {
    return {
      openid: "",
      nickname: "",
      photo: "",
      gold: 0,
      ticket: "",
      IsNotice: false,
      styleObject: {
        "background-image": ""
      }
    };
  },
  created: function() {
		getInfo(getToken())
      .then(res => {
        if (res.data.success) {
          this.openid = res.data.data.openid;
          this.nickname = res.data.data.nickname;
          this.photo = res.data.data.photo;
          this.gold = res.data.data.gold;
          this.ticket = res.data.data.ticket;
          this.IsNotice = res.data.data.IsNotice;
          // if (this.IsNotice) {
          //   this.$refs.notice.setAttribute("checked", "checked");
          // }
          this.styleObject['background-image'] = 'url(' + res.data.data.photo + ')'
        } else {
          //alert(res.data.message);
          alert("获取用户信息失败！");
        }
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    // settingNotice: function() {
    //   this.IsNotice = !this.IsNotice;
    //   mangoWxcApi
    //     .post("WeChatUserInfo/UpdateNoticeSetting", {
    //       userId: Cookies.get("UserId"),
    //       isNotice: this.IsNotice
    //     })
    //     .then(res => {
    //       if (res.data.success) {
    //       } else {
    //         console.log(res.data.message);
    //         alert("更新失败！");
    //       }
    //     })
    //     .catch(error => {
    //       console.warn(error);
    //     });
    // },
  }
};
</script>

<style>
.memberCentrePage .topInfo {
  height: 45vh;
}
.memberCentrePage .topInfo .portraitBlock {
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.memberCentrePage .topInfo .portraitBlock .imgBlock {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  margin-bottom: 4px;
}
.memberCentrePage .topInfo .portraitBlock h3 {
  font-size: 25px;
  color: #585858;
  margin-bottom: 3px;
}
.memberCentrePage .topInfo .portraitBlock p {
  font-size: 14px;
  color: #a6a6a6;
}
.memberCentrePage .topInfo .flexBlock {
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.memberCentrePage .topInfo .flexBlock nav {
  height: 40px;
  width: 1px;
  background-color: #e9e9e9;
  margin-bottom: 12px;
}
.memberCentrePage .topInfo .flexBlock a {
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: center;
  width: 40%;
}
.memberCentrePage .topInfo .flexBlock a i {
  font-style: normal;
  display: block;
  font-size: 38px;
}
.memberCentrePage .topInfo .flexBlock a i.gold {
  color: #fab100;
}
.memberCentrePage .topInfo .flexBlock a span {
  margin-bottom: 10px;
  font-size: 17px;
  letter-spacing: 1px;
  font-weight: 600;
}
.memberCentrePage .listBlock {
  height: 55vh;
  overflow: auto;
}
.memberCentrePage .listBlock ul {
  padding: 8px 10px;
}
.memberCentrePage .listBlock ul li:not(:last-child) {
  border-bottom: 1px solid #d5d5d5;
}
.memberCentrePage .listBlock ul li a {
  display: flex;
  justify-content: space-between;
  padding: 20px 10px;
  color: #434343;
  align-items: center;
  height: 38px;
}
/* .memberCentrePage .listBlock ul li span {
} */
.memberCentrePage .listBlock ul li span i {
  font-size: 28px;
}
</style>

