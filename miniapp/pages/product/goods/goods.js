function o(o, a, e) {
    return a in o ? Object.defineProperty(o, a, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : o[a] = e, o;
}

var a = require("../../../osann.config.js"), e = require("../../../utils/util.js"), t = getApp();

Page({
    data: {
        imageContent: [],
        serviceImgUrl: a.mediaUrl + "/images/contact.jpg",
        buynowImgUrl: a.mediaUrl + "/images/buynow.jpg",
        goods: {},
        skuimage: "",
        hiddenSkuModal: !0
    },
    onLoad: function(e) {
        var t;
        wx.showLoading({
            title: "努力加载 ..."
        });
        var n = this;
        n.setData((t = {}, o(t, "goods.goodsID", e.goodsID), o(t, "goods.price", e.price), 
        o(t, "goods.title", e.title), t)), console.log(e), wx.request({
            url: a.apiUrl + "/goods/content",
            method: "POST",
            data: {
                goodsID: Number(e.goodsID)
            },
            success: function(e) {
                var t, i = new Array();
                new Array();
                e.data.data.content.forEach(function(o, e) {
                    i[e] = a.mediaUrl + o;
                });
                var d = [];
                e.data.data.skus.forEach(function(o, a) {
                    var e = {
                        name: "",
                        checked: !1
                    };
                    e.name = o, d[a] = e;
                }), d[0].checked = !0, n.setData((t = {
                    imageContent: i
                }, o(t, "goods.skus", d), o(t, "goods.images", e.data.data.sku_images), o(t, "skuimage", a.mediaUrl + e.data.data.sku_images[0]), 
                t));
            },
            fail: function(o) {
                console.log("failure from ", a.apiUrl + "/goods/content"), console.log(o);
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    },
    buynowTapHandler: function(o) {
        this.setData({
            hiddenSkuModal: !1
        });
    },
    buyConfirm: function(o) {
        var a = this, n = e.formatTimeStr(new Date());
        t.globalData.orderInfo = {
            sku: o.detail.color,
            num: o.detail.num,
            image: o.detail.image,
            title: a.data.goods.title,
            price: 100 * a.data.goods.price,
            goodsID: a.data.goods.goodsID,
            openid: t.globalData.openid,
            userid: t.globalData.userid,
            total: o.detail.num * a.data.goods.price * 100,
            orderNO: n + t.globalData.userid,
            coupon: 5e3
        }, console.log("basic order : ", t.globalData.orderInfo), wx.navigateTo({
            url: "/pages/product/order/order"
        }), a.setData({
            hiddenSkuModal: !0
        });
    },
    closeSkuModal: function() {
        this.setData({
            hiddenSkuModal: !0
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
            title: "小黄人守护儿童乘车安全底线",
            path: "/pages/product/index/index",
            imageUrl: a.mediaUrl + "/images/goods-share.jpg",
            success: function(o) {},
            fail: function(o) {},
            complete: function() {}
        };
    }
});