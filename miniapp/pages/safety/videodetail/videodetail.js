var config = require("../../../wxc.config.js");
var e = getApp();

Page({
    data: {
        url: "",
        poster: "",
        subtitle: "",
        intro: "",
        safetyVideoBanner: config.mediaUrl + "/images/safety-video-banner.jpg"
    },
    onLoad: function(t) {
        var o = this, n = e.globalData.currentVideoUrl, a = e.globalData.currentVideoPoster, r = e.globalData.currentSubtitle, i = e.globalData.currentIntro;
        void 0 !== t.url && (n = decodeURIComponent(t.url), a = decodeURIComponent(t.poster), 
        r = t.title, i = t.intro), o.setData({
            url: n,
            poster: a,
            subtitle: r,
            intro: i
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
            path: "/pages/safety/videodetail/videodetail" + ("?url=" + encodeURIComponent(e.globalData.currentVideoUrl) + "&poster=" + encodeURIComponent(e.globalData.currentVideoPoster) + "&title=" + e.globalData.currentSubtitle + "&intro=" + e.globalData.currentIntro),
            success: function(t) {},
            fail: function(t) {},
            complete: function() {}
        };
    }
});