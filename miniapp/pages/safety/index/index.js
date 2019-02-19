function a(a, e, t) {
    return e in a ? Object.defineProperty(a, e, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[e] = t, a;
}

var e = require("../../../osann.config.js"), t = require("../../../utils/util.js"), o = getApp(), i = wx.createInnerAudioContext();

Page({
    data: {
        videos: [],
        audios: [],
        articles: [],
        safetyIndexBanner: e.mediaUrl + "/images/safety-index-banner.jpg",
        safetyIndexBK: e.mediaUrl + "/images/safety-index-bk.jpg"
    },
    safetyIndexBannerTapHandler: function() {
        wx.navigateTo({
            url: "/pages/safety/survey/survey"
        });
    },
    onLoad: function(n) {
        wx.showLoading({
            title: "努力加载 ..."
        });
        var r = this;
        wx.request({
            url: e.apiUrl + "/safety/index",
            method: "POST",
            success: function(a) {
                console.log(a), a.data.data.videos.forEach(function(a) {
                    a.image = e.mediaUrl + "/" + a.image, a.url = e.mediaUrl + "/" + a.url;
                }), a.data.data.audios.forEach(function(a) {
                    a.image = e.mediaUrl + "/" + a.image, a.url = e.mediaUrl + "/" + a.url, a.playtime = "00:00", 
                    a.percent = 0, a.statusImage = "../../images/play.png";
                }), a.data.data.articles.forEach(function(a) {
                    a.image = e.mediaUrl + "/" + a.image;
                }), r.setData({
                    videos: a.data.data.videos,
                    audios: a.data.data.audios,
                    articles: a.data.data.articles,
                    videoPoster: a.data.data.videos[0].image
                }), console.log(r.data.videos), console.log(r.data.audios), console.log(r.data.articles);
            },
            fail: function(a) {
                console.log("failure from ", e.apiUrl + "/safety/index"), console.log(a);
            },
            complete: function() {
                wx.hideLoading();
            }
        }), i.onPlay(function() {
            console.log("start to play music ", i.src);
            var e = "audios[" + o.globalData.currentAudioIndex + "].statusImage";
            r.setData(a({}, e, "../../images/pause.png"));
        }), i.onError(function(a) {
            console.log(a.errCode), wx.showToast({
                title: "网络错误，请稍后再试 ..."
            });
        }), i.onTimeUpdate(function() {
            if (0 <= o.globalData.currentAudioIndex) {
                var e, n = "audios[" + o.globalData.currentAudioIndex + "].playtime", l = "audios[" + o.globalData.currentAudioIndex + "].percent";
                r.setData((e = {}, a(e, n, t.formatSecond(i.currentTime.toFixed(0))), a(e, l, i.currentTime.toFixed(2) / i.duration.toFixed(2) * 100), 
                e));
            }
        }), i.onEnded(function() {
            var e;
            console.log("播放结束 ...请重置播放器 ...");
            var t = "audios[" + o.globalData.currentAudioIndex + "].playtime", i = "audios[" + o.globalData.currentAudioIndex + "].percent", n = "audios[" + o.globalData.currentAudioIndex + "].statusImage";
            r.setData((e = {}, a(e, t, "00:00"), a(e, i, 0), a(e, n, "../../images/play.png"), 
            e));
        });
    },
    videoPlayerTapHandler: function(a) {
        var e = this;
        o.globalData.currentVideoUrl = e.data.videos[0].url, o.globalData.currentVideoPoster = e.data.videos[0].image, 
        o.globalData.currentSubtitle = e.data.videos[0].subtitle, o.globalData.currentIntro = e.data.videos[0].intro, 
        wx.navigateTo({
            url: "/pages/safety/videodetail/videodetail"
        });
    },
    audioPlayerTapHandler: function(e) {
        var t = this, n = e.currentTarget.id - 1;
        if (n == o.globalData.currentAudioIndex) if (i.paused) {
            u = "audios[" + o.globalData.currentAudioIndex + "].statusImage";
            t.setData(a({}, u, "../../images/pause.png")), i.play();
        } else {
            u = "audios[" + o.globalData.currentAudioIndex + "].statusImage";
            t.setData(a({}, u, "../../images/play.png")), i.pause();
        } else {
            if (0 <= o.globalData.currentAudioIndex) {
                var r, l = "audios[" + o.globalData.currentAudioIndex + "].playtime", d = "audios[" + o.globalData.currentAudioIndex + "].percent", u = "audios[" + o.globalData.currentAudioIndex + "].statusImage";
                t.setData((r = {}, a(r, l, "00:00"), a(r, d, 0), a(r, u, "../../images/play.png"), 
                r)), i.stop();
            }
            o.globalData.currentAudioIndex = n, i.src = t.data.audios[o.globalData.currentAudioIndex].url, 
            i.play();
        }
    },
    articleTapHandler: function(a) {
        var e = this;
        console.log(a), o.globalData.currentArticleUrl = e.data.articles[a.currentTarget.id - 1].url, 
        wx.navigateTo({
            url: "/pages/safety/articledetail/articledetail"
        }), console.log(o.globalData.currentArticleUrl);
    },
    moreVideoTapHandler: function(a) {
        wx.navigateTo({
            url: "/pages/safety/videos/videos"
        });
    },
    moreAudioTapHandler: function(a) {
        wx.navigateTo({
            url: "/pages/safety/audios/audios"
        });
    },
    moreArticleTapHandler: function(a) {
        wx.navigateTo({
            url: "/pages/safety/article/article"
        });
    },
    onReady: function() {},
    onShow: function() {},
    restoreAudioPlayer: function() {
        if (0 <= o.globalData.currentAudioIndex) {
            var e;
            i.stop();
            var t = this, n = "audios[" + o.globalData.currentAudioIndex + "].playtime", r = "audios[" + o.globalData.currentAudioIndex + "].percent", l = "audios[" + o.globalData.currentAudioIndex + "].statusImage";
            t.setData((e = {}, a(e, n, "00:00"), a(e, r, 0), a(e, l, "../../images/play.png"), 
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
    onShareAppMessage: function(a) {
        return {
            title: "小黄人安全课堂开讲啦",
            path: "/pages/safety/index/index",
            imageUrl: e.mediaUrl + "/images/class-share.jpg",
            success: function(a) {},
            fail: function(a) {},
            complete: function() {}
        };
    }
});