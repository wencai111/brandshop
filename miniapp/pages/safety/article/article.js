var config = require("../../../wxc.config.js");
var t = getApp();

Page({
    data: {
        articles: [],
        safetyArticleBanner: config.mediaUrl + "/images/safety-article-banner.jpg"
    },
    onLoad: function(t) {
        wx.showLoading({
            title: "努力加载 ..."
        });
        var e = this;
        wx.request({
            url: config.apiUrl + "/safety/articles",
            method: "POST",
            success: function(t) {
                t.data.data.forEach(function(t) {
                    t.image = a.mediaUrl + "/" + t.image;
                }), e.setData({
                    articles: t.data.data
                }), console.log(e.data.articles);
            },
            fail: function(t) {
                console.log("failure from ", a.apiUrl + "/safety/articles"), console.log(t);
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    },
    articleTapHandler: function(a) {
        var e = this;
        console.log(a), t.globalData.currentArticleUrl = e.data.articles[a.currentTarget.id - 1].url, 
        wx.navigateTo({
            url: "/pages/safety/articledetail/articledetail"
        }), console.log(t.globalData.currentArticleUrl);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return {
            title: "小黄人安全乘车文章",
            path: "/pages/safety/article/article",
            success: function(a) {},
            fail: function(a) {},
            complete: function() {}
        };
    }
});