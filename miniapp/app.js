var o = require("osann.config.js");

App({
    onLaunch: function () {
        debugger;
        var _this = this;
        wx.checkSession({
            success: function () {
                debugger;


                let obj = {
                    "nickName": "33",
                    "gender": "2",
                    "city": "孝感",
                    "country": "中国",
                    "province": "湖北",
                    "language": "zh_CN",
                    "avatarUrl": "http://thirdwx.qlogo.cn/mmopen/vi_32/giayHUxMyah7B0e0Qhxpsz8e2ZAnibq0cHkvfFQjB4hDgl76ROOga19bUYRJXJ14Jyibl010dCiabwKotOGSEgiasDw/132"
                };
                wx.setStorage({
                    key: "sessionid",
                    data: "oiFBo5OQy1u4cNCBO4-UpJeyrSf0"
                });
                wx.setStorage({
                    key: "userid",
                    data: "10437"
                });
                wx.setStorage({
                    key: "userInfo",
                    data: obj
                });







                var sessionid = wx.getStorageSync("sessionid");
                var userid = wx.getStorageSync("userid");
                var userInfo = wx.getStorageSync("userInfo");
                if (sessionid != "" && userid != "" && userInfo) {
                    _this.globalData.openid = sessionid;
                    _this.globalData.userid = "10437";
                    _this.globalData.userInfo = userInfo;
                } else {
                    console.log("re-login and fetch userinfo again ...");
                    console.error("11");
                
                    debugger;
                    _this.wxloginwithsession();
                }
            },
            fail: function () {
                console.error("22");
                debugger;
                _this.wxloginwithsession();
            }
        });
    },
    wxloginwithsession: function () {
        debugger;
        var _this = this;
        wx.login({
            success: function (n) {
                if (n.code) {
                    let obj = {
                        "nickName": "33",
                        "gender": "2",
                        "city": "孝感",
                        "country": "中国",
                        "province": "湖北",
                        "language": "zh_CN",
                        "avatarUrl": "http://thirdwx.qlogo.cn/mmopen/vi_32/giayHUxMyah7B0e0Qhxpsz8e2ZAnibq0cHkvfFQjB4hDgl76ROOga19bUYRJXJ14Jyibl010dCiabwKotOGSEgiasDw/132"
                    };
                    _this.globalData.openid = "oiFBo5OQy1u4cNCBO4-UpJeyrSf0";
                    wx.setStorage({
                        key: "sessionid",
                        data: "oiFBo5OQy1u4cNCBO4-UpJeyrSf0"
                    });

                } else {
                    console.log("登录失败！" + n.errMsg)
                }



            },
            fail: function (res) {
                debugger;
            }
        });
    },
    globalData: {
        openid: "",
        userid: 0,
        userInfo: null,
        rpxRatio: 1,
        score: 0,
        qIndex: 0,
        currentArticleUrl: "",
        currentVideoUrl: "",
        currentVideoPoster: "",
        currentSubtitle: "",
        currentIntro: "",
        currentAudioIndex: -1,
        orderInfo: {}
    }
});