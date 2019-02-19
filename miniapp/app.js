var o = require("osann.config.js");

App({
    onLaunch: function() {
        var o = this;
        wx.checkSession({
            success: function() {
                var e = wx.getStorageSync("sessionid"), n = wx.getStorageSync("userid"), s = wx.getStorageSync("userInfo");
                "" != e && "" != n && s ? (o.globalData.openid = e, o.globalData.userid = n, console.log("storage sessionid = ", e, " and userid = ", n), 
                o.globalData.userInfo = s, console.log("storage userInfo : ", o.globalData.userInfo)) : (console.log("re-login and fetch userinfo again ..."), 
                o.wxloginwithsession());
            },
            fail: function() {
                o.wxloginwithsession();
            }
        });
    },
    wxloginwithsession: function() {
        var e = this;
        wx.login({
            success: function(n) {
                n.code ? (console.log("Code is " + n.code), wx.request({
                    url: o.apiUrl + "/login",
                    method: "POST",
                    data: {
                        code: n.code
                    },
                    success: function(o) {
                        console.log("remote sessionid : ", o.data), e.globalData.openid = o.data, wx.setStorage({
                            key: "sessionid",
                            data: o.data
                        });
                    }
                })) : console.log("登录失败！" + n.errMsg);
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