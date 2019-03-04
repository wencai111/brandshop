//合并对象 迭代添加属性
function a(a, e, t) {
    return e in a ? Object.defineProperty(a, e, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[e] = t, a;
}

var config = require("../../../wxc.config.js");
var util = require("../../../utils/util.js");
var appData = getApp();
var audio = wx.createInnerAudioContext();

Page({
    data: {
        audios: [],
        safetyAudioBanner: config.mediaUrl + "/images/safety-audio-banner.jpg"
    },
    onLoad: function(i) {
        wx.showLoading({
            title: "努力加载 ..."
        });
        var _this = this;
        wx.request({
            url: config.apiUrlDev + "/safety/audios",
            method: "POST",
            success: function(ref) {
                ref.data.data.forEach(function(a) {
                    a.image = config.mediaUrl + "/" + a.image;
                    a.url = config.mediaUrl + "/" + a.url;
                    a.playtime = "00:00";
                    a.percent = 0;
                    a.statusImage = "../../images/play.png";
                });
                 _this.setData({
                    audios: ref.data.data
                });
                 console.log(_this.data.audios);
            },
            fail: function(a) {
                console.log("failure from ", config.apiUrlDev + "/safety/audios"), console.log(a);
            },
            complete: function() {
                wx.hideLoading();
            }
        });
        audio.onPlay(function() {
            console.log("start to play music ", audio.src);
            var statusImage = "audios[" + appData.globalData.currentAudioIndex + "].statusImage";
            var obj=a({}, statusImage, "../../images/pause.png")
            _this.setData(obj);
        });
        audio.onError(function(ref) {
            console.log(ref.errCode);
             wx.showToast({
                title: "网络错误，请稍后再试 ..."
            });
        });
        audio.onTimeUpdate(function() {
            if (0 <= appData.globalData.currentAudioIndex) {
                var obj={};
                playtime = "audios[" + appData.globalData.currentAudioIndex + "].playtime";
                percent = "audios[" + appData.globalData.currentAudioIndex + "].percent";
                obj=a(obj, playtime, util.formatSecond(audio.currentTime.toFixed(0)));
                obj=a(obj, percent, audio.currentTime.toFixed(2) / audio.duration.toFixed(2) * 100)
                u.setData(obj);
            }
        });
        audio.onEnded(function() {
            var obj={};
            console.log("播放结束 ...请重置播放器 ...");
            var playtime = "audios[" + appData.globalData.currentAudioIndex + "].playtime";
            var percent = "audios[" + appData.globalData.currentAudioIndex + "].percent";
            var statusImage = "audios[" + appData.globalData.currentAudioIndex + "].statusImage";
             obj=a(obj, playtime, "00:00");
             obj=a(obj, percent, 0);
             obj= a(obj, statusImage, "../../images/play.png")
            u.setData(obj);
        });
    },
    audioPlayerTapHandler: function(ref) {
        var _this = this;
        var audioId = ref.currentTarget.id - 1;
        if (audioId == appData.globalData.currentAudioIndex)
         if (audio.paused) {
            var statusImage = "audios[" + appData.globalData.currentAudioIndex + "].statusImage";
            _this.setData(a({}, statusImage, "../../images/pause.png")), audio.play();
        }
         else {
            var statusImage = "audios[" + appData.globalData.currentAudioIndex + "].statusImage";
            _this.setData(a({}, statusImage, "../../images/play.png")), audio.pause();
        } 
        else {
            if (0 <= appData.globalData.currentAudioIndex) {
                var obj={};
                var playtime = "audios[" + appData.globalData.currentAudioIndex + "].playtime"
                var percent = "audios[" + appData.globalData.currentAudioIndex + "].percent";
                var statusImage = "audios[" + appData.globalData.currentAudioIndex + "].statusImage";
                obj=a(obj, playtime, "00:00");
                obj=a(obj, percent, 0);
                obj=a(obj, statusImage, "../../images/play.png")
                _this.setData(obj);
                audio.stop();
            }
            appData.globalData.currentAudioIndex = audioId;
            _this.src = _this.data.audios[appData.globalData.currentAudioIndex].url, 
            audio.play();
        }
    },
    onReady: function() {},
    onShow: function() {},
    restoreAudioPlayer: function() {
        if (0 <= appData.globalData.currentAudioIndex) {
            var obj={};
            audio.stop();
            var _this = this;
            var playtime = "audios[" + appData.globalData.currentAudioIndex + "].playtime";
            var percent = "audios[" + appData.globalData.currentAudioIndex + "].percent";
            var statusImage = "audios[" + appData.globalData.currentAudioIndex + "].statusImage";
            obj=a(obj, playtime, "00:00");
            obj=a(obj, percent, 0);
            obj=a(obj, statusImage, "../../images/play.png");
            _this.setData(obj);
            appData.globalData.currentAudioIndex = -1;
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