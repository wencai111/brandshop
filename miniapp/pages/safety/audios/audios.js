function a(a, e, t) {
    return e in a ? Object.defineProperty(a, e, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[e] = t, a;
}

var e = require("../../../osann.config.js"), t = require("../../../utils/util.js"), o = getApp(), n = wx.createInnerAudioContext();

Page({
    data: {
        audios: [],
        safetyAudioBanner: e.mediaUrl + "/images/safety-audio-banner.jpg"
    },
    onLoad: function(i) {
        wx.showLoading({
            title: "努力加载 ..."
        });
        var u = this;
        wx.request({
            url: e.apiUrl + "/safety/audios",
            method: "POST",
            success: function(a) {
                a.data.data.forEach(function(a) {
                    a.image = e.mediaUrl + "/" + a.image, a.url = e.mediaUrl + "/" + a.url, a.playtime = "00:00", 
                    a.percent = 0, a.statusImage = "../../images/play.png";
                });
                 u.setData({
                    audios: a.data.data
                });
                 console.log(u.data.audios);
            },
            fail: function(a) {
                console.log("failure from ", e.apiUrl + "/safety/audios"), console.log(a);
            },
            complete: function() {
                wx.hideLoading();
            }
        }), n.onPlay(function() {
            console.log("start to play music ", n.src);
            var e = "audios[" + o.globalData.currentAudioIndex + "].statusImage";
            u.setData(a({}, e, "../../images/pause.png"));
        }), n.onError(function(a) {
            console.log(a.errCode), wx.showToast({
                title: "网络错误，请稍后再试 ..."
            });
        }), n.onTimeUpdate(function() {
            if (0 <= o.globalData.currentAudioIndex) {
                var e, i = "audios[" + o.globalData.currentAudioIndex + "].playtime", r = "audios[" + o.globalData.currentAudioIndex + "].percent";
                u.setData((e = {}, a(e, i, t.formatSecond(n.currentTime.toFixed(0))), a(e, r, n.currentTime.toFixed(2) / n.duration.toFixed(2) * 100), 
                e));
            }
        }), n.onEnded(function() {
            var e;
            console.log("播放结束 ...请重置播放器 ...");
            var t = "audios[" + o.globalData.currentAudioIndex + "].playtime", n = "audios[" + o.globalData.currentAudioIndex + "].percent", i = "audios[" + o.globalData.currentAudioIndex + "].statusImage";
            u.setData((e = {}, a(e, t, "00:00"), a(e, n, 0), a(e, i, "../../images/play.png"), 
            e));
        });
    },
    audioPlayerTapHandler: function(e) {
        var t = this, i = e.currentTarget.id - 1;
        if (i == o.globalData.currentAudioIndex) if (n.paused) {
            d = "audios[" + o.globalData.currentAudioIndex + "].statusImage";
            t.setData(a({}, d, "../../images/pause.png")), n.play();
        } else {
            d = "audios[" + o.globalData.currentAudioIndex + "].statusImage";
            t.setData(a({}, d, "../../images/play.png")), n.pause();
        } else {
            if (0 <= o.globalData.currentAudioIndex) {
                var u, r = "audios[" + o.globalData.currentAudioIndex + "].playtime", s = "audios[" + o.globalData.currentAudioIndex + "].percent", d = "audios[" + o.globalData.currentAudioIndex + "].statusImage";
                t.setData((u = {}, a(u, r, "00:00"), a(u, s, 0), a(u, d, "../../images/play.png"), 
                u)), n.stop();
            }
            o.globalData.currentAudioIndex = i, n.src = t.data.audios[o.globalData.currentAudioIndex].url, 
            n.play();
        }
    },
    onReady: function() {},
    onShow: function() {},
    restoreAudioPlayer: function() {
        if (0 <= o.globalData.currentAudioIndex) {
            var e;
            n.stop();
            var t = this, i = "audios[" + o.globalData.currentAudioIndex + "].playtime", u = "audios[" + o.globalData.currentAudioIndex + "].percent", r = "audios[" + o.globalData.currentAudioIndex + "].statusImage";
            t.setData((e = {}, a(e, i, "00:00"), a(e, u, 0), a(e, r, "../../images/play.png"), 
            e)), o.globalData.currentAudioIndex = -1;
        }
    },
    onHide: function() {
        this.restoreAudioPlayer();
    },
    onUnload: function() {
        this.restoreAudioPlayer();
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return {
            title: "小黄人安全乘车音频",
            path: "/pages/safety/audios/audios",
            success: function(a) {},
            fail: function(a) {},
            complete: function() {}
        };
    }
});