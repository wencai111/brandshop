var config = require("wxc.config.js");

App({
    onLaunch: function () {
        var _this = this;
        _this.extConfig = wx.getExtConfigSync();
        wx.checkSession({
            success: function () {
                var sessionid = wx.getStorageSync("sessionid");
                var userid = wx.getStorageSync("userid");
                var userInfo = wx.getStorageSync("userInfo");
                if (sessionid != "" && userid != "" && userInfo) {
                    _this.globalData.openid = sessionid;
                    _this.globalData.userid = userid;
                    console.log("storage sessionid = ", sessionid, " and userid = ", userid);
                    _this.globalData.userInfo = userInfo;
                    console.log("storage userInfo : ", userInfo);
                } else {
                    console.log("缓存信息时效，重新登录获取用户信息！");
                    _this.wxloginwithsession();
                }
            },
            fail: function () {
                console.log("登录态已经过期，重新登录！");
                _this.wxloginwithsession();
            }
        });
    },
    wxloginwithsession: function () {
        var _this = this;
        var appid = (wx.getExtConfigSync()).appid;
        wx.login({
            success: function (res) {
                if (res.code) {
                    console.log("code is " + res.code);
                    wx.request({
                        url: config.apiUrl + "/code2session.aspx",
                        method: "POST",
                        data: {
                            "jscode": res.code,
                            "appid": _this.extConfig.appid
                        },
                        success: function (o) {
                            debugger;
                            console.log("remote sessionid : ", o.data);
                            _this.globalData.openid = o.data;
                            wx.setStorage({
                                key: "sessionid",
                                data: o.data
                            });
                        },
                        fail: function (res) {
                            debugger;
                        },
                        complete: function (res) {
                            debugger;

                        }
                    });
                } else {
                    console.log("登录失败：" + res.errMsg);
                }
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