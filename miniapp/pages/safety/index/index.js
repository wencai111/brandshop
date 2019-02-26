//合并对象，动态添加属性
function a(a, e, t) {
    if(e in a ){
        Object.defineProperty(a, e, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) 
    }else{
       return a[e] = t;
    }
    return a;
}

var config = require("../../../wxc.config.js");
var util = require("../../../utils/util.js");
var appData = getApp();
var audio = wx.createInnerAudioContext();

Page({
    data: {
        videos: [],
        audios: [],
        articles: [],
        safetyIndexBanner: config.mediaUrl + "/images/safety-index-banner.jpg",
        safetyIndexBK: config.mediaUrl + "/images/safety-index-bk.jpg"
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
        var _this = this;
        wx.request({
            url: config.apiUrlDev + "/safety/index",
            method: "POST",
            success: function(ref) {
                console.log(ref);
                ref.data.data.videos.forEach(function(item) {
                    item.image = config.mediaUrl + "/" + item.image;
                    item.url = config.mediaUrl + "/" + item.url;
                });
                ref.data.data.audios.forEach(function(item) {
                    item.image = config.mediaUrl + "/" + item.image;
                    item.url = config.mediaUrl + "/" + item.url;
                    item.playtime = "00:00", 
                    item.percent = 0;
                    item.statusImage = "../../images/play.png";
                });
                ref.data.data.articles.forEach(function(item) {
                    item.image = config.mediaUrl + "/" + item.image;
                });
                 _this.setData({
                    videos: ref.data.data.videos,
                    audios: ref.data.data.audios,
                    articles: ref.data.data.articles,
                    videoPoster: ref.data.data.videos[0].image
                }); 
                console.log(_this.data.videos);
                 console.log(_this.data.audios);
                  console.log(_this.data.articles);
            },
            fail: function(ref) {
                console.log("failure from ", config.apiUrl + "/safety/index"), console.log(ref);
            },
            complete: function() {
                wx.hideLoading();
            }
        });
        //播放音频
        audio.onPlay(function() {
            console.log("start to play music ", audio.src);
            var statusImage= "audios[" + appData.globalData.currentAudioIndex + "].statusImage";
            _this.setData(a({}, statusImage, "../../images/pause.png"));
        });
        audio.onError(function(ref) {
            console.log(ref.errCode), wx.showToast({
                title: "网络错误，请稍后再试 ..."
            });
        });
        audio.onTimeUpdate(function() {
            if (0 <= appData.globalData.currentAudioIndex) {
                var obj={};
                var playtime = "audios[" + appData.globalData.currentAudioIndex + "].playtime";
                var percent = "audios[" + appData.globalData.currentAudioIndex + "].percent";
                obj= a(obj, playtime, util.formatSecond(audio.currentTime.toFixed(0)));
                obj= a(obj, percent, audio.currentTime.toFixed(2) / audio.duration.toFixed(2) * 100);
               _this.setData(obj);
            }
        });
        audio.onEnded(function() {
            var e;
            console.log("播放结束 ...请重置播放器 ...");
            var t = "audios[" + appData.globalData.currentAudioIndex + "].playtime";
            var i = "audios[" + appData.globalData.currentAudioIndex + "].percent";
             var n = "audios[" + appData.globalData.currentAudioIndex + "].statusImage";
            _this.setData((e = {}, a(e, t, "00:00"), a(e, i, 0), a(e, n, "../../images/play.png"), 
            e));
        });
    },

    videoPlayerTapHandler: function(a) {

        var e = this;
        appData.globalData.currentVideoUrl = e.data.videos[0].url, appData.globalData.currentVideoPoster = e.data.videos[0].image, 
        appData.globalData.currentSubtitle = e.data.videos[0].subtitle, appData.globalData.currentIntro = e.data.videos[0].intro, 
        wx.navigateTo({
            url: "/pages/safety/videodetail/videodetail"
        });
    },
    audioPlayerTapHandler: function(e) {
        var t = this, n = e.currentTarget.id - 1;
        if (n == appData.globalData.currentAudioIndex) if (i.paused) {
            u = "audios[" + appData.globalData.currentAudioIndex + "].statusImage";
            t.setData(a({}, u, "../../images/pause.png")), i.play();
        } else {
            u = "audios[" + appData.globalData.currentAudioIndex + "].statusImage";
            t.setData(a({}, u, "../../images/play.png")), i.pause();
        } else {
            if (0 <= appData.globalData.currentAudioIndex) {
                var r, l = "audios[" + appData.globalData.currentAudioIndex + "].playtime", d = "audios[" + appData.globalData.currentAudioIndex + "].percent", u = "audios[" + appData.globalData.currentAudioIndex + "].statusImage";
                t.setData((r = {}, a(r, l, "00:00"), a(r, d, 0), a(r, u, "../../images/play.png"), 
                r)), i.stop();
            }
            appData.globalData.currentAudioIndex = n, i.src = t.data.audios[appData.globalData.currentAudioIndex].url, 
            i.play();
        }
    },
    articleTapHandler: function(a) {
        var e = this;
        console.log(a), appData.globalData.currentArticleUrl = e.data.articles[a.currentTarget.id - 1].url, 
        wx.navigateTo({
            url: "/pages/safety/articledetail/articledetail"
        }), console.log(appData.globalData.currentArticleUrl);
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
        if (0 <= appData.globalData.currentAudioIndex) {
            var e;
            audio.stop();
            var t = this, n = "audios[" + appData.globalData.currentAudioIndex + "].playtime", r = "audios[" + appData.globalData.currentAudioIndex + "].percent", l = "audios[" + appData.globalData.currentAudioIndex + "].statusImage";
            _this.setData((e = {}, a(e, n, "00:00"), a(e, r, 0), a(e, l, "../../images/play.png"), 
            e)), appData.globalData.currentAudioIndex = -1;
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
            imageUrl: config.mediaUrl + "/images/class-share.jpg",
            success: function(a) {},
            fail: function(a) {},
            complete: function() {}
        };
    }
});