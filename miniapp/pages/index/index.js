var config = require("../../wxc.config.js");

getApp();

Page({
    data: {
        serviceImgUrl: config.mediaUrl + "/images/service.gif",
        safetySurvey: config.mediaUrl + "/images/index-safety-survey.jpg",
        safetyClass: config.mediaUrl + "/images/index-safety-class.jpg"
    },
    onLoad: function(e) {},
    onShow: function(e) {},
    onShareAppMessage: function(a) {
        return {
            title: "小黄人守护儿童安全出行",
            path: "/pages/index/index",
            imageUrl: e.mediaUrl + "/images/index-share.jpg",
            success: function(e) {},
            fail: function(e) {},
            complete: function() {}
        };
    },
    safetySurveyTapHandler: function(e) {
        wx.navigateTo({
            url: "/pages/safety/survey/survey"
        });
    },
    safetyClassTapHandler: function(e) {
        wx.navigateTo({
            url: "/pages/safety/index/index"
        });
    }
});