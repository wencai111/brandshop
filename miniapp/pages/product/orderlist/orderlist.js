var config = require("../../../wxc.config.js");
var e = getApp();

Page({
    data: {
        statusType: [ "待付款", "待发货", "待收货", "退换货", "已完成" ],
        currentType: 0,
        tabClass: [ "", "", "", "", "" ],
        orderList: []
    },
    onLoad: function(o) {
        console.log(o), this.setData({
            currentType: o.status
        });
    },
    statusTapHandler: function(o) {
        var e = o.currentTarget.dataset.index, t = this;
        t.setData({
            currentType: e
        }), t.onShow();
    },
    cancelOrderTap: function(e) {
        wx.showModal({
            title: "提示",
            content: "请确认是否要删除当前未支付订单，删除后无法找回。",
            success: function(t) {
                t.confirm ? (console.log("用户确定 - 删除订单"), console.log(e.currentTarget), wx.request({
                    url: config.apiUrl + "/goods/delete",
                    method: "POST",
                    data: {
                        orderno: e.currentTarget.dataset.orderno
                    },
                    success: function(o) {
                        console.log("删除订单 -> ", e.currentTarget.dataset.orderno);
                    },
                    fail: function(e) {
                        console.log("failure from ", o.apiUrl + "/goods/delete"), console.log(e);
                    }
                })) : t.cancel && console.log("用户取消 - 删除订单");
            }
        });
    },
    toPayOrderTap: function(e) {
        var t = this.data.orderList[e.currentTarget.dataset.index];
        console.log("order list -> ", t), wx.request({
            url: config.payUrl + "/unifiedorder",
            method: "POST",
            data: {
                openid: t.openid,
                userid: Number(t.userid),
                body: t.goods_title,
                order_no: t.order_no,
                total_fee: Number(t.pay_amount)
            },
            success: function(o) {
                console.log("pay params -> ", o.data), wx.requestPayment({
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
                        console.log("pay fail -> ", o), wx.showToast({
                            title: "支付失败，请稍后再尝试支付",
                            icon: "none",
                            duration: 1e3
                        }), wx.redirectTo({
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
    toShippedTap: function(o) {
        wx.showToast({
            title: "已成功提醒商家发货，小主请耐心等待！",
            icon: "none",
            duration: 1e3
        });
    },
    buyAgainTapHandler: function(o) {
        var e = o.currentTarget.dataset.goods, t = "goodsID=" + e.goods_id + "&price=" + e.goods_price + "&title=" + e.goods_title;
        wx.redirectTo({
            url: "/pages/product/goods/goods?" + t
        });
    },
    onReady: function() {},
    onShow: function() {
        var t = this;
        wx.showLoading();
        var a = this;
        wx.request({
            url: config.apiUrl + "/order/list/openid",
            method: "post",
            data: {
                openid: e.globalData.openid,
                status: parseInt(a.data.currentType)
            },
            success: function(e) {
                wx.hideLoading(), console.log("order info -> ", e.data);
                var n = e.data.data;
                0 == e.data.code && null != e.data.data ? (e.data.data.forEach(function(e, t) {
                    n[t].goods_image = o.mediaUrl + e.goods_image, n[t].goods_price = parseFloat(e.goods_price / 100).toFixed(2);
                }), a.setData({
                    orderList: n
                })) : t.setData({
                    orderList: null
                });
            },
            fail: function(o) {
                console.log("获取订单失败 -> ", o);
            }
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});