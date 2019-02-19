var o = require("../../../osann.config.js"), a = getApp();

Page({
    data: {
        goods: [],
        goodsIndex: o.mediaUrl + "/images/goods-index.jpg",
        goodsCoupon: o.mediaUrl + "/images/goods-coupon.jpg",
        goodsBanner: o.mediaUrl + "/images/goods-banner.jpg",
        showCouponDetail: !0,
        hiddenLoginModel: !0
    },
    wxfetchUserInfoWithOpenID: function(o) {
        var e = this, n = this;
        wx.getSetting({
            success: function(t) {
                console.log("auth -> ", t), t.authSetting["scope.userInfo"] ? (console.log("已经授权，无需弹出系统授权框，可以直接调用getUserInfo获取用户信息"), 
                wx.getUserInfo({
                    lang: "zh_CN",
                    withCredentials: !0,
                    success: function(t) {
                        a.globalData.userInfo = t.userInfo, console.log("non-open-type UserInfo : ", a.globalData.userInfo), 
                        wx.setStorage({
                            key: "userInfo",
                            data: a.globalData.userInfo
                        }), n.wxdecryptUserInfo(o, t.rawData, t.signature, t.iv, t.encryptedData), e.userInfoReadyCallback && e.userInfoReadyCallback(t);
                    }
                })) : (console.log("未授权，请调起授权登录"), n.setData({
                    hiddenLoginModel: !1
                }));
            }
        });
    },
    comfirmLoginTapHandler: function(o) {
        var e = this;
        e.setData({
            hiddenLoginModel: !0
        }), console.log("open-type userinfo ", o.detail), wx.setStorage({
            key: "userInfo",
            data: o.detail.userInfo
        }), e.wxdecryptUserInfo(a.globalData.openid, o.detail.rawData, o.detail.signature, o.detail.iv, o.detail.encryptedData);
    },
    wxdecryptUserInfo: function(e, n, t, s, i) {
        wx.request({
            url: o.apiUrl + "/userinfo/decryption",
            method: "POST",
            data: {
                openid: e,
                rawData: n,
                signature: t,
                iv: s,
                encryptedData: i
            },
            success: function(o) {
                console.log("decrypt userinfo successful : ", o), wx.setStorage({
                    key: "userid",
                    data: o.data
                }), a.globalData.userid = parseInt(o.data);
            },
            fail: function(o) {
                console.log("decrypt userinfo failure : ", o);
            }
        });
    },
    goodsCouponTapHandler: function(o) {
        var e = this;
        0 === a.globalData.userid && "" !== a.globalData.openid && (console.log("authorized ...."), 
        e.wxfetchUserInfoWithOpenID(a.globalData.openid)), e.setData({
            showCouponDetail: !1
        });
    },
    GetCouponTapHandler: function(e) {
        var n = this;
        wx.request({
            url: o.apiUrl + "/coupon/new",
            method: "POST",
            data: {
                openid: a.globalData.openid,
                userid: a.globalData.userid,
                coupon_id: 1,
                coupon_name: "小黄人立减红包",
                status: 0,
                source: 5
            },
            success: function(o) {
                wx.showToast({
                    title: "领取成功",
                    image: "../../../images/success.png",
                    duration: 1e3,
                    mask: !0,
                    success: function() {},
                    fail: function() {},
                    complete: function() {}
                });
            }
        }), n.setData({
            showCouponDetail: !0
        });
    },
    goodsBannerTapHandler: function() {
        var o = this;
        0 === a.globalData.userid && "" !== a.globalData.openid && (console.log("authorized ...."), 
        o.wxfetchUserInfoWithOpenID(a.globalData.openid));
        var e = "goodsID=" + o.data.goods[0].goodsID + "&price=" + o.data.goods[0].price + "&title=" + o.data.goods[0].goods_title;
        wx.navigateTo({
            url: "/pages/product/goods/goods?" + e
        });
    },
    onLoad: function(e) {
        wx.showLoading({
            title: "努力加载 ..."
        });
        var n = this;
        console.log("goods-index app ->", a.globalData), 0 === a.globalData.userid && "" !== a.globalData.openid && (console.log("authorized ...."), 
        n.wxfetchUserInfoWithOpenID(a.globalData.openid)), wx.request({
            url: o.apiUrl + "/goods",
            method: "POST",
            success: function(o) {
                o.data.data.forEach(function(o) {
                    o.price = o.price / 100;
                }), n.setData({
                    goods: o.data.data
                }), console.log(n.data.goods);
            },
            fail: function(a) {
                console.log("failure from ", o.apiUrl + "/goods"), console.log(a);
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    },
    buynowTapHandler: function(o) {
        var e = o.currentTarget.id, n = this;
        0 === a.globalData.userid && "" !== a.globalData.openid && (console.log("authorized ...."), 
        n.wxfetchUserInfoWithOpenID(a.globalData.openid));
        var t = "goodsID=" + n.data.goods[e].goodsID + "&price=" + n.data.goods[e].price + "&title=" + n.data.goods[e].goods_title;
        wx.navigateTo({
            url: "/pages/product/goods/goods?" + t
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
            imageUrl: o.mediaUrl + "/images/goods-share.jpg",
            success: function(o) {},
            fail: function(o) {},
            complete: function() {}
        };
    }
});