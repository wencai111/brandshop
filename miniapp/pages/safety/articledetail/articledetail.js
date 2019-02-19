var n = getApp();

Page({
    data: {
        currentUrl: "https://mp.weixin.qq.com/s/OrKD0dY9DqC5gRVq-MJyDQ"
    },
    onLoad: function(t) {
        var e = this, o = n.globalData.currentArticleUrl;
        void 0 !== t.url && (o = decodeURIComponent(t.url)), e.setData({
            currentUrl: o
        });
    },
    onReady: function() {},
    onShow: function() {
        var n = this;
        console.log("Debug for webview url is ", n.data.currentUrl);
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return {
            title: "小黄人安全乘车文章",
            path: "/pages/safety/articledetail/articledetail?url=" + encodeURIComponent(n.globalData.currentArticleUrl),
            success: function(n) {},
            fail: function(n) {},
            complete: function() {}
        };
    }
});