var config = require("../../../wxc.config.js");
var a = getApp();

Page({
    data: {
        videos: [],
        safetyVideoBanner: config.mediaUrl + "/images/safety-video-banner.jpg"
    },
    onLoad: function(a) {
        wx.showLoading({
            title: "努力加载 ..."
        });
        var t = this;
        wx.request({
            url: config.apiUrl + "/safety/videos",
            method: "POST",
            success: function(a) {
                a.data.data.forEach(function(a) {
                    a.image = config.mediaUrl + "/" + a.image, a.url = config.mediaUrl + "/" + a.url;
                }), t.setData({
                    videos: a.data.data
                }), console.log(t.data.videos);
            },
            fail: function(a) {
                console.log("failure from ", config.apiUrl + "/safety/videos"), console.log(a);
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    },
    playerTapHandler: function(e) {
        var t = this;
        console.log(e.currentTarget), a.globalData.currentVideoUrl = t.data.videos[e.currentTarget.id - 1].url, 
        a.globalData.currentVideoPoster = t.data.videos[e.currentTarget.id - 1].image, a.globalData.currentSubtitle = t.data.videos[e.currentTarget.id - 1].subtitle, 
        a.globalData.currentIntro = t.data.videos[e.currentTarget.id - 1].intro, wx.navigateTo({
            url: "/pages/safety/videodetail/videodetail"
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return {
            title: "小黄人安全乘车视频",
            path: "/pages/safety/videos/videos",
            success: function(e) {},
            fail: function(e) {},
            complete: function() {}
        };
    }
});