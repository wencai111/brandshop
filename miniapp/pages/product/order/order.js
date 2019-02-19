function o(o, e, a) {
    return e in o ? Object.defineProperty(o, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : o[e] = a, o;
}

var e = require("../../../osann.config.js"), a = getApp();

Page({
    data: {
        withoutAddress: !0,
        expressInfo: {
            mobile: "027-87878787",
            consignee: "欧阳武隽",
            province: "湖北省",
            city: "武汉市",
            distric: "东湖高新技术开发区",
            address: "光谷大道6066号武汉高科中心B座6608号"
        },
        order: {
            title: "小程序测试品牌儿童安全座椅防磨垫子isofix接口",
            price: parseFloat(500).toFixed(2),
            num: 2,
            total: parseFloat(450).toFixed(2),
            image: "https://cdn.osann-china.com/goods/1/sku/1.jpg"
        },
        hasCoupon: !1
    },
    fetchAddressFromWx: function() {
        var e = this;
        wx.chooseAddress({
            success: function(a) {
                var r;
                console.log(a), e.setData((r = {}, o(r, "expressInfo.consignee", a.userName), o(r, "expressInfo.mobile", a.telNumber), 
                o(r, "expressInfo.province", a.provinceName), o(r, "expressInfo.city", a.cityName), 
                o(r, "expressInfo.district", a.countyName), o(r, "expressInfo.address", a.detailInfo), 
                r)), e.data.withoutAddress && e.setData({
                    withoutAddress: !1
                }), console.log(e.data.expressInfo), wx.setStorage({
                    key: "expressInfo",
                    data: e.data.expressInfo
                });
            }
        });
    },
    confirmPayOrder: function() {
        var o = this;
        o.data.withoutAddress ? wx.showToast({
            title: "请填写完整的快递信息",
            icon: "none",
            duration: 1e3
        }) : wx.request({
            url: e.apiUrl + "/order/new",
            method: "POST",
            data: {
                openid: a.globalData.orderInfo.openid,
                userid: a.globalData.orderInfo.userid,
                goodsID: a.globalData.orderInfo.goodsID,
                orderno: a.globalData.orderInfo.orderNO,
                sku: a.globalData.orderInfo.sku,
                title: a.globalData.orderInfo.title,
                image: a.globalData.orderInfo.image,
                num: a.globalData.orderInfo.num,
                price: a.globalData.orderInfo.price,
                total_amount: a.globalData.orderInfo.total,
                pay_amount: a.globalData.orderInfo.pay_amount,
                coupon_amount: a.globalData.orderInfo.coupon,
                consignee: o.data.expressInfo.consignee,
                mobile: o.data.expressInfo.mobile,
                province: o.data.expressInfo.province,
                city: o.data.expressInfo.city,
                district: o.data.expressInfo.distric,
                address: o.data.expressInfo.address
            },
            success: function(o) {
                console.log("create order success -> ", o), console.log("orderinfo -> ", a.globalData.orderInfo), 
                wx.request({
                    url: e.payUrl + "/unifiedorder",
                    method: "POST",
                    data: {
                        openid: a.globalData.orderInfo.openid,
                        userid: a.globalData.orderInfo.userid,
                        body: a.globalData.orderInfo.title,
                        order_no: a.globalData.orderInfo.orderNO,
                        total_fee: a.globalData.orderInfo.pay_amount
                    },
                    success: function(o) {
                        wx.requestPayment({
                            timeStamp: o.data.timeStamp,
                            nonceStr: o.data.nonceStr,
                            package: o.data.package,
                            signType: o.data.signType,
                            paySign: o.data.paySign,
                            success: function(o) {
                                console.log("pay success -> ", o), wx.redirectTo({
                                    url: "/pages/product/orderlist/orderlist?status=1"
                                });
                            },
                            fail: function(o) {
                                console.log("pay fail -> ", o), wx.redirectTo({
                                    url: "/pages/product/orderlist/orderlist?status=0"
                                });
                            }
                        });
                    },
                    fail: function(o) {
                        console.log("make pay-order failure -> ", o);
                    },
                    complete: function(o) {
                        console.log("make pay-order success -> ", o);
                    }
                });
            },
            fail: function(o) {
                console.log("create order failure -> ", o);
            },
            complete: function(o) {
                console.log("create order complete -> ", o);
            }
        });
    },
    onLoad: function(r) {
        var t = this;
        wx.getStorage({
            key: "expressInfo",
            success: function(o) {
                t.setData({
                    expressInfo: o.data,
                    withoutAddress: !1
                });
            }
        }), wx.request({
            url: e.apiUrl + "/coupon/available",
            method: "POST",
            data: {
                openid: a.globalData.openid
            },
            success: function(o) {
                console.log("available coupon info -> ", o, " -> ", o.data.data), 0 === o.data.code ? (a.globalData.orderInfo.coupon = 5e3, 
                a.globalData.orderInfo.pay_amount = a.globalData.orderInfo.total - a.globalData.orderInfo.coupon, 
                t.setData({
                    hasCoupon: !0
                })) : (a.globalData.orderInfo.coupon = 0, a.globalData.orderInfo.pay_amount = a.globalData.orderInfo.total);
            },
            fail: function(o) {
                console.log("failure from ", e.apiUrl + "/coupon/available");
            },
            complete: function(r) {
                if (console.log("now -> ", a.globalData.orderInfo), null != a.globalData.orderInfo) {
                    var n;
                    t.setData((n = {}, o(n, "order.title", a.globalData.orderInfo.title), o(n, "order.price", parseFloat(a.globalData.orderInfo.price / 100).toFixed(2)), 
                    o(n, "order.image", e.mediaUrl + a.globalData.orderInfo.image), o(n, "order.num", a.globalData.orderInfo.num), 
                    o(n, "order.total", parseFloat(a.globalData.orderInfo.pay_amount / 100).toFixed(2)), 
                    n));
                }
                console.log("now order -> ", t.data.order);
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});